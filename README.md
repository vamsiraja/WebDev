# SaaS Auth Starter (React + Node + MySQL)

Starter project with:
- **Frontend:** React (Vite)
- **Backend:** Node.js + Express
- **Database:** MySQL (local instance)
- **Auth:** Register/Login with bcrypt password hashing + JWT

## 1) Project structure

- `frontend/` React app for login/register UI
- `backend/` Express API with auth endpoints
- `sql/init.sql` Database schema

## 2) Setup (without Docker)

### Prerequisites

- Node.js 18+
- npm 9+
- MySQL running locally
- phpMyAdmin access (as you mentioned)

### Install dependencies

```bash
npm --prefix backend install
npm --prefix frontend install
```

### Create DB/table via phpMyAdmin

1. Open phpMyAdmin.
2. Create a database named `saas_auth` (or another name you prefer).
3. Open the `Import` tab for that database.
4. Import `sql/init.sql`.

> If you choose a different DB name, update `DB_NAME` in `backend/.env`.

### Configure environment files

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

Then update `backend/.env` based on your local MySQL/phpMyAdmin setup (common XAMPP defaults shown):

```env
PORT=4000
CLIENT_ORIGIN=http://localhost:5173
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=saas_auth
JWT_SECRET=replace_with_secure_secret
JWT_EXPIRES_IN=1d
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
