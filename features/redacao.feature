Feature: Escrita de Redação
  Eu, como um usuário
  Desejo uma tela de escrita de redação
  Para integrar a geração de títulos e resumos

  Background: 
    Given que eu tenho um título de redação
    And eu tenho um resumo de redação

  Scenario: Escrita de redação com título e resumo
    Given que eu tenho um título de redação
    And eu tenho um resumo de redação
    When eu inicio a tela de escrita de redação
    Then eu devo ver o título e o resumo preenchidos

  Scenario: Escrita de redação sem título
    Given que eu não tenho um título de redação
    When eu inicio a tela de escrita de redação
    Then eu não devo poder acessar a tela de escrita de redação
    And eu devo ver uma mensagem de erro
