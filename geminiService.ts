
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const appraiseCard = async (cardName: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Appraise the following trading card: ${cardName}. Provide a short, exciting expert analysis about its rarity, desirability, and estimated market trend (not exact price). Keep it under 60 words.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });
    return response.text || "Gemini is busy appraising...";
  } catch (error) {
    console.error("Appraisal error:", error);
    return "Could not reach the appraisal expert at the moment.";
  }
};
