import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import DashboardHome from './student/DashboardHome.tsx';
import MyTimetable from './student/MyTimetable.tsx';
import AttendanceTracking from './student/AttendanceTracking.tsx';
import Reports from './student/Reports.tsx';

interface StudentDashboardProps {
  onLogout: () => void;
}

const StudentDashboard: React.FC<StudentDashboardProps> = ({ onLogout }) => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'home' },
    { id: 'timetable', label: 'My Timetable', icon: 'calendar' },
    { id: 'attendance', label: 'Attendance', icon: 'scan' },
    { id: 'reports', label: 'Reports', icon: 'chart-bar' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardHome />;
      case 'timetable':
        return <MyTimetable />;
      case 'attendance':
        return <AttendanceTracking />;
      case 'reports':
        return <Reports />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar title="Student Dashboard" onLogout={onLogout} />
      <div className="flex">
        <Sidebar
          items={sidebarItems}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        <main className="flex-1 ml-64 p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;