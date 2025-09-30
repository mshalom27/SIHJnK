import React from 'react';
import { BookOpen, LogOut } from 'lucide-react';

interface NavbarProps {
  title: string;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ title, onLogout }) => {
  return (
    <nav className="bg-teal-600 shadow-sm">
      <div className="px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-teal-600" />
          </div>
          <span className="text-lg font-semibold text-white">EduSync</span>
          <span className="text-teal-200">|</span>
          <span className="text-white">{title}</span>
        </div>
        <button
          onClick={onLogout}
          className="flex items-center space-x-2 px-4 py-2 text-white hover:text-teal-100 hover:bg-teal-700 rounded-lg transition-colors duration-200"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;