# Blog Web

## 📌 Project Overview
Blog Web is a simple web application that allows users to add and view articles. It is built using **React.js** for the frontend, **Express.js** for the backend, and **MongoDB** for data storage.

---

## 🛠 Tech Stack
- **Frontend:** React.js, Axios, Bootstrap
- **Backend:** Node.js, Express.js, Mongoose
- **Database:** MongoDB

---

## 🚀 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/yourusername/blog-web.git
cd blog-web
```

### **2️⃣ Backend Setup**
```sh
cd backend
npm install
```

#### **Start Backend Server**
```sh
nodemon app.js
```

Make sure MongoDB is running:
```sh
mongod
```

### **3️⃣ Frontend Setup**
```sh
cd frontend
npm install
```

#### **Start Frontend Server**
```sh
npm run dev
```

---

## 📌 API Endpoints

### **1️⃣ Get Articles**
- **URL:** `GET /`
- **Response:**
  ```json
  [
    { "title": "Article-1", "body": "Description-1" },
    { "title": "Article-2", "body": "Description-2" }
  ]
  ```

### **2️⃣ Add Article**
- **URL:** `POST /addarticle`
- **Request Body:**
  ```json
  {
    "name": "New Article",
    "body": "Article Description"
  }
  ```
- **Response:**
  ```json
  { "message": "Article added successfully!" }
  ```

---

## 📸 Screenshots
![Homepage](https://your-image-link.com)
![Add Article Page](https://your-image-link.com)

---

## 📌 Features
✅ Add articles via a form
✅ Fetch and display articles
✅ Backend with Express and MongoDB
✅ Responsive UI with Bootstrap

---

## 📝 To-Do
- [ ] Add authentication
- [ ] Implement article editing
- [ ] Improve UI with animations

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

---

## 📩 Contact
- **Your Name:** Dev Mondal
- **Email:** your-email@example.com
- **GitHub:** [yourusername](https://github.com/yourusername)


