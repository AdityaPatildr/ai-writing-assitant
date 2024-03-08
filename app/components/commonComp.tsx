"use client";

// CommonComp.js
import React, { useState } from "react";
import AiOutput from "./aiOutput";
import WritingArea from "./writingArea";

export default function CommonComp() {
  const [text, setText] = useState<string>(""); // 'text' is of type string
  const [isSubmit, setIsSubmit] = useState<boolean>(false); // 'isSubmit' is of type boolean
  const [selectedOption, setSelectedOption] =
    useState<string>("Improve Grammar"); // 'selectedOption' is of type string

  // Type annotation for 'newText' parameter ensures that this function can only be called with a string
  const handleTextChange = (newText: string) => {
    setText(newText);
  };

  return (
    <div className="flex flex-col h-full p-4">
      <WritingArea
        onTextChange={handleTextChange}
        setIsSubmit={setIsSubmit}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <AiOutput
        text={text}
        isSubmit={isSubmit}
        setIsSubmit={setIsSubmit}
        selectedOption={selectedOption}
      />
    </div>
  );
}
