import React from 'react';
import { BookOpen, Clock, TrendingUp, Calendar } from 'lucide-react';

const DashboardHome: React.FC = () => {
  const stats = [
    {
      label: "Credits Enrolled",
      value: "22",
      icon: <BookOpen className="w-6 h-6 text-teal-600" />,
      color: "teal"
    },
    {
      label: "Today's Classes",
      value: "3",
      icon: <Calendar className="w-6 h-6 text-blue-800" />,
      color: "blue"
    },
    {
      label: "Attendance Rate",
      value: "89%",
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
      color: "emerald"
    },
    {
      label: "Hours This Week",
      value: "16",
      icon: <Clock className="w-6 h-6 text-slate-600" />,
      color: "slate"
    }
  ];

  const todayClasses = [
    { time: "09:00 AM", subject: "Data Structures", instructor: "Dr. Smith", room: "CS-201", type: "Theory" },
    { time: "11:00 AM", subject: "Database Systems", instructor: "Prof. Johnson", room: "CS-205", type: "Theory" },
    { time: "02:00 PM", subject: "Algorithm Lab", instructor: "Dr. Wilson", room: "CS-Lab1", type: "Practical" }
  ];

  const recentAttendance = [
    { subject: "Data Structures", date: "Dec 10, 2024", status: "Present", percentage: 92 },
    { subject: "Database Systems", date: "Dec 10, 2024", status: "Present", percentage: 88 },
    { subject: "Algorithm Analysis", date: "Dec 9, 2024", status: "Present", percentage: 90 },
    { subject: "Software Engineering", date: "Dec 9, 2024", status: "Absent", percentage: 85 }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-700">Welcome Back, John</h1>
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
                  <div className={`w-3 h-3 rounded-full ${
                    classItem.type === 'Theory' ? 'bg-teal-600' : 'bg-emerald-600'
                  }`}></div>
                  <div>
                    <h3 className="font-semibold text-slate-700">{classItem.subject}</h3>
                    <p className="text-slate-500 text-sm">{classItem.instructor} • {classItem.room}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-teal-600">{classItem.time}</p>
                  <p className="text-slate-400 text-sm">{classItem.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-xl font-semibold text-slate-700">Recent Attendance</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {recentAttendance.map((record, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${
                    record.status === 'Present' ? 'bg-emerald-500' : 'bg-red-400'
                  }`}></div>
                  <div>
                    <h3 className="font-semibold text-slate-700">{record.subject}</h3>
                    <p className="text-slate-500 text-sm">{record.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${
                    record.status === 'Present' ? 'text-emerald-600' : 'text-red-400'
                  }`}>{record.status}</p>
                  <p className="text-slate-400 text-sm">{record.percentage}% overall</p>
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
              <h3 className="font-semibold text-teal-800">Scan QR Code</h3>
              <p className="text-teal-600 text-sm mt-1">Mark attendance for current class</p>
            </button>
            <button className="p-4 text-left bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200">
              <h3 className="font-semibold text-blue-800">View Timetable</h3>
              <p className="text-blue-700 text-sm mt-1">Check your weekly schedule</p>
            </button>
            <button className="p-4 text-left bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors duration-200">
              <h3 className="font-semibold text-slate-700">Download Reports</h3>
              <p className="text-slate-500 text-sm mt-1">Get attendance summary</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;