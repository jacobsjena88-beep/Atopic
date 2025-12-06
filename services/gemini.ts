import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateSectionContent = async (section: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Write a short, inspiring, and professional paragraph (approx 50-80 words) for the "${section}" section of a dermatology non-profit organization called "DermReach". 
      The tone should be compassionate, expert, and inclusive. 
      Theme: "Access to Quality Dermatology for All".`,
    });
    return response.text || "Content currently unavailable. Please try again later.";
  } catch (error) {
    console.error("Error generating content:", error);
    return "Unable to load content at this time.";
  }
};