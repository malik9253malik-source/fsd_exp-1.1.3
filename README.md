# Name: Kajal
# Section: 24BCY-2(B)NTPP
# UID: 24BCY70214


# JWT Authentication System

A simple JWT (JSON Web Token) Authentication System developed using **React.js**, **Node.js**, and **Express.js**. This project demonstrates secure user authentication using token-based session management.

---

## Aim

To design and implement a secure authentication system using JWT for user login and session management.

---

## Objectives

- Understand authentication mechanisms in web applications.
- Implement token-based authentication using JWT.
- Manage user sessions in a stateless architecture.
- Handle token storage and validation securely.

---

## Technologies Used

### Frontend
- React.js
- Axios
- CSS

### Backend
- Node.js
- Express.js
- JSON Web Token (jsonwebtoken)
- dotenv
- cors

---

## Project Structure

```
jwt-auth-project/
│
├── backend/
│   ├── controllers/
│   │   └── authController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── routes/
│   │   └── authRoutes.js
│   ├── .env
│   ├── server.js
│   ├── package.json
│   └── node_modules/
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── pages/
    │   │   ├── Login.js
    │   │   └── Dashboard.js
    │   ├── services/
    │   │   └── api.js
    │   ├── App.js
    │   ├── App.css
    │   └── index.js
    ├── package.json
    └── node_modules/
```

---

## Installation

### Clone Project

```bash
git clone <repository-url>
```

or

Download the project and open it in VS Code.

---

## Backend Setup

Go to backend folder.

```bash
cd backend
```

Install dependencies.

```bash
npm install
```

Create a `.env` file.

```env
PORT=5000
JWT_SECRET=mysecretkey
```

Run the backend server.

```bash
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

## Frontend Setup

Open another terminal.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Install Axios.

```bash
npm install axios
```

Run the React application.

```bash
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## Login Credentials

```
Username : admin

Password : 1234
```

---

## Authentication Flow

```
User Login
      │
      ▼
React Login Form
      │
      ▼
POST /api/login
      │
      ▼
Express Backend
      │
      ▼
Validate Credentials
      │
      ▼
Generate JWT
      │
      ▼
Return Token
      │
      ▼
Store Token in localStorage
      │
      ▼
GET /api/dashboard
Authorization: Bearer Token
      │
      ▼
JWT Verification
      │
      ▼
Dashboard Access
```

---

## Features

- User Login
- JWT Token Generation
- Stateless Authentication
- Protected Routes
- Token Verification
- Local Storage Token Management
- Logout Functionality

---

## API Endpoints

### Login

```
POST /api/login
```

Request

```json
{
    "username":"admin",
    "password":"1234"
}
```

Response

```json
{
    "token":"<JWT_TOKEN>"
}
```

---

### Dashboard

```
GET /api/dashboard
```

Headers

```
Authorization: Bearer <JWT_TOKEN>
```

Response

```json
{
    "message":"Protected Route Accessed",
    "user":{
        "id":1,
        "username":"admin",
        "role":"admin"
    }
}
```

---

## Expected Output

- User successfully logs in.
- JWT token is generated.
- Token is stored in browser localStorage.
- Protected route is accessed after token verification.
- Dashboard displays user information.
- Logout removes the stored token.

