"use client";

import { useState, useEffect, use } from "react";
import gemini from "../utils/gemini";

type GeminiResponse = {
  outputText: string;
  status: string;
};

export default function AiOutput({
  text,
  isSubmit,
  setIsSubmit,
  selectedOption,
}: {
  text: string;
  isSubmit: boolean;
  setIsSubmit: (value: boolean) => void;
  selectedOption: string;
}) {
  const [resp, setResp] = useState<GeminiResponse>({
    outputText: "",
    status: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  console.log(text);

  useEffect(() => {
    if (isSubmit) {
      getOutput();
      setIsSubmit(false);
    }
  }, [isSubmit]);

  const getOutput = async () => {
    setLoading(true);

    const result = await gemini(text, selectedOption);

    const resp: GeminiResponse = {
      outputText: result.outputText,
      status: result.status,
    };

    setResp(resp);

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      {/* div at far right */}
      <div className="flex justify-end w-full">
        {loading ? (
          ""
        ) : resp.status === "success" ? (
          <button
            onClick={() => {
              navigator.clipboard.writeText(resp.outputText);
            }}
            className="p-2 bg-[color:var(--accent)]  hover:bg-[color:var(--accent-hover)] text-black focus:outline-none focus:ring-4 focus:ring-black font-medium rounded-xl text-md px-3 py-2 text-center me-2 mb-2"
          >
            Copy
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="w-full p-4 bg-transperent text-slate-100 rounded-lg border-none focus:outline-none">
        {loading ? (
          <div className="flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-t-2 border-slate-100 rounded-full animate-spin"></div>
          </div>
        ) : resp.status === "userInputError" ||
          resp.status === "internalError" ? (
          <div className="text-red-600">{resp.outputText}</div>
        ) : (
          <div className="text-slate-100">{resp.outputText}</div>
        )}
      </div>
    </div>
  );
}
