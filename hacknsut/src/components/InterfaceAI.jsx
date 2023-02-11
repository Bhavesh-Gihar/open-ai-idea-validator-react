import React from "react";
const { Configuration, OpenAIApi } = require("openai");
// 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


function InterfaceAI() {
    const sendAI = () => {
      const configuration = new Configuration({
        apiKey: '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',
      });
      const openai = new OpenAIApi(configuration);
      const response = openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
      });
    }
  return (
    <div className="interfaceAI">
      <div className="resultAI"></div>
      <form className="inputAI" action="">
        <input
          type="text"
          className="inputTextAI"
          placeholder="Write a prompt for your mail:"
        />
        <button className="btn buttonAI" onClick={sendAI}>
          <i className="fa fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
}

export default InterfaceAI;
