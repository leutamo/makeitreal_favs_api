# REST API FAV'S

This project it's created to manage favs links.

BASE_URL: http://localhost:3000/api

LOGIN URL: http://localhost:3000/auth/local/login

{
"email": "correo_value",
"password": "password_value"
}

If you user it's registred previously the API send back a token, if your email not exist the API create a new user with email and password provides.

All routes and their respectives

| Route             | HTTP Verb | Route Middleware    | Description                     |
| ----------------- | --------- | ------------------- | ------------------------------- |
| /api/favs         | GET       | `isAuthenticated()` | Get all list of favorites       |
| /api/favs         | POST      | `isAuthenticated()` | Creates a new list of favorites |
| /api/favs/:id     | GET       | `isAuthenticated()` | Get a single list of favorites  |
| /api/favs/:id     | DELETE    | `isAuthenticated()` | Deletes a list of favorites     |
| /auth/local/login | POST      |                     | Login user by email/password    |
