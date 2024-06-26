# Projeto de Automação de Testes Funcionais com Cypress

![Cypress](https://img.shields.io/badge/Cypress-Functional%20Testing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/usuario/nome-do-repositorio)

## Descrição

Este projeto contém a automação de testes funcionais para os sites [4alltests](https://4alltests.com.br) e [Aprendendo Testar](http://aprendendotestar.com.br/) utilizando a ferramenta Cypress. Os testes cobrem a validação do menu principal do site 4alltests e as funcionalidades de cadastro de teste no site Aprendendo Testar.

## Índice

- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Testes Implementados](#testes-implementados)
- [Inserção de Imagens e Vídeos](#inserção-de-imagens-e-vídeos)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Instalação

Para instalar o projeto, siga os passos abaixo:

1. Clone o repositório:
    ```sh
    git clone https://github.com/ancgci/TesteFuncionalCypress.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd nome-do-repositorio
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```

## Como Usar

Para executar os testes após já ter instalado o node, utilize o seguinte comando:

```sh
npx cypress open
```

Este comando abrirá a interface do Cypress, onde você poderá selecionar e executar os testes.

Para executar os testes em modo headless, utilize:

```sh
npx cypress run
```

## Estrutura do Projeto

```plaintext
nome-do-repositorio/
├── cypress/
│   ├── e2e/
│   │    └── web ├── 4allTests/
│   │                 └── Menu_Principal.cy.js
│   │            ├──  Site_Aprendendo_Testar/
│   │                 └── validar_cadastro_com_sucesso.cy.js
│   │            ├── main_test.js
│   ├── fixtures/
│   ├── support/
│   └── cypress.config.js
├─ .gitignore
├─ cypress.config.js
├─ package-lock.json
├─ package.json
└─ README.md
```

## Testes Implementados

### Site: [4alltests](https://4alltests.com.br)
- **Validação do Menu Principal:**
  - Home
  - Página Ferramentas
  - Página Eventos
  - Página Vagas
  - Página Comunidades
  - Página Cursos
  - Página Referências
  - Página Blog

### Site: [Aprendendo Testar](http://aprendendotestar.com.br/)
- **Funcionalidade Cadastro:**
  - Teste com Sucesso
  - Apagar Cadastro
  - Sem informar Usuário
  - Sem informar Senha
  - Sem informar Nome

## Inserção de Imagens e Vídeos

### Imagens

![1](https://github.com/ancgci/TesteFuncionalCypress/blob/main/4all1.jpg)
![2](https://github.com/ancgci/TesteFuncionalCypress/blob/main/ap1.jpg)
![3](https://github.com/ancgci/TesteFuncionalCypress/blob/main/aprender1.jpg)
![4](https://github.com/ancgci/TesteFuncionalCypress/blob/main/Cy1.jpg)
![5](https://github.com/ancgci/TesteFuncionalCypress/blob/main/vs1.jpg)

### Vídeos

Assista a execução dos testes aqui:


[![Texto Alternativo](https://github.com/ancgci/TesteFuncionalCypress/blob/main/tumb.jpg)](https://youtu.be/XpyEZMMKZZE)

## Contribuição

Contribuições são bem-vindas! Por favor, siga os passos abaixo para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nome-da-feature`)
3. Commit suas mudanças (`git commit -m 'Adicionar nova feature'`)
4. Envie para o branch (`git push origin feature/nome-da-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
