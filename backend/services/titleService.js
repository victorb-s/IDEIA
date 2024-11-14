require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
console.log(`API Key: ${process.env.GEMINI_API_KEY}`);

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
};

async function generateTitles(topics) {
  try {
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-1.5-flash',
      systemInstruction: 'Você é um assistente útil para escritores jornalísticos. Sua tarefa é gerar títulos interessantes com base nos tópicos mais relevantes que você receber. Seja o mais objetivo possível e gere títulos curtos e quentes, de preferência em uma linha por título. Devolva 5 titulos separados por | e sem espaços em branco. Gere as respostas no idioma português do brasil',     
    });

    const chat = model.startChat({
      generationConfig: generationConfig,
      history: [],
    });

    const result = await chat.sendMessage(topics);
    const modelResponse = await result.response.text();
    console.log(`${modelResponse}`);

    return modelResponse.split('|').map(title => ({ title: title.trim() }));

  } catch (error) {
    console.error('Erro na geração de títulos:', error);
    throw error;
  }
}

async function generateSummary(selectedTitle) {
  try {
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: 'Você é um assistente útil para escritores jornalísticos. Sua tarefa é gerar um resumo informativo com base no título fornecido. Mantenha o resumo breve e informativo, com no máximo 3 a 5 linhas. Gere a resposta no idioma português do brasil',
    });

    const chat = model.startChat({
      generationConfig: generationConfig,
      history: [],
    });

    const result = await chat.sendMessage(selectedTitle);
    const summaryResponse = await result.response.text();
    console.log(`Resumo: ${summaryResponse}`);

    return summaryResponse.trim();

  } catch (error) {
    console.error('Erro na geração de resumo:', error);
    throw error;
  }
}

module.exports = {
  generateTitles,
  generateSummary,
};