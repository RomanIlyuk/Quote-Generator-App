import { GEMINI_API_KEY } from './config.js';
import { GoogleGenerativeAI } from 'https://esm.run/@google/generative-ai';

const ai = new GoogleGenerativeAI(GEMINI_API_KEY);
// fetch request
const model = ai.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });

export async function fetchAIQuote(topic) {
  console.log(`Asking Gemini about ${topic}`);
  try {
    const prompt = `
      Find a famous, existing quote by a real person about "${topic}".
      
      Requirements:
      1. The author must be a real historical figure, celebrity, philosopher, or author.
      2. Do NOT generate a new quote. Use only real quotes.
      3. Do NOT use "Unknown", "Anonymous", or "AI" as the author.
      
      Return ONLY a JSON object with keys: "text" and "author".
      Do not add markdown formatting.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return JSON.parse(text);
  } catch (err) {
    console.error(err);
  }
}
