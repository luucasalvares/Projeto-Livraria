# API_BackEnd - README

## Descrição do Projeto - Sistema de Biblioteca
Este projeto é um Sistema de Biblioteca desenvolvido em TypeScript, projetado para gerenciar o empréstimo de livros, cadastro de usuários e controle de estoque de obras literárias.

## Requisitos Funcionais
Os requisitos funcionais descrevem as funcionalidades que o sistema deve oferecer. Os principais requisitos são:
   Cadastro de Livros: O sistema deve permitir que os bibliotecários adicionem novos livros ao catálogo.

1. *Autenticação de Usuário*: O sistema deve permitir que os usuários se registrem e façam login.
2. *Gerenciamento de Dados*: Os usuários devem poder criar, ler, atualizar e excluir dados.
3. *Relatórios*: O sistema deve gerar relatórios com base nos dados inseridos.
4. *Notificações*: O sistema deve enviar notificações aos usuários sobre eventos importantes.
   Empréstimo de Livros: Os usuários devem poder solicitar o empréstimo de livros disponíveis.

## Requisitos Não Funcionais
Os requisitos não funcionais definem as qualidades do sistema. Os principais requisitos são:
   Devolução de Livros: O sistema deve registrar a devolução de livros emprestados.

1. *Desempenho*: O sistema deve ser capaz de processar 100 requisições por segundo.
2. *Segurança*: Os dados dos usuários devem ser protegidos por criptografia.
3. *Usabilidade*: A interface deve ser intuitiva e fácil de usar.
4. *Escalabilidade*: O sistema deve ser capaz de suportar um aumento no número de usuários sem degradação de desempenho.
   Consulta de Livros: Os usuários devem poder pesquisar livros por título, autor ou gênero.

## Dependências
Para o funcionamento adequado do projeto, as seguintes dependências são necessárias:
   Relatórios: O sistema deve gerar relatórios sobre empréstimos, devoluções e livros disponíveis.

- *Node.js*: Versão 14 ou superior.
- *TypeScript*: Versão 4.0 ou superior.
- *Express*: Para criar a API do servidor.
- *MongoDB*: Para o armazenamento de dados.
- *bcrypt*: Para a criptografia de senhas.
   Rankeamento de livros: Sistema de opinião de livros que permitem os usuarios filtrarem as melhores escolhas

Para instalar as dependências, execute o seguinte comando:

bash
npm install
Requisitos Não Funcionais Os requisitos não funcionais definem as qualidades do sistema. Os principais requisitos são:

 Análise de Riscos: 
A análise de riscos é crucial para identificar possíveis problemas que podem afetar o projeto. Os principais riscos incluem: 

 - Desempenho:  O sistema deve ser capaz de processar até 50 requisições simultâneas sem degradação de desempenho.

 - Falhas de Segurança:  Acesso não autorizado aos dados dos usuários.

 - Mitigação:  Implementar autenticação robusta e criptografia de dados.
Desempenho: O sistema pode não suportar um grande número de usuários simultâneos.

 - Etapa de Testes:  Realizar testes de carga e otimizar o código. Segurança: Os dados dos usuários e livros devem ser protegidos por autenticação e criptografia.
Dependências Desatualizadas: O uso de bibliotecas desatualizadas pode introduzir vulnerabilidades.

 Dependências:  Manter as dependências atualizadas e monitorar vulnerabilidades. Usabilidade: A interface deve ser intuitiva e fácil de navegar para usuários e bibliotecários.
Comandos de Inicialização do TypeScript
Para iniciar o projeto, siga os passos abaixo: Escalabilidade: O sistema deve ser capaz de suportar um aumento no número de usuários e livros sem comprometer a performance.

 Instalar Dependências:  Certifique-se de que todas as dependências estão instaladas, conforme mencionado anteriormente.

 Compilar o Código TypeScript:  Use o seguinte comando para compilar o código TypeScript: Node.js: Versão 14 ou superior. TypeScript: Versão 4.0 ou superior. Express: Para criar a API do servidor. MongoDB: Para o armazenamento de dados. bcrypt: Para a criptografia de senhas. jsonwebtoken: Para a autenticação de usuários.

npx tsc
Dependências Para o funcionamento adequado do projeto, as seguintes dependências são necessárias:

 Iniciar o Servidor:  Após a compilação, inicie o servidor com o comando: Node.js: Versão 14 ou superior. TypeScript: Versão 4.0 ou superior. Express: Para criar a API do servidor. MongoDB: Para o armazenamento de dados. bcrypt: Para a criptografia de senhas. jsonwebtoken: Para a autenticação de usuários.

node dist/index.js
Para instalar as dependências, execute o seguinte comando:

 Modo de Desenvolvimento:  Para desenvolvimento, você pode usar o ts-node para executar diretamente os arquivos TypeScript: bash npm install

npx ts-node src/index.ts
Análise de Riscos A análise de riscos é crucial para identificar possíveis problemas que podem afetar o projeto. Os principais riscos incluem:

 Inserção de Dados nas Tabelas "users" e "livros" 

Este documento descreve o processo de inserção de dados nas tabelas "users" e "livros" do banco de dados.

 Inserção de Dados na Tabela "users" 

A tabela "users" armazena as informações dos usuários, como nome, e-mail e senha.

## Estrutura da Tabela "users":
 sql
 CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR (100) NOT NULL
      );
    `;


 Inserção de Dados na Tabela "livros" 

A tabela "livros" armazena as informações dos livros, como nome do livro, nome do autor do livro & preço do livro.

## Estrutura da Tabela "livros":
 sql

      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        author VARCHAR(100) NOT NULL,
        price FLOAT NOT NULL
      );
    `;


# Conclusão
Este README fornece uma visão geral dos requisitos e instruções necessárias para configurar e iniciar a aplicação. Para mais informações, consulte a documentação adicional ou entre em contato com a equipe de desenvolvimento. Falhas de Segurança: Acesso não autorizado aos dados dos usuários e livros. Mitigação: Implementar autenticação robusta e criptografia de dados sensíveis. Desempenho: O sistema pode não suportar um grande número de usuários simultâneos. Mitigação: Realizar testes de carga e otimizar consultas ao banco de dados. Dependências Desatualizadas: O uso de bibliotecas desatualizadas pode introduzir vulnerabilidades. Mitigação: Manter as dependências atualizadas e monitorar vulnerabilidades. Perda de Dados: Risco de perda de dados devido a falhas no servidor ou no banco de dados. Mitigação: Implementar backups regulares e um sistema de recuperação de dados
