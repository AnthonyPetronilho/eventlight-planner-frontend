# EventLight Planner

EventLight Planner é uma aplicação React desenvolvida para auxiliar profissionais de iluminação e organizadores de eventos na exploração de cores e combinações visuais para diferentes tipos de eventos.

O projeto consome dados em tempo real da The Color API, permitindo pesquisar cores através de códigos HEX e visualizar informações detalhadas sobre cada cor.

---

## Funcionalidades

- Pesquisa de cores através de código HEX
- Integração com API externa (The Color API)
- Histórico de pesquisas
- Persistência de dados com Local Storage
- Remoção de histórico
- Sistema de carregamento (Preloader)
- Tratamento de erros
- Renderização dinâmica de resultados
- Botão "Mostrar Mais"
- Modal de cadastro
- Página de login
- Página 404 personalizada
- Layout responsivo

---

## Tecnologias Utilizadas

### Front-end

- React
- React Router DOM
- JavaScript (ES6+)
- CSS3
- Vite

### API

- The Color API

---

## Estrutura do Projeto

```txt
src/
│
├── assets/
├── images/
├── vendor/
│
├── components/
│   ├── App/
│   ├── Button/
│   ├── FeatureCard/
│   ├── Footer/
│   ├── Header/
│   ├── ModalWithForm/
│   ├── Navigation/
│   ├── Preloader/
│   └── SearchForm/
│
├── pages/
│   ├── Colors/
│   ├── Home/
│   ├── Login/
│   └── NotFound/
│
├── utils/
│   └── colorApi.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Instalação

Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/eventlight-planner-frontend.git
```

Acesse a pasta:

```bash
cd eventlight-planner-frontend
```

Instale as dependências:

```bash
npm install
```

Inicie o projeto:

```bash
npm run dev
```

---

## Scripts Disponíveis

Executar ambiente de desenvolvimento:

```bash
npm run dev
```

Executar validação do código:

```bash
npm run lint
```

Gerar build de produção:

```bash
npm run build
```

Visualizar build localmente:

```bash
npm run preview
```

---

## Melhorias Futuras

- Sistema completo de autenticação
- Cadastro e login de usuários
- Biblioteca pessoal de cenas
- Favoritos
- Criação de paletas personalizadas
- Integração com banco de dados MongoDB
- Backend próprio com Node.js e Express
- Compartilhamento de cenas de iluminação

---

## Autor

Anthony Celso Petronilho de Souza

GitHub:
https://github.com/SEU-USUARIO

LinkedIn:
https://www.linkedin.com/in/SEU-LINKEDIN

---

## Status do Projeto

Em desenvolvimento

Projeto desenvolvido como Projeto Final do Bootcamp de Desenvolvimento Web Full Stack da TripleTen.
