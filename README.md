# 🌲 Cypress, do Zero à Nuvem ☁️

Projeto desenvolvido durante o curso **Cypress, do Zero à Nuvem**, da [Talking About Testing](https://talkingabouttesting.com/), com o objetivo de aprender e praticar testes automatizados de aplicações web utilizando Cypress.

## 🎯 Sobre o curso

O curso apresenta, na prática, os fundamentos do Cypress e a criação de testes automatizados, desde a configuração inicial do projeto até a execução dos testes em um fluxo de integração contínua.

📚 **Curso original:** [Cypress, do Zero à Nuvem — GitHub](https://github.com/wlsf82/cypress-do-zero-a-nuvem)

## 🧪 Principais conhecimentos

Durante o curso, foram abordados temas como:

- Configuração de um projeto Cypress do zero;
- Navegação por páginas locais e remotas;
- Interação com elementos de aplicações web;
- Testes de upload de arquivos;
- Validação de resultados esperados (_assertions_);
- Criação e utilização de comandos customizados;
- Tratamento de links que abrem em novas abas;
- Execução de testes simulando diferentes dimensões de dispositivos móveis;
- Utilização da API do Cypress em diferentes cenários de teste;
- Organização de um projeto de testes automatizados;
- Execução de testes em integração contínua com GitHub Actions;
- Integração com o Cypress Cloud para gerenciamento de testes.

## 🛠️ Tecnologias e ferramentas

- **Cypress** — automação de testes end-to-end;
- **JavaScript** — desenvolvimento dos testes;
- **Node.js e npm** — ambiente de execução e gerenciamento de dependências;
- **Git e GitHub** — versionamento e hospedagem do projeto;
- **GitHub Actions** — automação do fluxo de integração contínua;
- **Cypress Cloud** — acompanhamento e gerenciamento de execuções de testes.

## 💡 Objetivo

Consolidar os fundamentos de testes automatizados end-to-end e praticar a criação, organização e execução de testes para aplicações web, desenvolvendo conhecimentos importantes para a área de Qualidade de Software (QA).

## 🚀 Como executar os testes

Siga os passos abaixo para clonar o projeto e executar os testes automatizados localmente.

### 📋 Pré-requisitos

Antes de começar, você precisará ter instalado:

- [Node.js](https://nodejs.org/)
- npm (instalado junto com o Node.js)
- [Git](https://git-scm.com/)

### 📥 1. Clonar o repositório

Abra o terminal e execute:

```bash
git clone https://github.com/diogohenriqve/cypress-do-zero-a-nuvem
```

Entre na pasta do projeto:

```bash
cd cypress-do-zero-a-nuvem
```

### 📦 2. Instalar as dependências

Na raiz do projeto, execute:

```bash
npm install
```

Esse comando instala as dependências definidas no `package.json`, incluindo o Cypress.

### 🧪 3. Executar os testes em modo interativo

Para abrir a interface do Cypress e acompanhar a execução dos testes, utilize:

```bash
npx cypress open
```

Na interface que abrir, selecione o tipo de teste configurado no projeto e escolha o arquivo de teste que deseja executar.

### ⚡ 4. Executar os testes pelo terminal

Para executar os testes automaticamente em modo headless, sem abrir a interface gráfica:

```bash
npx cypress run
```

O Cypress executará os testes disponíveis e exibirá o resultado no terminal.

---

**Observação:** os comandos de execução dependem da estrutura e da configuração do projeto. Caso os testes dependam de uma aplicação, serviço ou configuração adicional, inicialize esse ambiente antes de executá-los.

## 👨‍💻 Autor

**Diogo Henrique Santana de Jesus**

Este repositório reúne meus estudos e práticas realizados durante o curso.
