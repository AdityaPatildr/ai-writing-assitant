"use client";

import { useState, useRef, useEffect } from "react";

export default function WritingArea({
  onTextChange,
  setIsSubmit,
  selectedOption,
  setSelectedOption,
}: {
  onTextChange: (text: string) => void;
  setIsSubmit: (value: boolean) => void;
  selectedOption: string;
  setSelectedOption: (value: string) => void;
}) {
  const [text, setText] = useState("");
  const [isButtonenabled, setIsButtonEnabled] = useState(false);

  // Type the ref with HTMLTextAreaElement
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const current = textareaRef.current;
    if (current) {
      current.style.height = "inherit";
      current.style.height = `${current.scrollHeight}px`;
    }
  }, [text]);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    if (e.target.value.length > 0 && e.target.value.trim().length > 0) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-full p-4 ">
        <form action="" className="w-full text-xl">
          <textarea
            ref={textareaRef}
            className="w-full p-4 
            bg-transparent
             text-slate-100 rounded-lg border-none focus:outline-none resize-none overflow-hidden"
            value={text}
            onChange={handleChange}
            placeholder="Start typing..."
          />
          <div className="flex justify-between">
            <div>
              <select
                name="writingOptions"
                id="writingOptions"
                className=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
                value={selectedOption}
              >
                <option value="Improve Grammar">Improve Grammar</option>
                <option value="Improve Tone">Improve Tone</option>
                <option value="Make it more formal">Make it more formal</option>
              </select>
            </div>
            <button
              className={`text-white focus:outline-none focus:ring-4 focus:ring-black font-medium rounded-xl text-md px-3 py-2 text-center me-2 mb-2  ${
                isButtonenabled
                  ? "bg-[color:var(--accent)] hover:bg-[color:var(--accent-hover)]"
                  : "cursor-not-allowed bg-slate-400"
              }`}
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setIsSubmit(true);
                onTextChange(text);
              }}
              disabled={!isButtonenabled}
            >
              <svg
                className={`w-6 h-6
                ${isButtonenabled ? "text-black" : `text-white`}`}
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
