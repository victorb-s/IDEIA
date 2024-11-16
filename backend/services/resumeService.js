require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 150,
    responseMimeType: 'text/plain',
};

async function generateResume(title) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: 'Você é um assistente útil para escritores jornalísticos. Sua tarefa é gerar um resumo de até 100 palavras com base no título que você receber. Seja o mais objetivo possível e gere um resumo relevante. Gere o resumo no idioma português do Brasil.',
    });

    const chat = model.startChat({
      generationConfig: generationConfig,
      history: [],
    });

    const fotmatTitle = title.replace(/-/g, ' ');

    const result = await chat.sendMessage(fotmatTitle);
    
    const modelResponse = result.response.text();
    return modelResponse;
  } catch (error) {
    console.error(`Erro ao gerar resumo: ${error.message}`);
    return `Não foi possível gerar um resumo para o título "${title}".`;
  }
}

module.exports = {
  generateResume,
};