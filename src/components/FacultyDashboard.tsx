import React, { useState } from 'react';
import Navbar from './Navbar.tsx';
import Sidebar from './Sidebar.tsx';
import DashboardHome from './faculty/DashboardHome.tsx';
import MyTimetable from './faculty/MyTimetable.tsx';
import AttendanceManagement from './faculty/AttendanceManagement.tsx';
import Reports from './faculty/Reports.tsx';

interface FacultyDashboardProps {
  onLogout: () => void;
}

const FacultyDashboard: React.FC<FacultyDashboardProps> = ({ onLogout }) => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'home' },
    { id: 'timetable', label: 'My Timetable', icon: 'calendar' },
    { id: 'attendance', label: 'Attendance', icon: 'qr-code' },
    { id: 'reports', label: 'Reports', icon: 'chart-bar' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardHome />;
      case 'timetable':
        return <MyTimetable />;
      case 'attendance':
        return <AttendanceManagement />;
      case 'reports':
        return <Reports />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar title="Faculty Dashboard" onLogout={onLogout} />
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

export default FacultyDashboard;