import { useState } from 'react';
import LandingPage from './components/LandingPage.tsx';
import FacultyDashboard from './components/FacultyDashboard.tsx';
import StudentDashboard from './components/StudentDashboard.tsx';

export type UserRole = 'faculty' | 'student' | null;

function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'faculty' | 'student'>('landing');
  
  const navigateToRole = (role: UserRole) => {
    if (role === 'faculty') {
      setCurrentView('faculty');
    } else if (role === 'student') {
      setCurrentView('student');
    }
  };

  const navigateToLanding = () => {
    setCurrentView('landing');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {currentView === 'landing' && (
        <LandingPage onRoleSelect={navigateToRole} />
      )}
      {currentView === 'faculty' && (
        <FacultyDashboard onLogout={navigateToLanding} />
      )}
      {currentView === 'student' && (
        <StudentDashboard onLogout={navigateToLanding} />
      )}
    </div>
  );
}

export default App;
