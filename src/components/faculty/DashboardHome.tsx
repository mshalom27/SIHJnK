import React from 'react';
import { Clock, BookOpen, Users, TrendingUp } from 'lucide-react';

const DashboardHome: React.FC = () => {
  const stats = [
    {
      label: "Today's Classes",
      value: "4",
      icon: <BookOpen className="w-6 h-6 text-teal-600" />,
      color: "teal"
    },
    {
      label: "Hours This Week",
      value: "18",
      icon: <Clock className="w-6 h-6 text-blue-800" />,
      color: "emerald"
    },
    {
      label: "Students Enrolled",
      value: "156",
      icon: <Users className="w-6 h-6 text-slate-600" />,
      color: "slate"
    },
    {
      label: "Attendance Rate",
      value: "87%",
      icon: <TrendingUp className="w-6 h-6 text-red-400" />,
      color: "red"
    }
  ];

  const todayClasses = [
    { time: "09:00 AM", subject: "Data Structures", room: "CS-201", duration: "1.5 hrs" },
    { time: "11:00 AM", subject: "Algorithm Analysis", room: "CS-301", duration: "1 hr" },
    { time: "02:00 PM", subject: "Database Systems", room: "CS-205", duration: "2 hrs" },
    { time: "04:30 PM", subject: "Software Engineering", room: "CS-401", duration: "1.5 hrs" }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-700">Welcome Back, Dr. Smith</h1>
        <p className="text-slate-500 mt-2">Here's your academic overview for today</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                <p className="text-3xl font-bold text-slate-700 mt-2">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg bg-${stat.color}-50`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-xl font-semibold text-slate-700">Today's Schedule</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {todayClasses.map((classItem, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  <div>
                    <h3 className="font-semibold text-slate-700">{classItem.subject}</h3>
                    <p className="text-slate-500 text-sm">{classItem.room} • {classItem.duration}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-teal-600">{classItem.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-xl font-semibold text-slate-700">Quick Actions</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 text-left bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors duration-200">
              <h3 className="font-semibold text-teal-800">Generate QR Code</h3>
              <p className="text-teal-600 text-sm mt-1">For current class attendance</p>
            </button>
            <button className="p-4 text-left bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200">
              <h3 className="font-semibold text-blue-800">View Reports</h3>
              <p className="text-blue-700 text-sm mt-1">Student attendance analytics</p>
            </button>
            <button className="p-4 text-left bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors duration-200">
              <h3 className="font-semibold text-slate-700">Update Timetable</h3>
              <p className="text-slate-500 text-sm mt-1">Modify schedule preferences</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;