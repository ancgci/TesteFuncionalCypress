/// <reference types="cypress" />

describe('Menus 4allTests', () => {
    it("Validar Acesso a Pagina Home", () => {
        // Acessou a pagina
        cy.visit('https://4alltests.com.br/index')
    })

    it("Validar a Pagina Ferramentas", () => {
        // Acessou a pagina
        cy.visit('https://4alltests.com.br/index')
        cy.get('#nav > :nth-child(1) > :nth-child(2) > :nth-child(1)').click()
        cy.get("body > ul > li:nth-child(1) > a").click()  
    })

    it("Validar a Pagina Eventos", () => {
        // Acessou a pagina
        cy.visit('https://4alltests.com.br/index')
        cy.get('#nav > ul > li:nth-child(3) > a').click()
    })

    it("Validar a Pagina Vagas", () => {
        // Acessou a pagina
        cy.visit('https://4alltests.com.br/index')
        cy.get('#nav > ul > li:nth-child(4) > a').click()
    })

    it("Validar a Pagina Comunidades", () => {
        // Acessou a pagina
        cy.visit('https://4alltests.com.br/index')
        cy.get(':nth-child(1) > :nth-child(5) > a').click()
    })

    it("Validar a Pagina Cursos", () => {
        // Acessou a pagina
        cy.visit('https://4alltests.com.br/index')
        cy.get('#nav > ul > li:nth-child(6) > a').click()
    })

    it("Validar a Pagina Referências", () => {
        // Acessou a pagina
        cy.visit('https://4alltests.com.br/index')
        cy.get('#nav > ul > li:nth-child(7) > a').click()
    })

    it("Validar a Pagina Blog", () => {
        // Acessou a pagina
        cy.visit('https://4alltests.com.br/index')
        cy.get('#nav > ul > li:nth-child(8) > a').click()
    })




})