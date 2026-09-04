# Agendamento Pet

Aplicação web para gerenciamento de agendamentos de atendimentos para pets. O sistema permite visualizar a agenda organizada por período do dia, criar novos agendamentos e removê-los.

## Funcionalidades

- Visualização dos agendamentos nos períodos da manhã, tarde e noite.
- Cadastro de tutor, pet, telefone, descrição do serviço, data e horário.
- Validação dos campos do formulário.
- Prevenção de dois agendamentos no mesmo horário e data.
- Remoção de agendamentos existentes.

## Tecnologias

- React
- TypeScript
- Vite
- React Router
- React Hook Form
- Yup
- Axios, disponível para futuras integrações com uma API

## Pré-requisitos

- Node.js 18 ou superior
- npm

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone <url-do-repositorio>
cd agendamento-pet
npm install
```

## Desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Depois, acesse a URL exibida pelo Vite, normalmente `http://localhost:5173`.

## Scripts disponíveis

| Comando           | Descrição                                                     |
| ----------------- | ------------------------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento do Vite.                 |
| `npm run build`   | Executa a verificação TypeScript e gera a versão de produção. |
| `npm run lint`    | Analisa o código com ESLint.                                  |
| `npm run preview` | Serve localmente a build de produção.                         |

## Rotas

| Rota           | Descrição                                  |
| -------------- | ------------------------------------------ |
| `/`            | Página inicial com a agenda diária.        |
| `/agendamento` | Formulário para criar um novo agendamento. |

## Armazenamento dos dados

Os agendamentos são salvos no `localStorage` com a chave `agendamento`.

Os horários disponíveis são `08:00`, `10:00`, `12:00`, `14:00`, `16:00`, `18:00`, `20:00` e `22:00`.

## Organização do projeto

```text
src/
├── assets/       # Ícones e imagens
├── components/   # Componentes reutilizáveis da agenda e dos botões
├── page/         # Páginas inicial e de cadastro
├── routes/       # Configuração das rotas
└── utils/        # Regras auxiliares, como divisão dos períodos
```
