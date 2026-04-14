# Fluid HR - KUKII Architecture HRMS

A complete, full-stack Human Resource Management System with role-based access control.

## 📁 Project Structure

```text
Hrm/
├── frontend/
│   ├── admin/                # Admin Panel (React + Vite + TS)
│   ├── hr/                   # HR / Manager Panel
│   ├── employee/             # Employee Panel
│   └── shared/               # Shared logic & UI components
├── backend/
│   ├── controllers/          # API logic
│   ├── models/               # Mongoose schemas (User, Employee, etc)
│   ├── routes/               # API endpoints
│   └── index.js              # Server entry point
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB (Running locally or MongoDB Atlas)

### 1. Backend Setup

```bash
cd backend
npm install
# Update .env with your MONGODB_URI and JWT_SECRET
npm run dev
```

### 2. Frontend Setup

Each frontend app needs its own dependencies.

```bash
# Admin
cd frontend/admin
npm install
npm run dev

# HR
cd frontend/hr
npm install
npm run dev

# Employee
cd frontend/employee
npm install
npm run dev
```

## 🔐 Authentication & Roles

The system uses JWT authentication. 
- **Admin**: Full system control.
- **HR**: Team management and approvals.
- **Employee**: Personal profile, attendance, and leave applications.

## 🎨 Design System

Shared UI components are located in `frontend/shared/components`.
Common theme tokens:
- **Primary**: `#4F7DF3`
- **Sidebar**: `#F1F3F6`
- **Background**: `#F7F9FC`
- **Border Radius**: `12px`
- **Typography**: Inter / Sans-serif
