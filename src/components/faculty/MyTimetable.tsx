

import React from 'react';
import {FileText, Table } from 'lucide-react';

type ClassInfo = { subject: string; room: string; type: string };
type DaySchedule = Record<string, ClassInfo>; 
type TimetableData = Record<string, DaySchedule>; 

const MyTimetable: React.FC = () => {
  const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const timetableData: TimetableData = {
    Monday: {
      '09:00 AM': { subject: 'Data Structures', room: 'CS-201', type: 'Theory' },
      '11:00 AM': { subject: 'Algorithm Lab', room: 'CS-Lab1', type: 'Practical' },
      '02:00 PM': { subject: 'Database Systems', room: 'CS-205', type: 'Theory' },
    },
    Tuesday: {
      '10:00 AM': { subject: 'Software Engg', room: 'CS-401', type: 'Theory' },
      '02:00 PM': { subject: 'Data Structures', room: 'CS-201', type: 'Theory' },
      '04:00 PM': { subject: 'Project Guide', room: 'CS-301', type: 'Guidance' },
    },
    Wednesday: {
      '09:00 AM': { subject: 'Algorithm Analysis', room: 'CS-301', type: 'Theory' },
      '11:00 AM': { subject: 'Database Lab', room: 'CS-Lab2', type: 'Practical' },
      '03:00 PM': { subject: 'Seminar', room: 'CS-Hall', type: 'Seminar' },
    },
    Thursday: {
      '10:00 AM': { subject: 'Data Structures', room: 'CS-201', type: 'Theory' },
      '01:00 PM': { subject: 'Software Engg', room: 'CS-401', type: 'Theory' },
      '04:00 PM': { subject: 'Research Work', room: 'CS-Research', type: 'Research' },
    },
    Friday: {
      '09:00 AM': { subject: 'Database Systems', room: 'CS-205', type: 'Theory' },
      '11:00 AM': { subject: 'Algorithm Analysis', room: 'CS-301', type: 'Theory' },
      '02:00 PM': { subject: 'Project Review', room: 'CS-Hall', type: 'Review' },
    },
  };

  const getClassColor = (type: string) => {
    switch (type) {
      case 'Theory': return 'bg-teal-100 text-teal-800 border-teal-200';
      case 'Practical': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Guidance': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Seminar': return 'bg-slate-100 text-slate-800 border-slate-200';
      case 'Research': return 'bg-red-100 text-red-800 border-red-200';
      case 'Review': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const handleDownload = (format: 'pdf' | 'csv') => {
    const fileName = `faculty_timetable.${format}`;
    alert(`Downloading ${fileName}...`);
  };

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-700">My Timetable</h1>
          <p className="text-slate-500 mt-2">Your complete weekly schedule</p>
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

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 w-24">Time</th>
              {days.map(day => (
                <th key={day} className="px-4 py-3 text-center text-sm font-semibold text-slate-700">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map(time => (
              <tr key={time} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-4 text-sm font-medium text-slate-700 bg-slate-50">{time}</td>
                {days.map(day => {
                  const classData = timetableData[day]?.[time]; 

                  return (
                    <td key={`${day}-${time}`} className="px-2 py-2 text-center">
                      {classData ? (
                        <div className={`p-3 rounded-lg border ${getClassColor(classData.type)} hover:shadow-md transition-shadow duration-200`}>
                          <div className="font-semibold text-xs">{classData.subject}</div>
                          <div className="text-xs mt-1">{classData.room}</div>
                          <div className="text-xs opacity-75 mt-1">{classData.type}</div>
                        </div>
                      ) : (
                        <div className="h-16 flex items-center justify-center text-slate-400">-</div>
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
  );
};

export default MyTimetable;
