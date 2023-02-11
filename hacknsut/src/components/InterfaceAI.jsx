import React, { useState } from 'react';
const { Configuration, OpenAIApi } = require("openai");
// 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

 function InterfaceAI() {

  useState

  const configuration = new Configuration({
    apiKey: "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",
  });

  async function fun(e) {
    e.preventDefault();
    console.log("hi");
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Validate the following idea : a platform for businesses to connect, collaborate, and validate their idea, support innovation",
      max_tokens: 100,
      temperature: 0,
    });
    console.log(response.data.choices[0].text);
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
        <button className="btn buttonAI" onClick={fun}>
          <i className="fa fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
}

export default InterfaceAI;
