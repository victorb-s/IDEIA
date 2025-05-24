Feature: Apresentar contextos a um tópico
  Eu, como um usuário
  Desejo apresentar contextos a um tópico
  Para enriquecer a compreensão do tema
  Durante a geração dos títulos e resumos

  Scenario: Usuário apresenta contexto a um tópico
    Given que eu tenho um tópico
    And eu tenho um contexto
    When eu apresento o contexto ao tópico através de um formulário
    Then eu devo ver o contexto associado ao tópico na geração de títulos e resumos

  Scenario: Usuário tenta apresentar contexto sem tópico
    Given que eu não tenho um tópico
    And eu tenho um contexto
    When eu tento apresentar o contexto ao tópico através de um formulário
    Then eu devo ver uma mensagem de erro informando que o tópico é obrigatório

  Scenario: Usuário tenta apresentar contexto sem o contexto completo
    Given que eu tenho um tópico
    And eu não tenho um contexto completo
    When eu tento apresentar o contexto ao tópico através de um formulário
    Then eu devo ver uma mensagem de erro informando que o contexto é obrigatório