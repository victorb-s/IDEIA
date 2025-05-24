Feature: Receber dados do Google Trends
  Como um usuário
  Eu quero receber dados do Google Trends
  Para analisar tendências de pesquisa

  Background: 
    Given que eu tenho acesso à API do Google Trends
    And eu tenho uma chave de API válida

  Scenario: Gerar tabela com os tópicos mais pesquisados
    Given que eu tenho uma lista de tópicos
    When eu solicito os dados do Google Trends
    Then eu devo receber uma tabela com os tópicos mais pesquisados