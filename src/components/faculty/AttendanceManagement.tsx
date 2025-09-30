import React, { useState } from 'react';
import { QrCode, X, Clock, Users } from 'lucide-react';

type ClassInfo = {
  id: number;
  subject: string;
  room: string;
  time: string;
  students: number;
};

const AttendanceManagement: React.FC = () => {
  const [showQRModal, setShowQRModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState<ClassInfo | null>(null);

  const todayClasses: ClassInfo[] = [
    { id: 1, subject: 'Data Structures', room: 'CS-201', time: '09:00 AM', students: 45 },
    { id: 2, subject: 'Algorithm Analysis', room: 'CS-301', time: '11:00 AM', students: 38 },
    { id: 3, subject: 'Database Systems', room: 'CS-205', time: '02:00 PM', students: 52 },
    { id: 4, subject: 'Software Engineering', room: 'CS-401', time: '04:30 PM', students: 41 }
  ];

  const handleGenerateQR = (classInfo: ClassInfo) => {
    setSelectedClass(classInfo);
    setShowQRModal(true);
  };

  const QRModal: React.FC = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-700">Attendance QR Code</h2>
          <button
            onClick={() => setShowQRModal(false)}
            className="text-slate-400 hover:text-slate-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="text-center mb-6">
          <div className="bg-slate-100 rounded-lg p-8 mb-4">
            <div className="w-48 h-48 bg-white rounded-lg mx-auto flex items-center justify-center border-2 border-dashed border-slate-300">
              <div className="text-center">
                <QrCode className="w-24 h-24 text-slate-400 mx-auto mb-2" />
                <p className="text-slate-500 text-sm">QR Code Placeholder</p>
              </div>
            </div>
          </div>
          
          {selectedClass && (
            <div className="text-left bg-slate-50 rounded-lg p-4">
              <h3 className="font-semibold text-slate-700">{selectedClass.subject}</h3>
              <p className="text-slate-500 text-sm">{selectedClass.room} • {selectedClass.time}</p>
              <p className="text-slate-500 text-sm">{selectedClass.students} students enrolled</p>
            </div>
          )}
        </div>
        
        <div className="flex space-x-3">
          <button
            onClick={() => setShowQRModal(false)}
            className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors duration-200"
          >
            Close
          </button>
          <button className="flex-1 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200">
            Download QR
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-700">Attendance Management</h1>
        <p className="text-slate-500 mt-2">Generate QR codes and track student attendance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Today's Classes</p>
              <p className="text-3xl font-bold text-slate-700 mt-2">{todayClasses.length}</p>
            </div>
            <div className="p-3 rounded-lg bg-teal-50">
              <Clock className="w-6 h-6 text-teal-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Total Students</p>
              <p className="text-3xl font-bold text-slate-700 mt-2">
                {todayClasses.reduce((sum, c) => sum + c.students, 0)}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-blue-50">
              <Users className="w-6 h-6 text-blue-800" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Avg Attendance</p>
              <p className="text-3xl font-bold text-slate-700 mt-2">87%</p>
            </div>
            <div className="p-3 rounded-lg bg-emerald-50">
              <QrCode className="w-6 h-6 text-emerald-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">QR Generated</p>
              <p className="text-3xl font-bold text-slate-700 mt-2">23</p>
            </div>
            <div className="p-3 rounded-lg bg-red-50">
              <QrCode className="w-6 h-6 text-red-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-xl font-semibold text-slate-700">Today's Classes</h2>
          <p className="text-slate-500 text-sm mt-1">Generate QR codes for attendance tracking</p>
        </div>
        <div className="p-6 space-y-4">
          {todayClasses.map((classItem) => (
            <div key={classItem.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
                <div>
                  <h3 className="font-semibold text-slate-700">{classItem.subject}</h3>
                  <p className="text-slate-500 text-sm">{classItem.room} • {classItem.students} students</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-teal-600 font-semibold">{classItem.time}</span>
                <button
                  onClick={() => handleGenerateQR(classItem)}
                  className="flex items-center space-x-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200"
                >
                  <QrCode className="w-4 h-4" />
                  <span>Generate QR</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showQRModal && <QRModal />}
    </div>
  );
};

export default AttendanceManagement;
