import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '@shared/layouts/MainLayout';
import { User, Clock, CalendarDays, Timer, CheckSquare, FolderOpen } from 'lucide-react';
import useAuthStore from '@shared/store/authStore';

function App() {
  const { user, logout } = useAuthStore();

  const navItems = [
    { label: 'My Profile', icon: <User size={22} />, path: '/' },
    { label: 'Daily Attendance', icon: <Clock size={22} />, path: '/attendance' },
    { label: 'Request Leave', icon: <CalendarDays size={22} />, path: '/leave' },
    { label: 'My Timesheet', icon: <Timer size={22} />, path: '/timesheet' },
    { label: 'Assigned Tasks', icon: <CheckSquare size={22} />, path: '/tasks' },
    { label: 'Personal Files', icon: <FolderOpen size={22} />, path: '/files' },
  ];

  return (
    <Router>
      <MainLayout 
        navItems={navItems} 
        userRole="Company Employee" 
        userName={user?.profile?.firstName || 'Employee'}
        onLogout={logout}
      >
        <Routes>
          <Route path="/" element={<div className="p-8 font-black text-3xl">Employee Dashboard</div>} />
          <Route path="/attendance" element={<div className="p-8 font-black text-2xl">Daily Time Logs</div>} />
          <Route path="/leave" element={<div className="p-8 font-black text-2xl">Request Management</div>} />
          <Route path="/timesheet" element={<div className="p-8 font-black text-2xl">Work Hours Record</div>} />
          <Route path="/tasks" element={<div className="p-8 font-black text-2xl">My Current Tasks</div>} />
          <Route path="/files" element={<div className="p-8 font-black text-2xl">Shared Repository</div>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
