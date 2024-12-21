import { GoogleGenerativeAI } from "@google/generative-ai";
import { promptVer1 } from "./prompts";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

export const aiSummariseCommitDiff = async (diff: string) => {
  const response = await model.generateContent([
    promptVer1,
    `Please summarise the following file: \n\n${diff}`,
  ]);

  return response.response.text();
};
