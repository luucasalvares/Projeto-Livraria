# Projeto-Livraria

# README

## README - Sistema de Biblioteca
Descrição do Projeto
Este projeto é um Sistema de Biblioteca desenvolvido em TypeScript, projetado para gerenciar o empréstimo de livros, cadastro de usuários e controle de estoque de obras literárias.
Requisitos Funcionais
Os requisitos funcionais descrevem as funcionalidades que o sistema deve oferecer. Os principais requisitos são:

## Descrição do Projeto
Este projeto é uma aplicação desenvolvida em TypeScript que visa [descrever brevemente o objetivo da aplicação]. 
   Cadastro de Usuários: O sistema deve permitir que novos usuários se registrem.

## Requisitos Funcionais
Os requisitos funcionais descrevem as funcionalidades que o sistema deve oferecer. Os principais requisitos são:
   Cadastro de Livros: O sistema deve permitir que os bibliotecários adicionem novos livros ao catálogo.

1. **Autenticação de Usuário**: O sistema deve permitir que os usuários se registrem e façam login.
2. **Gerenciamento de Dados**: Os usuários devem poder criar, ler, atualizar e excluir dados.
3. **Relatórios**: O sistema deve gerar relatórios com base nos dados inseridos.
4. **Notificações**: O sistema deve enviar notificações aos usuários sobre eventos importantes.
   Empréstimo de Livros: Os usuários devem poder solicitar o empréstimo de livros disponíveis.

## Requisitos Não Funcionais
Os requisitos não funcionais definem as qualidades do sistema. Os principais requisitos são:
   Devolução de Livros: O sistema deve registrar a devolução de livros emprestados.

1. **Desempenho**: O sistema deve ser capaz de processar 100 requisições por segundo.
2. **Segurança**: Os dados dos usuários devem ser protegidos por criptografia.
3. **Usabilidade**: A interface deve ser intuitiva e fácil de usar.
4. **Escalabilidade**: O sistema deve ser capaz de suportar um aumento no número de usuários sem degradação de desempenho.
   Consulta de Livros: Os usuários devem poder pesquisar livros por título, autor ou gênero.

## Dependências
Para o funcionamento adequado do projeto, as seguintes dependências são necessárias:
   Relatórios: O sistema deve gerar relatórios sobre empréstimos, devoluções e livros disponíveis.

- **Node.js**: Versão 14 ou superior.
- **TypeScript**: Versão 4.0 ou superior.
- **Express**: Para criar a API do servidor.
- **MongoDB**: Para o armazenamento de dados.
- **bcrypt**: Para a criptografia de senhas.
   Rankeamento de livros: Sistema de opinião de livros que permitem os usuarios filtrarem as melhores escolhas

Para instalar as dependências, execute o seguinte comando:

```bash
npm install
