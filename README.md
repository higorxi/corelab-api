<h1 align="center" style="font-weight: bold;">Desafio Técnico To-do List Corelab-API 💻</h1>

<p align="center">
 <a href="#tech">Tecnologias</a> • 
 <a href="#started">Iniciando o projeto</a> • 
  <a href="#routes">API Endpoints</a> •
</p>

<p align="center">
    <b>Este projeto tem como objetivo desenvolver uma aplicação web que permite aos usuários criar e gerenciar suas listas de tarefas (to-do lists). A aplicação será composta por uma página web responsiva construída em React para a interface do usuário e Node.js, Exprees.js e MongoDB, trabalhando no back-end. Esse repositório se trata do desenvolvimento da API, o front-end se encontra em (https://github.com/higorxi/corelab-frontend.git).</b>
</p>

<h2 id="tech">💻 Tecnologias</h2>

- Lista das tecnologias utilizada:
- Node.js
- Express.js
- MongoDB

<h2 id="started">🚀 Iniciando</h2>

Como iniciar o projeto localmente

<h3>Prerequisites</h3>

Para rodar o projeto é necessário ter instalado:

- [NPM](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- [NodeJS](https://github.com/)
- Um editor de código, eu utilizo o:
- [VS Code](https://code.visualstudio.com/)

<h3>Clonando</h3>

Para clonar o projeto do Github para sua máquina, digite:

```bash
git clone https://github.com/higorxi/corelab-api.git
```

<h3>Configurando .env variáveis de ambiente</h2>

Use o `.env.example` como referencia para criar seu arquivo `.env` para se conectar ao MongoDB, irei deixar o MONGOURI aqui, haja vista que é uma aplicação sem fins lucrativos e sem informações pessoais.
Além disso, você pode configurar uma porta específica para rodar o servidor, para que não haja conflito com outra aplicação

```yaml
MONGODB_URI=
PORT=
```

<h3>Iniciando</h3>

Como iniciar o projeto

```bash
cd corelab-api
npm install
npm start
```

<h2 id="routes">📍 API Endpoints</h2>

Here you can list the main routes of your API, and what are their expected request bodies.
Aqui estão as principais rotas da API que gera todas as operações do CRUD, além disso, podemos ver os corpos esperados das requisições
​
| rota               | descrição                                        
|----------------------|-----------------------------------------------------
| <kbd>GET /todos/    | retorna todos os To-dos registrados [detalhes da resposta](#get-auth-detail)
| <kbd>POST /todos/create    | cria um novo card de To-do [detalhes da criação](#post-auth-detail)

<h3 id="get-auth-detail">GET /todos/</h3>

**RESPONSE**
```json
	{
		"_id": "65ac958ea2e7dfa3ac3217fe",
		"title": "123123",
		"description": "321321",
		"favorite": true,
    "color": "white"
		"__v": 0
	}
```

<h3 id="post-auth-detail">POST /todos/create</h3>

**REQUEST**
```json
{
  "title": "testestes",
  "description": "Concluir capítu31231lo21212 5",
  "favorite": true,
  "color": "azul",
  "feito": true
}

```

**RESPONSE**
```json
{
	"title": "testestes",
	"description": "Concluir capítu31231lo21212 5",
	"favorite": true,
	"color": "azul",
	"feito": true,
	"_id": "65aecc77a7076701a96db86c",
	"__v": 0
}
```

