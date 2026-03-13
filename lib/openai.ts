import OpenAI from "openai";

// Check if OpenAI is configured
export function isOpenAIConfigured(): boolean {
  return !!process.env.OPENAI_API_KEY;
}

// Only create the client if API key is available
// Using a function to lazy-load the client
let _openai: OpenAI | null = null;

export function getOpenAI(): OpenAI {
  if (!_openai && process.env.OPENAI_API_KEY) {
    _openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }
  if (!_openai) {
    throw new Error("OpenAI API key not configured");
  }
  return _openai;
}
