# 🧾 Yearly Reports & Billing Dashboard (MERN Stack)

A comprehensive MERN stack application designed for managing **billing statements**, **rider tracking**, and **yearly financial reports**. Built with scalability and modularity in mind, this project features a React frontend and a Node.js + Express backend, connected to a MongoDB database.

---

## 📁 Project Structure


watched the vide that you provide and start form forntend and connect to backend 

### Frontend (`/src`)
- `components/Sidebar.jsx`: App navigation
- `pages/BillingStatements.jsx`: Billing report UI
- `pages/RiderTracking.jsx`: Rider info and tracking
- `pages/Workstation.jsx`: Workstation overview
- `pages/YearlyPage.jsx`: Yearly consolidated reports

### Backend (`/backend`)
- `controllers/`: Logic for handling API endpoints
- `models/`: MongoDB schemas (Mongoose)
- `routes/`: Express routes for each module
- `config/db.js`: MongoDB connection config
- `server.js`: Main Express server file
- `.env`: Environment variables

---

## 🚀 Features

### ✅ Frontend
- Built with **React** and functional components
- Yearly report dropdown with dynamic filtering
- Conditional rendering of table based on entity type
- Export to **PDF** or **Excel**
- Sidebar for page navigation

### ✅ Backend
- RESTful APIs built with **Express.js**
- Mongoose models for `Billing`, `Rider`, `YearlyReport`
- Separate route and controller files
- MongoDB integration via **Mongoose**

---

## ⚙️ Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-project.git
cd your-project
