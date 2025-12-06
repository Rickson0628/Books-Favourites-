# 📚 Books Favourites App

A full-stack web application that allows users to browse books, register/login, and save their favourite titles. This project was created for the WEB422 course to demonstrate authentication, REST APIs, and working with a deployed MongoDB/Express/React environment.

Backend API for this project is available here: [User API](https://github.com/Rickson0628/user-api)

---

## 🚀 Live Demo

🔗 **[https://books-favourites-xt9c.vercel.app/login](https://books-favourites-xt9c.vercel.app/login)**

---

## 🛠️ Tech Stack

### **Frontend**

* React
* React Router
* Bootstrap 5
* Vercel (Deployment)

### **Backend**

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication

---

## ✨ Features

* 🔐 **User Authentication** (Register, Login, Logout)
* 📚 **Browse books** and view details
* ⭐ **Mark books as favourites**
* ❤️ **View your personal favourites list**
* 🔒 Secure API endpoints protected by JWT
* 🌐 Fully deployed using Vercel + MongoDB Atlas

---

## 📦 Installation (Local Setup)

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/books-favourites.git
cd books-favourites
```

### 2️⃣ Install backend dependencies

```
npm install
```

### 3️⃣ Create a `.env` file

```
PORT=8080
MONGODB=mongodb+srv://<your-db-uri>
JWT_SECRET=your-secret-key
```

### 4️⃣ Run the backend

```
npm start
```

### 5️⃣ Run the frontend (if in a `/client` folder)

```
npm run dev
```

---

## 🔧 Environment Variables

| Variable     | Description                          |
| ------------ | ------------------------------------ |
| `PORT`       | Server port                          |
| `MONGODB`    | MongoDB Atlas connection string      |
| `JWT_SECRET` | Key used for signing JSON Web Tokens |

---

## 📁 Project Structure

```
/server
  ├── routes/
  ├── models/
  ├── controllers/
  ├── user-service.js
  └── server.js

/client
  ├── src/
  │    ├── components/
  │    ├── pages/
  │    ├── hooks/
  │    └── App.js
  ├── public/
  └── package.json
```

---

## 🧪 API Endpoints (Example)

### **Auth Routes**

```
POST /api/register
POST /api/login
GET  /api/profile
```

### **Book Routes**

```
GET    /api/books
POST   /api/books/favourites
GET    /api/books/favourites
DELETE /api/books/favourites/:id
```

---

## 🤝 Credits

Developed by **Rickson Bozar**
WEB422 – Full-Stack Web Development
