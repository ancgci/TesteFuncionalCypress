describe('Funcionalinalidade Cadastro', () => {
  it('Validar Cadastro Com Sucesso', () => {

    // Acessou a pagina
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')

    // Preencheu os campos
    cy.get(':nth-child(2) > td > input').type('Carlos')
    cy.get(':nth-child(4) > td > input').type('010101')
    cy.get(':nth-child(6) > td > input').type('TestadoMesmo')

    // Pressionou o botao
    cy.get('td > .btn').click()

    // Validou o cadastro
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should("have.text", "TestadoMesmo")
  })

  it('Apagar Cadastro', () => {
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')

    // Varificando se existe o cadastro
    cy.get('tbody > :nth-child(2) > :nth-child(3)').should("have.text", "Carlos")

    // Apagar o cadastro
    cy.get(':nth-child(2) > :nth-child(5) > a').click()

    // Validando se o cadastro foi apagado
    cy.get('tbody > :nth-child(2) > :nth-child(3)').should("not.have.text", "Carlos")

  })

  it('Validar Cadastro Sem informar Usuário', () => {
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')

    // Preenche os campos

    cy.get(':nth-child(4) > td > input').type('010101')
    cy.get(':nth-child(6) > td > input').type('Carlos')

    // Clica no botão enviar
    cy.get('td > .btn')

    // Verifica se a entrada é obrigatoria
    cy.get('input[name="form_senha"]').should("have.attr", "required");
  })

  it('Validar Cadastro Sem informar Senha', () => {
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')

    // Preenche os campos
    cy.get(':nth-child(6) > td > input').type('Carlos')

    // Clica no botão enviar
    cy.get('td > .btn').click()

    // Verifica se a entrada é obrigatoria
    cy.get('input[name="form_senha"]').should("have.attr", "required");
  })

  it('Validar Cadastro Sem informar Nome', () => {
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')

    // Preenche os campos
    cy.get(':nth-child(2) > td > input').type("Junior")
    cy.get(':nth-child(4) > td > input').type("0101010")

    // Clica no botão enviar
    cy.get('td > .btn').click()

    // Verifica se a entrada é obrigatoria
    cy.get(':nth-child(7) > td').should("have.text", "Existem campos em branco.");
  })


})