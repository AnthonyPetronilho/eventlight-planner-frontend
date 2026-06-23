# EventLight Planner

EventLight Planner é uma aplicação web desenvolvida para auxiliar profissionais de iluminação, DJs, operadores de luz e organizadores de eventos na criação, organização e gerenciamento de cenas de iluminação.

A plataforma permite explorar cores, criar bibliotecas personalizadas de cenas e armazenar preferências de forma segura através de autenticação de usuários.

---

## Demonstração

Frontend:
https://eventlight-planner-frontend.vercel.app/

Backend API:
https://eventlight-api.duckdns.org/

---

## Funcionalidades

### Autenticação

- Cadastro de usuários
- Login seguro com JWT
- Login automático após cadastro
- Persistência de sessão
- Logout
- Rotas protegidas

### Biblioteca de Cenas

- Criar cenas personalizadas
- Editar cenas
- Excluir cenas
- Biblioteca individual por usuário
- Armazenamento em banco de dados

### Explorar Cores

- Pesquisa por código HEX
- Integração com The Color API
- Histórico de pesquisas
- Remoção individual de cores
- Limpeza completa do histórico

### Interface

- Design responsivo
- Modal de login
- Modal de cadastro
- Página 404 personalizada
- Feedback visual de erros
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

### Integrações

- The Color API

---

## Estrutura do Projeto

```txt
src/
├── assets/
├── components/
├── pages/
├── utils/
├── App.jsx
├── main.jsx
└── index.css
```

---

## Instalação

```bash
git clone https://github.com/AnthonyPetronilho/eventlight-planner-frontend.git

cd eventlight-planner-frontend

npm install

npm run dev
```

---

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

---

## Melhorias Futuras

- Compartilhamento de cenas
- Biblioteca pública
- Sistema de favoritos
- Criação de paletas personalizadas
- Exportação para PDF
- Integração com equipamentos DMX
- Dashboard com estatísticas

---

## Autor

Anthony Celso Petronilho de Souza

GitHub:
https://github.com/AnthonyPetronilho

LinkedIn:
https://www.linkedin.com/in/anthony-celso-petronilho-de-souza

---

## Projeto desenvolvido durante o Bootcamp de Desenvolvimento Web Full Stack da TripleTen.
