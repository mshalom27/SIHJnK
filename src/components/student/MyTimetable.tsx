

import React from 'react';
import { FileText, Table } from 'lucide-react';

type ClassData = {
  subject: string;
  instructor: string;
  room: string;
  type: 'Major' | 'Minor' | 'Core' | 'Elective' | 'Project';
};

const MyTimetable: React.FC = () => {
  const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const timetableData: Record<string, Record<string, ClassData>> = {
    Monday: {
      '09:00 AM': { subject: 'Data Structures', instructor: 'Dr. Smith', room: 'CS-201', type: 'Major' },
      '11:00 AM': { subject: 'Mathematics III', instructor: 'Prof. Davis', room: 'Math-101', type: 'Core' },
      '02:00 PM': { subject: 'Algorithm Lab', instructor: 'Dr. Wilson', room: 'CS-Lab1', type: 'Major' },
    },
    Tuesday: {
      '10:00 AM': { subject: 'Database Systems', instructor: 'Prof. Johnson', room: 'CS-205', type: 'Major' },
      '01:00 PM': { subject: 'Technical Writing', instructor: 'Dr. Brown', room: 'ENG-201', type: 'Minor' },
      '03:00 PM': { subject: 'Physics Lab', instructor: 'Prof. Lee', room: 'Phy-Lab2', type: 'Core' },
    },
    Wednesday: {
      '09:00 AM': { subject: 'Algorithm Analysis', instructor: 'Dr. Taylor', room: 'CS-301', type: 'Major' },
      '11:00 AM': { subject: 'Data Structures', instructor: 'Dr. Smith', room: 'CS-201', type: 'Major' },
      '02:00 PM': { subject: 'Machine Learning', instructor: 'Prof. Garcia', room: 'CS-401', type: 'Elective' },
    },
    Thursday: {
      '10:00 AM': { subject: 'Software Engineering', instructor: 'Dr. Miller', room: 'CS-301', type: 'Major' },
      '12:00 PM': { subject: 'Database Systems', instructor: 'Prof. Johnson', room: 'CS-205', type: 'Major' },
      '04:00 PM': { subject: 'Project Work', instructor: 'Dr. Wilson', room: 'CS-Lab3', type: 'Project' },
    },
    Friday: {
      '09:00 AM': { subject: 'Algorithm Analysis', instructor: 'Dr. Taylor', room: 'CS-301', type: 'Major' },
      '11:00 AM': { subject: 'Ethics in AI', instructor: 'Prof. Kumar', room: 'CS-Hall', type: 'Minor' },
      '02:00 PM': { subject: 'Software Engg Lab', instructor: 'Dr. Miller', room: 'CS-Lab2', type: 'Major' },
    },
  };

  const getClassColor = (type: ClassData['type']) => {
    switch (type) {
      case 'Major': return 'bg-teal-100 text-teal-800 border-teal-200';
      case 'Minor': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Core': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Elective': return 'bg-slate-100 text-slate-800 border-slate-200';
      case 'Project': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const handleDownload = (format: 'pdf' | 'csv') => {
    const fileName = `my_timetable.${format}`;
    alert(`Downloading ${fileName}...`);
  };

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-700">My Timetable</h1>
          <p className="text-slate-500 mt-2">Your personalized weekly schedule</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => handleDownload('pdf')}
            className="flex items-center space-x-2 px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500 transition-colors duration-200"
          >
            <FileText className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
          <button
            onClick={() => handleDownload('csv')}
            className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200"
          >
            <Table className="w-4 h-4" />
            <span>Download CSV</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
          <div className="text-2xl font-bold text-teal-600">22</div>
          <div className="text-sm text-slate-500">Credits</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
          <div className="text-2xl font-bold text-teal-600">8</div>
          <div className="text-sm text-slate-500">Major Courses</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
          <div className="text-2xl font-bold text-blue-800">2</div>
          <div className="text-sm text-slate-500">Core Subjects</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
          <div className="text-2xl font-bold text-slate-600">1</div>
          <div className="text-sm text-slate-500">Electives</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
          <div className="text-2xl font-bold text-emerald-600">2</div>
          <div className="text-sm text-slate-500">Minors</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 w-24">Time</th>
                {days.map(day => (
                  <th key={day} className="px-4 py-3 text-center text-sm font-semibold text-slate-700">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((time) => (
                <tr key={time} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="px-4 py-4 text-sm font-medium text-slate-700 bg-slate-50">
                    {time}
                  </td>
                  {days.map((day) => {
                    const classData = timetableData[day as keyof typeof timetableData]?.[time];
                    return (
                      <td key={`${day}-${time}`} className="px-2 py-2 text-center">
                        {classData ? (
                          <div className={`p-3 rounded-lg border ${getClassColor(classData.type)} hover:shadow-md transition-shadow duration-200`}>
                            <div className="font-semibold text-xs">{classData.subject}</div>
                            <div className="text-xs mt-1">{classData.instructor}</div>
                            <div className="text-xs mt-1">{classData.room}</div>
                            <div className="text-xs opacity-75 mt-1">{classData.type}</div>
                          </div>
                        ) : (
                          <div className="h-20 flex items-center justify-center text-slate-400">
                            -
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyTimetable;
