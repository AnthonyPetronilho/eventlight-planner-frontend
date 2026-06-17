# EventLight Planner

EventLight Planner é uma aplicação Full Stack desenvolvida para auxiliar profissionais de iluminação, DJs, operadores de luz e organizadores de eventos na criação, organização e gerenciamento de cenas de iluminação.

A plataforma permite pesquisar cores através da The Color API, criar uma biblioteca pessoal de cenas e armazenar todas as informações de forma segura utilizando autenticação JWT e banco de dados MongoDB.

---

## Funcionalidades

### Usuários

- Cadastro de usuários
- Login e autenticação JWT
- Login automático após cadastro
- Persistência de sessão
- Logout seguro
- Rotas protegidas

### Biblioteca de Cenas

- Criação de cenas personalizadas
- Edição de cenas
- Exclusão de cenas
- Armazenamento individual por usuário
- Biblioteca privada protegida por autenticação

### Exploração de Cores

- Pesquisa de cores através de código HEX
- Integração com The Color API
- Histórico pessoal de pesquisas
- Remoção individual de cores
- Limpeza completa do histórico
- Exibição dinâmica de resultados

### Interface

- Design responsivo
- Modal de login
- Modal de cadastro
- Feedback visual para erros
- Página 404 personalizada
- Preloader para carregamento de dados
- Navegação protegida

---

## Tecnologias Utilizadas

### Front-end

- React
- React Router DOM
- Context API
- JavaScript (ES6+)
- CSS3
- Vite

### Back-end

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- Bcrypt
- Celebrate / Joi
- Helmet
- Express Rate Limit
- Winston

### APIs

- The Color API

---

## Estrutura do Projeto

### Front-end

```txt
src/
│
├── components/
├── contexts/
├── pages/
├── utils/
├── images/
├── assets/
│
├── App.jsx
├── main.jsx
└── index.css
```

### Back-end

```txt
controllers/
middlewares/
models/
routes/
utils/
app.js
```

---

## Deploy

### Front-end

https://eventlight-planner-frontend.vercel.app

### Back-end API

https://eventlight-api.duckdns.org

---

## Instalação

### Front-end

Clone o repositório:

```bash
git clone https://github.com/AnthonyPetronilho/eventlight-planner-frontend.git
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

---

### Back-end

Clone o repositório:

```bash
git clone https://github.com/AnthonyPetronilho/eventlight-planner-backend.git
```

Instale as dependências:

```bash
npm install
```

Configure as variáveis de ambiente:

```env
PORT=3000
MONGO_URL=mongodb://127.0.0.1:27017/eventlightdb
JWT_SECRET=seu_secret
```

Inicie o servidor:

```bash
npm run dev
```

---

## Scripts Disponíveis

### Front-end

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

### Back-end

```bash
npm run dev
npm start
npm run lint
```

---

## Segurança

O projeto utiliza:

- Autenticação JWT
- Hash de senhas com Bcrypt
- Helmet para proteção de cabeçalhos HTTP
- Rate Limiting contra abuso de requisições
- Validação de dados com Celebrate/Joi
- Rotas protegidas por middleware de autenticação

---

## Melhorias Futuras

- Compartilhamento de cenas entre usuários
- Sistema de favoritos
- Exportação de cenas para PDF
- Biblioteca pública de cenas
- Criação de paletas personalizadas
- Integração com equipamentos DMX
- Sistema de categorias e tags
- Dashboard com estatísticas

---

## Autor

Anthony Celso Petronilho de Souza

GitHub:
https://github.com/AnthonyPetronilho

LinkedIn:
https://www.linkedin.com/in/anthony-celso-petronilho-de-souza

---

## Status do Projeto

✅ Projeto funcional e em constante evolução.

Desenvolvido como Projeto Final do Bootcamp de Desenvolvimento Web Full Stack da TripleTen.
