# 🩺 FEYA Backend

FEYA is a **telemedicine platform** designed to improve maternal healthcare access in rural areas by enabling remote consultations, communication, and health monitoring.

This repository contains the **backend API** built with Node.js, Express, and PostgreSQL.

---

# 🚀 Features

## الحالية (Implemented)
- User registration (patients, health workers, admins)
- User login with JWT authentication
- Password hashing (secure storage)
- PostgreSQL database integration

## القادمة (Planned)
- Consultation booking system
- Messaging system (patient ↔ health worker)
- Alerts & reminders (SMS/app)
- Medical records tracking

---

# 🛠️ Tech Stack

- **Backend:** Node.js + Express
- **Database:** PostgreSQL
- **Authentication:** JWT (JSON Web Token)
- **Security:** bcrypt (password hashing)

---

# 📁 Project Structure
feya-backend/
│
├── src/
│ ├── config/ # Database configuration
│ ├── controllers/ # Business logic
│ ├── models/ # Database queries
│ ├── routes/ # API routes
│ ├── middleware/ # Auth middleware
│ └── app.js # Express app
│
├── sql/
│ └── schema.sql # Database schema
│
├── .env.example # Environment variables template
├── server.js # Entry point
├── package.json
└── README.md

---

# ⚙️ Setup Instructions

## 1. Clone the repository
git clone <your-repo-url>
cd feya-backend

## 2. Install dependencies
npm install

## 3. Setup environment variables

Create a `.env` file:
PORT=5000
DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/feya
JWT_SECRET=your_secret_key

---

## 4. Setup PostgreSQL

Login to PostgreSQL and run:
CREATE DATABASE feya;

Then run the schema:
psql -d feya -f sql/schema.sql

---

## 5. Run the server
npm run dev

Server will start at:
http://localhost:5000

---

# 🔐 Authentication

## Register
POST /api/auth/register

### Request body:
```json
{
  "name": "Ermias",
  "phone": "0912345678",
  "password": "123456",
  "role": "patient"
}
Login
POST /api/auth/login
Response:
{
  "token": "JWT_TOKEN",
  "user": {
    "id": 1,
    "name": "Ermias",
    "role": "patient"
  }
}
🔒 Protected Routes
To access protected routes, include the token:
Authorization: Bearer YOUR_TOKEN
🧬 Database Schema
Users Table
Column	Type	Description
id	SERIAL PK	Unique user ID
name	VARCHAR	User name
phone	VARCHAR	Unique phone number
password	TEXT	Hashed password
role	VARCHAR	patient / health_worker
created_at	TIMESTAMP	Created time
🧪 Testing
You can test the API using:
Postman
Insomnia
curl
📌 Roadmap
 Add consultation system
 Add messaging feature
 Add alerts/notifications
 Add role-based access control
 Deploy backend (Render / Railway / AWS)
🌍 Vision
FEYA aims to:
Reduce maternal mortality
Improve access to healthcare in rural areas
Enable remote diagnosis and monitoring
Bridge the gap between patients and professionals
🤝 Contributing
Fork the repository
Create a new branch
Make changes
Submit a pull request
📄 License
This project is for educational and development purposes.
👨‍💻 Author
Built as part of the FEYA healthcare innovation project.
