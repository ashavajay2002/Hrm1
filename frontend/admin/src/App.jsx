import React from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import Landing from '@shared/pages/Landing';
import RoleSelection from '@shared/pages/RoleSelection';
import Login from '@shared/pages/Login';
import AdminDashboard from './pages/admin/AdminDashboard';
import HRDashboard from './pages/hr/HRDashboard';
import ManagerDashboard from './pages/manager/ManagerDashboard';
import EmployeeDashboard from './pages/employee/EmployeeDashboard';
import Employees from './pages/admin/Employees';
import Departments from './pages/Departments';
import Attendance from './pages/hr/Attendance';
import LeaveManagement from './pages/hr/LeaveManagement';
import TimeTracker from './pages/employee/TimeTracker';
import Payroll from './pages/Payroll';
import Performance from './pages/Performance';
import Reports from './pages/Reports';
import Settings from './pages/admin/Settings';
import CreateUser from './pages/admin/CreateUser';
import MainLayout from '@shared/layouts/MainLayout';
import Profile from '@shared/pages/Profile';

// 🔒 Route Protection
const ProtectedRoute = ({ children, allowedRole }) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (!token) return <Navigate to="/select-role" replace />;

  // 👔 SUPER ADMIN: Can see everything
  if (role === 'admin') return children;

  // 👮 Specific Role Check
  if (allowedRole && role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const App = () => {
  return (
    <Routes>
      {/* 🏙️ Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/select-role" element={<RoleSelection />} />
      <Route path="/login/:role" element={<Login />} />

      {/* 🛡️ Admin Module (Full Access) */}
      <Route path="/admin" element={
        <ProtectedRoute allowedRole="admin">
          <MainLayout />
        </ProtectedRoute>
      }>
        <Route index element={<AdminDashboard />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="employees" element={<Employees />} />
        <Route path="departments" element={<Departments />} />
        <Route path="leave" element={<LeaveManagement />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="time-tracker" element={<TimeTracker />} />
        <Route path="payroll" element={<Payroll />} />
        <Route path="performance" element={<Performance />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
        <Route path="create-user" element={<CreateUser />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* ✅ HR Module (Access for HR and Admin) */}
      <Route path="/hr" element={
        <ProtectedRoute allowedRole="hr">
          <MainLayout />
        </ProtectedRoute>
      }>
        <Route index element={<HRDashboard />} />
        <Route path="dashboard" element={<HRDashboard />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="leave" element={<LeaveManagement />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* 👤 Employee Module (Access for Employee and Admin) */}
      <Route path="/employee" element={
        <ProtectedRoute allowedRole="employee">
          <MainLayout />
        </ProtectedRoute>
      }>
        <Route index element={<EmployeeDashboard />} />
        <Route path="dashboard" element={<EmployeeDashboard />} />
        <Route path="time-tracker" element={<TimeTracker />} />
        <Route path="leave" element={<LeaveManagement />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* 🔄 Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
