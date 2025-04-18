
# Task Manager Mini Project

Welcome to the **Task Manager Application**!  
This is a **full-stack web application** designed to help you manage your tasks efficiently. It includes **user authentication**, a **task dashboard**, and full **CRUD operations** for tasks.  
The frontend is developed using **React**, and the backend is powered by a **Node.js/Express** server with a **MongoDB** database.

---

## 📚 Table of Contents

- [✨ Features](#-features)  
- [⚙️ Prerequisites](#️-prerequisites)  
- [📦 Installation](#-installation)  
- [🚀 Usage](#-usage)  
- [📁 Project Structure](#-project-structure)  
- [🤝 Contributing](#-contributing)  
- [📝 License](#-license)  
- [📬 Contact](#-contact)  

---

## ✨ Features

- 🔐 User authentication (Login/Register)
- 📝 Create, edit, delete, and toggle the status of tasks
- 🔍 Filter tasks by title, category, and status
- 📊 Responsive dashboard with task stats (total, pending, completed)
- 🌙 Dark-themed UI with 3D effects and animations
- 🔒 Secure API endpoints using JWT (token-based authentication)

---

## ⚙️ Prerequisites

Before you begin, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- [Git](https://git-scm.com/)

---

## 📦 Installation

### 1. **Clone the Repository**

```bash
git clone https://github.com/Shreyasharma5947/task-manager.git
cd task-manager
```

---

### 2. **Backend Setup**

```bash
cd task-mng-back
npm install
```

Create a `.env` file in the `task-mng-back` directory and add the following:

```
MONGODB_URI=mongodb://localhost:27017/taskmanager
PORT=5000
JWT_SECRET=your-secret-key
```

Start the backend server:

```bash
npm start
```

---

### 3. **Frontend Setup**

```bash
cd ../task-mng-front
npm install
npm start
```

Open your browser and visit: [http://localhost:3000](http://localhost:3000)

---

## 🚀 Usage

1. **Register a New Account**  
   Go to the registration page and create a new user.

2. **Log In**  
   Use your credentials to access the dashboard.

3. **Manage Tasks**  
   - Add new tasks with title, description, category, status, and priority  
   - Edit or delete tasks  
   - Filter by search, category, or status  
   - Toggle between "pending" and "completed"

4. **Logout**  
   Use the logout button to securely end your session.

---

## 📁 Project Structure

```
task-manager/
├── task-mng-back/          # Backend directory
│   ├── config/             # Configuration files
│   ├── controllers/        # API controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── .env                # Environment variables
│   ├── package.json
│   └── server.js
├── task-mng-front/         # Frontend directory
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Auth.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── TaskFilter.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   └── TaskList.jsx
│   │   ├── login.css
│   │   ├── register.css
│   │   ├── taskfilter.css
│   │   ├── taskform.css
│   │   ├── tasklist.css
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── public/
├── README.md
└── .gitignore
```

---

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repo
2. Create a new branch:  
   `git checkout -b feature/your-feature`
3. Commit your changes:  
   `git commit -m "Add your message"`
4. Push to the branch:  
   `git push origin feature/your-feature`
5. Open a pull request with a clear description of your changes

**Note:** Make sure your code follows the existing style and includes appropriate tests.

---

## 📝 License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for more information.

---

## 📬 Contact

- GitHub Issues: [Click Here](https://github.com/Shreyasharma5947/task-manager/issues)  
- Email: [shreyasharma24muz@gmail.com](mailto:shreyasharma24muz@gmail.com)

---
