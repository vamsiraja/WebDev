# SaaS Auth Starter (React + Node + MySQL)

Starter project with:
- **Frontend:** React (Vite)
- **Backend:** Node.js + Express
- **Database:** MySQL 8
- **Auth:** Register/Login with bcrypt password hashing + JWT

## 1) Project structure

- `frontend/` React app for login/register UI
- `backend/` Express API with auth endpoints
- `sql/init.sql` Database schema
- `docker-compose.yml` Local MySQL service

## 2) Setup

### Prerequisites

- Node.js 18+
- npm 9+
- Docker (recommended for MySQL)

### Install dependencies

```bash
npm --prefix backend install
npm --prefix frontend install
```

### Start MySQL

```bash
docker compose up -d
```

### Configure environment files

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

## 3) Run the app

In two terminals:

```bash
npm --prefix backend run dev
npm --prefix frontend run dev
```

- Frontend: http://localhost:5173
- Backend: http://localhost:4000
- API health: http://localhost:4000/api/health

## 4) API endpoints

### Register

`POST /api/auth/register`

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "password123"
}
```

### Login

`POST /api/auth/login`

```json
{
  "email": "jane@example.com",
  "password": "password123"
}
```

Both endpoints return:

```json
{
  "token": "<jwt>",
  "user": {
    "id": 1,
    "name": "Jane Doe",
    "email": "jane@example.com"
  }
}
```
