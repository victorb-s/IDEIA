Feature: Gerar títulos para redação	através da Gemini
  Eu, como um usuário
  Quero gerar títulos para redação
  Para facilitar o processo de escrita
  
  Background: 
    Given que eu tenho acesso à API do Gemini
    And eu tenho uma chave de API válida
    And eu tenho um tópico de redação

  Scenario: Gerar título com sucesso
    Given que eu tenho um tópico de redação
    When eu solicito a geração de um título
    Then eu devo receber um título gerado com sucesso

  Scenario: Gerar título com erro
    Given que eu não tenho um tópico de redação
    When eu solicito a geração de um título
    Then eu devo receber uma mensagem de erro