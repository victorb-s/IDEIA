Feature: Gerar resumo de redação através da Gemini
  Eu, como um usuário
  Quero gerar um resumo de redação
  Para facilitar o processo de escrita

  Background: 
    Given que eu tenho acesso à API do Gemini
    And eu tenho uma chave de API válida
    And eu tenho um título de redação

  Scenario: Gerar resumo com sucesso
    Given que eu tenho um título de redação
    When eu solicito a geração de um resumo
    Then eu devo receber um resumo gerado com sucesso

  Scenario: Gerar resumo com erro
    Given que eu não tenho um título de redação
    When eu solicito a geração de um resumo
    Then eu devo receber uma mensagem de erro