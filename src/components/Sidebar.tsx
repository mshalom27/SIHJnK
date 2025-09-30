import React from 'react';
import { Home, Calendar, QrCode, BarChart3, ScanLine } from 'lucide-react';

interface SidebarItem {
  id: string;
  label: string;
  icon: string;
}

interface SidebarProps {
  items: SidebarItem[];
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ items, activeSection, onSectionChange }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'home':
        return <Home className="w-5 h-5" />;
      case 'calendar':
        return <Calendar className="w-5 h-5" />;
      case 'qr-code':
        return <QrCode className="w-5 h-5" />;
      case 'scan':
        return <ScanLine className="w-5 h-5" />;
      case 'chart-bar':
        return <BarChart3 className="w-5 h-5" />;
      default:
        return <Home className="w-5 h-5" />;
    }
  };

  return (
    <div className="fixed left-0 top-16 h-full w-64 bg-slate-50">
      <div className="p-6">
        <nav className="space-y-2">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'text-team-200 hover:bg-blue-700 hover:text-white'
              }`}
            >
              {getIcon(item.icon)}
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;