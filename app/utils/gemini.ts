const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const MODEL_NAME = "gemini-1.0-pro";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

type GeminiResponse = {
  outputText: string;
  status: string;
};

export default async function gemini(text: string, selectedOption: string) {
  if (
    text === "" ||
    text === undefined ||
    text === null ||
    text.trim().length === 0
  ) {
    const resp: GeminiResponse = {
      outputText: "Please provide a valid input",
      status: "userInputError",
    };
    return resp;
  }

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const parts = [
    {
      text: `You will act as an writing assistant.
    A text will be provided along with an option and give corrected text. Do not use markdown syntax  \n\ninput format-
    {\t"inputText" : "", "inputOption" : ""
  }output format-{"outputText": "",}{"inputText" : "${text}", "inputOption" : "${selectedOption}}"`,
    },
  ];

  // const result = await model.generateContent({
  //   contents: [{ role: "user", parts }],
  //   generationConfig,
  //   safetySettings,
  // });

  // const response = result.response;
  // let output = response.text();

  // let jsonString = JSON.parse(output);
  // output = jsonString.outputText;

  // return output;

  try {
    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig,
      safetySettings,
    });
    const response = result.response;
    let output = response.text();

    let jsonString = JSON.parse(output);
    output = jsonString.outputText;

    const resp: GeminiResponse = {
      outputText: output,
      status: "success",
    };
    console.log(resp.outputText);
    return resp;
  } catch (e) {
    const resp: GeminiResponse = {
      outputText: "An error occured",
      status: "internalError",
    };
    console.log(e);
    return resp;
  }
}
