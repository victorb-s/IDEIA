require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI('AIzaSyCs-Vvco82Tt2WuK1mmRPhHisT4e3nXpGo');
console.log(`API Key: ${process.env.GEMINI_API_KEY}`);

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
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
      systemInstruction: 'Você é um assistente especializado em identificar e descrever tópicos populares de pesquisa. Com base no título fornecido, elabore um resumo curto e direto que sintetize o motivo pelo qual o tema é tendência, destacando os principais pontos de interesse para os usuários. Use entre 3 e 7 linhas, adotando um tom informativo e neutro, sem elaborar como um artigo. Escreva em português do Brasil.',
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

async function addContextToTopic(topic, context = {}) {
  try {
    const { category, audience, tone, additionalInfo } = context;

    let contextualPrompt = `Você é um assistente útil para escritores jornalísticos. Sua tarefa é enriquecer o tópico fornecido com base nas informações adicionais. Seja claro e objetivo, criando um tópico detalhado que saiba sobre as informações abaixo, se disponíveis:`;

    if (category) {
      contextualPrompt += `\n- Categoria: ${category}`;
    }
    if (audience) {
      contextualPrompt += `\n- Público-alvo: ${audience}`;
    }
    if (tone) {
      contextualPrompt += `\n- Tom desejado: ${tone}`;
    }
    if (additionalInfo) {
      contextualPrompt += `\n- Descrição adicional: ${additionalInfo}`;
    }

    contextualPrompt += `\nUse o tópico original para basear o novo tópico. O novo texto precisa parecer um tópico, ou seja, ele deve passar todas as informações necessárias, tendo no máximo 5 palavras e deve conter o tópico passado inicialmente nele. Gere apenas uma resposta, um tópico, no idioma português do Brasil e mantenha-a concisa.`;

    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: contextualPrompt,
    });

    const chat = model.startChat({
      generationConfig: generationConfig,
      history: [],
    });

    const result = await chat.sendMessage(topic);
    const detailedTopic = await result.response.text();
    console.log(`Tópico detalhado: ${detailedTopic}`);

    return detailedTopic.trim();

  } catch (error) {
    console.error('Erro ao adicionar contexto ao tópico:', error);
    throw error;
  }
}

module.exports = {
  generateTitles,
  generateSummary,
  addContextToTopic,
};