import React, { useState } from "react";
const { Configuration, OpenAIApi } = require("openai");

function InterfaceAI() {
  const configuration = new Configuration({
    apiKey: "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",
  });
  const [prompt, setPrompt] = useState("");
  async function sendAi(e) {
    e.preventDefault();
    // console.log("hi");
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 100,
      temperature: 0,
    });
    const doc = document.querySelector(".resultAI");
    // console.log(response.data.choices[0].text);
    doc.innerHTML = response.data.choices[0].text;
    doc.style.backgroundColor = "rgba(255, 255, 255,0.2)";
    setPrompt("empty");
  }
  let baseprompt = "Validate the Idea : ";
  return (
    <div className="interfaceAI">
      <div className="resultAI"></div>
      <form className="inputAI" action="">
        <input
          type="text"
          className="inputTextAI"
          placeholder="Write a prompt for your mail:"
          onChange={(e) => setPrompt(baseprompt + e.target.value)}
        />
        <button type="submit" className="btn buttonAI" onClick={sendAi}>
          <i className="fa fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
}

export default InterfaceAI;
