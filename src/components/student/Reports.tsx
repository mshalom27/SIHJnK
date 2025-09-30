import React from 'react';
import { BarChart3, Download, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

const Reports: React.FC = () => {
  const subjectWiseAttendance = [
    { subject: 'Data Structures', attended: 18, total: 20, percentage: 90, trend: 'up' },
    { subject: 'Database Systems', attended: 16, total: 18, percentage: 89, trend: 'up' },
    { subject: 'Algorithm Analysis', attended: 17, total: 19, percentage: 89, trend: 'stable' },
    { subject: 'Software Engineering', attended: 14, total: 17, percentage: 82, trend: 'down' },
    { subject: 'Machine Learning', attended: 12, total: 15, percentage: 80, trend: 'up' },
    { subject: 'Technical Writing', attended: 10, total: 14, percentage: 71, trend: 'down' }
  ];

  const monthlyStats = [
    { month: 'Sep', percentage: 92, classes: 45 },
    { month: 'Oct', percentage: 88, classes: 52 },
    { month: 'Nov', percentage: 91, classes: 48 },
    { month: 'Dec', percentage: 87, classes: 38 }
  ];

  const handleDownloadReport = (format: 'pdf' | 'csv') => {
    const fileName = `attendance_report.${format}`;
    alert(`Downloading ${fileName}...`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Attendance Reports</h1>
          <p className="text-gray-600 mt-2">Comprehensive overview of your academic attendance</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => handleDownloadReport('pdf')}
            className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            <Download className="w-4 h-4" />
            <span>PDF Report</span>
          </button>
          <button
            onClick={() => handleDownloadReport('csv')}
            className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            <Download className="w-4 h-4" />
            <span>CSV Export</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Overall Attendance</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">85.2%</p>
            </div>
            <div className="p-3 rounded-lg bg-indigo-50">
              <BarChart3 className="w-6 h-6 text-indigo-600" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-emerald-600">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span className="text-sm">+2.1% from last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Classes Attended</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">87</p>
            </div>
            <div className="p-3 rounded-lg bg-emerald-50">
              <TrendingUp className="w-6 h-6 text-emerald-600" />
            </div>
          </div>
          <div className="text-gray-600 text-sm mt-4">Out of 102 total classes</div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Best Subject</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">90%</p>
            </div>
            <div className="p-3 rounded-lg bg-amber-50">
              <TrendingUp className="w-6 h-6 text-amber-600" />
            </div>
          </div>
          <div className="text-gray-600 text-sm mt-4">Data Structures</div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Needs Improvement</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">71%</p>
            </div>
            <div className="p-3 rounded-lg bg-rose-50">
              <AlertTriangle className="w-6 h-6 text-rose-600" />
            </div>
          </div>
          <div className="text-rose-600 text-sm mt-4">Technical Writing</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">Subject-wise Attendance</h2>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            {subjectWiseAttendance.map((subject, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{subject.subject}</h3>
                    <p className="text-gray-600 text-sm">{subject.attended} out of {subject.total} classes</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className={`flex items-center space-x-1 ${
                      subject.trend === 'up' ? 'text-emerald-600' :
                      subject.trend === 'down' ? 'text-rose-600' : 'text-gray-600'
                    }`}>
                      {subject.trend === 'up' && <TrendingUp className="w-4 h-4" />}
                      {subject.trend === 'down' && <TrendingDown className="w-4 h-4" />}
                      <span className="text-sm font-medium">
                        {subject.trend === 'up' ? 'Improving' : 
                         subject.trend === 'down' ? 'Declining' : 'Stable'}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${
                        subject.percentage >= 85 ? 'text-emerald-600' :
                        subject.percentage >= 75 ? 'text-amber-600' : 'text-rose-600'
                      }`}>
                        {subject.percentage}%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      subject.percentage >= 85 ? 'bg-emerald-500' :
                      subject.percentage >= 75 ? 'bg-amber-500' : 'bg-rose-500'
                    }`}
                    style={{ width: `${subject.percentage}%` }}
                  ></div>
                </div>
                {subject.percentage < 75 && (
                  <div className="flex items-center space-x-2 text-rose-600 text-sm">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Below minimum attendance requirement (75%)</span>
                  </div>
                )}
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
            {monthlyStats.map((month, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl font-bold mb-2 ${
                  month.percentage >= 90 ? 'text-emerald-600' :
                  month.percentage >= 80 ? 'text-amber-600' : 'text-rose-600'
                }`}>
                  {month.percentage}%
                </div>
                <div className="text-gray-600 text-sm">{month.month} 2024</div>
                <div className="text-gray-500 text-xs">{month.classes} classes</div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      month.percentage >= 90 ? 'bg-emerald-500' :
                      month.percentage >= 80 ? 'bg-amber-500' : 'bg-rose-500'
                    }`}
                    style={{ width: `${month.percentage}%` }}
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
            <AlertTriangle className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-amber-900">Attendance Alert</h3>
            <p className="text-amber-700 mt-1">
              Your attendance in Technical Writing (71%) is below the required 75% threshold. 
              You need to attend at least 3 more classes to meet the minimum requirement.
            </p>
            <div className="mt-4 flex space-x-3">
              <button className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors duration-200">
                View Action Plan
              </button>
              <button className="px-4 py-2 border border-amber-300 text-amber-700 rounded-lg hover:bg-amber-100 transition-colors duration-200">
                Contact Instructor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;