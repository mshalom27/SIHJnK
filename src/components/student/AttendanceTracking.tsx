import React, { useState } from 'react';
import { ScanLine, CheckCircle, X } from 'lucide-react';

const AttendanceTracking: React.FC = () => {
  const [showScanModal, setShowScanModal] = useState(false);
  const [attendanceMarked, setAttendanceMarked] = useState(false);

  const currentClass = {
    subject: 'Data Structures',
    instructor: 'Dr. Smith',
    room: 'CS-201',
    time: '09:00 AM - 10:30 AM'
  };

  const recentAttendance = [
    { date: 'Dec 10, 2024', subject: 'Data Structures', status: 'Present', time: '09:00 AM' },
    { date: 'Dec 10, 2024', subject: 'Database Systems', status: 'Present', time: '11:00 AM' },
    { date: 'Dec 9, 2024', subject: 'Algorithm Analysis', status: 'Present', time: '09:00 AM' },
    { date: 'Dec 9, 2024', subject: 'Software Engineering', status: 'Absent', time: '02:00 PM' },
    { date: 'Dec 8, 2024', subject: 'Data Structures', status: 'Present', time: '09:00 AM' }
  ];

  const handleScanQR = () => {
    setShowScanModal(true);

    setTimeout(() => {
      setAttendanceMarked(true);
      setTimeout(() => {
        setShowScanModal(false);
        setAttendanceMarked(false);
      }, 2000);
    }, 2000);
  };

  const ScanModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
        <div className="text-center">
          {!attendanceMarked ? (
            <>
              <div className="mb-6">
                <div className="w-24 h-24 mx-auto bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <ScanLine className="w-12 h-12 text-teal-600 animate-pulse" />
                </div>
                <h2 className="text-2xl font-bold text-slate-700 mb-2">Scanning QR Code</h2>
                <p className="text-slate-500">Please hold steady while we verify your attendance...</p>
              </div>
              
              <div className="bg-slate-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-slate-700">{currentClass.subject}</h3>
                <p className="text-slate-500 text-sm">{currentClass.instructor}</p>
                <p className="text-slate-500 text-sm">{currentClass.room} • {currentClass.time}</p>
              </div>

              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
              </div>
            </>
          ) : (
            <>
              <div className="mb-6">
                <div className="w-24 h-24 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-12 h-12 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-emerald-800 mb-2">Attendance Marked Successfully!</h2>
                <p className="text-emerald-600">You have been marked present for this class.</p>
              </div>
              
              <div className="bg-emerald-50 rounded-lg p-4">
                <h3 className="font-semibold text-emerald-800">{currentClass.subject}</h3>
                <p className="text-emerald-600 text-sm">{currentClass.instructor}</p>
                <p className="text-emerald-600 text-sm">{currentClass.room} • {currentClass.time}</p>
              </div>
            </>
          )}
        </div>
        
        {!attendanceMarked && (
          <button
            onClick={() => setShowScanModal(false)}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
          >
            <X className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Attendance Tracking</h1>
        <p className="text-gray-600 mt-2">Scan QR codes to mark your attendance</p>
      </div>

      <div className="bg-gradient-to-r from-teal-600 to-blue-800 rounded-xl p-8 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Current Class</h2>
            <h3 className="text-xl font-semibold mb-1">{currentClass.subject}</h3>
            <p className="opacity-90">{currentClass.instructor}</p>
            <p className="opacity-90">{currentClass.room} • {currentClass.time}</p>
          </div>
          <button
            onClick={handleScanQR}
            className="bg-white text-teal-600 px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 hover:bg-slate-100 transition-colors duration-200 shadow-lg"
          >
            <ScanLine className="w-5 h-5" />
            <span>Scan QR Code</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="text-3xl font-bold text-emerald-600 mb-2">89%</div>
          <div className="text-slate-500">Overall Attendance</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="text-3xl font-bold text-teal-600 mb-2">34</div>
          <div className="text-slate-500">Classes Attended</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="text-3xl font-bold text-red-400 mb-2">4</div>
          <div className="text-slate-500">Classes Missed</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="text-3xl font-bold text-blue-800 mb-2">16</div>
          <div className="text-slate-500">Hours This Week</div>
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
                    <p className="text-slate-500 text-sm">{record.date} • {record.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    record.status === 'Present' 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {record.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-teal-800 mb-3">How to Mark Attendance</h3>
        <div className="space-y-2 text-teal-700">
          <p className="flex items-start space-x-2">
            <span className="font-semibold">1.</span>
            <span>Wait for your instructor to display the QR code in class</span>
          </p>
          <p className="flex items-start space-x-2">
            <span className="font-semibold">2.</span>
            <span>Click the "Scan QR Code" button during class time</span>
          </p>
          <p className="flex items-start space-x-2">
            <span className="font-semibold">3.</span>
            <span>Hold your device steady and wait for confirmation</span>
          </p>
          <p className="flex items-start space-x-2">
            <span className="font-semibold">4.</span>
            <span>Attendance will be automatically recorded once verified</span>
          </p>
        </div>
      </div>

      {showScanModal && <ScanModal />}
    </div>
  );
};

export default AttendanceTracking;