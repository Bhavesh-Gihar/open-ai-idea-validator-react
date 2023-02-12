const Post = require("../models/Post");
const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const { userLoggedin } = require("./auth");

//update post
router.put("post/*", async (req, res) => {
  if(userLoggedin && req.params[0] == userLoggedin){
        try {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        } catch (err) {
            return res.status(500).json(err);
        }
        try {
          const user = await Post.updateOne({postTitle: req.params[1]}, {
            $set: req.body,
          });
          res.status(200).json("Post has been updated");
        } catch (err) {
          return res.status(500).json(err);
        }
      } else {
        console.log("user not logged in");
    }
});

//delete user
router.delete("post/*", async (req, res) => {
    if(userLoggedin && req.params[0] == userLoggedin){
        try {
            await Post.deleteOne({postTitle: req.params[1]},(err) => console.log(err));
            res.status(200).json("Post has been deleted");
          } catch (err) {
            return res.status(500).json(err);
          }
        } 
       else {
        console.log("user not logged in");
    }
    return res.status(403).json("You can delete only your Post!");
  }
);
//get a post
router.get("post/*", async (req, res) => {
  try {
    const post = await Post.findOne({postTitle: req.params[0]});
    const { password, updatedAt, ...other } = post._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(200).json("user has been followed");
      } else {
        res.status(403).json("you allready follow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you cant follow yourself");
  }
});

//unfollow a user

router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followings: req.params.id } });
        res.status(200).json("user has been unfollowed");
      } else {
        res.status(403).json("you dont follow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you cant unfollow yourself");
  }
});

module.exports = router;
