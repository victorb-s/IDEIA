const resumeService = require('../services/resumeService');

const getResume = async ( request, response ) => {
    try {
        const { title } = request.query; //recebe o título 
        if (!title) { //verifica se o título foi passado
            return response.status(400).json({ error: 'Parâmetro "title" é obrigatório' });
        }
        console.log('Gerando resumo para o título:', title);
        const generatedResume = await resumeService.generateResume(title); //chama o servico que gera o resumo
        
        await response.status(200).json(generatedResume); //retorna o resumo em json
        
    } catch (error) {
        console.error('Erro ao gerar resumo:', error);
        response.status(500).json({ error: 'Falha ao gerar resumo' });
    }
}

module.exports = {
    getResume
};

/* 
para testar, use essa url:
http://localhost:3000/api/v1/resume?title=mercado-de-bitcoin-esta-dominando-o-mundo-financeiro

*/