import React from 'react';
import { BarChart3, TrendingUp, TrendingDown, Users } from 'lucide-react';

const Reports: React.FC = () => {
  const attendanceData = [
    { subject: 'Data Structures', attendance: 87, trend: 'up', students: 45 },
    { subject: 'Algorithm Analysis', attendance: 92, trend: 'up', students: 38 },
    { subject: 'Database Systems', attendance: 84, trend: 'down', students: 52 },
    { subject: 'Software Engineering', attendance: 89, trend: 'up', students: 41 }
  ];

  const monthlyStats = [
    { month: 'Sep', attendance: 85 },
    { month: 'Oct', attendance: 88 },
    { month: 'Nov', attendance: 91 },
    { month: 'Dec', attendance: 87 }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Attendance Reports</h1>
        <p className="text-gray-600 mt-2">Comprehensive analytics and student performance insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Overall Attendance</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">87.8%</p>
            </div>
            <div className="p-3 rounded-lg bg-indigo-50">
              <BarChart3 className="w-6 h-6 text-indigo-600" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-emerald-600">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span className="text-sm">+2.3% from last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">176</p>
            </div>
            <div className="p-3 rounded-lg bg-emerald-50">
              <Users className="w-6 h-6 text-emerald-600" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-gray-600">
            <span className="text-sm">Across 4 subjects</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Best Performance</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">92%</p>
            </div>
            <div className="p-3 rounded-lg bg-amber-50">
              <TrendingUp className="w-6 h-6 text-amber-600" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-gray-600">
            <span className="text-sm">Algorithm Analysis</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Needs Attention</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">84%</p>
            </div>
            <div className="p-3 rounded-lg bg-rose-50">
              <TrendingDown className="w-6 h-6 text-rose-600" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-rose-600">
            <TrendingDown className="w-4 h-4 mr-1" />
            <span className="text-sm">Database Systems</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">Subject-wise Attendance</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {attendanceData.map((subject, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{subject.subject}</h3>
                    <p className="text-gray-600 text-sm">{subject.students} students enrolled</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{subject.attendance}%</div>
                    <div className={`flex items-center text-sm ${
                      subject.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'
                    }`}>
                      {subject.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4 mr-1" />
                      ) : (
                        <TrendingDown className="w-4 h-4 mr-1" />
                      )}
                      <span>{subject.trend === 'up' ? 'Improving' : 'Declining'}</span>
                    </div>
                  </div>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        subject.attendance >= 90 ? 'bg-emerald-500' :
                        subject.attendance >= 80 ? 'bg-amber-500' : 'bg-rose-500'
                      }`}
                      style={{ width: `${subject.attendance}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">Monthly Attendance Trends</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-4 gap-6">
            {monthlyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-2">{stat.attendance}%</div>
                <div className="text-gray-600 text-sm">{stat.month} 2024</div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: `${stat.attendance}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-amber-100 rounded-lg">
            <TrendingDown className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-amber-900">Students Requiring Attention</h3>
            <p className="text-amber-700 mt-1">12 students have attendance below 75% threshold and may need intervention.</p>
            <button className="mt-3 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors duration-200">
              View Detailed List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;