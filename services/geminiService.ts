
import { GoogleGenAI } from "@google/genai";

/**
 * Generates a strategic response based on user input using the Gemini API.
 * Follows the prescribed initialization and model selection guidelines.
 */
export const generateStrategyResponse = async (userPrompt: string) => {
  // Always use the named parameter and direct environment variable reference.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are the Dilijent Systems AI Strategist. 
        Your goal is to help businesses understand how AI and intelligent automation can improve their operations.
        Dilijent Systems specializes in:
        1. AI Strategy & Implementation
        2. Process Automation (RPA/AI)
        3. Data Analytics & Insights
        4. Cloud Infrastructure Optimization
        
        Keep your tone professional, innovative, and results-oriented.
        Always suggest how Dilijent's "Systems Thinking" approach helps bridge the gap between technology and business value.`,
        temperature: 0.7,
      }
    });
    
    // Access the text property directly (it is a getter, not a method).
    return response.text || "I'm sorry, I couldn't process that request at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Technical error occurred. Please try again later.";
  }
};
