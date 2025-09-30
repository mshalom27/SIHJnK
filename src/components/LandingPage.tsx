import React from 'react';
import { BookOpen, Target, Users, CheckCircle, ArrowRight } from 'lucide-react';
import type { UserRole } from '../App';

interface LandingPageProps {
  onRoleSelect: (role: UserRole) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onRoleSelect }) => {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-teal-600" />,
      title: "Smart Timetable Generation",
      description: "Conflict-free scheduling with optimal resource allocation"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-teal-600" />,
      title: "NEP 2020 Compliant",
      description: "Supports Major/Minor/Electives structure with flexible credit systems"
    },
    {
      icon: <Users className="w-8 h-8 text-teal-600" />,
      title: "Faculty Workload Management",
      description: "Efficient scheduling for teaching practices and workload optimization"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-teal-600" />,
      title: "Digital Attendance Tracking",
      description: "QR & biometric attendance with real-time analytics and reports"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-700">EduSync</span>
            </div>
          </div>
        </div>
      </nav>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-slate-700 mb-6 leading-tight">
            AI Based Timetable Generation &<br />
            <span className="text-teal-600">Smart Attendance System</span><br />
            for NEP 2020
          </h1>
          <p className="text-xl text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed">
            Streamlined, conflict-free timetables and digital QR-based attendance tracking 
            for higher education institutions. Designed for modern academic excellence.
          </p>
          

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <button
              onClick={() => onRoleSelect('faculty')}
              className="bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-blue-900 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Users className="w-5 h-5" />
              <span>Login as Faculty</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onRoleSelect('student')}
              className="bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <BookOpen className="w-5 h-5" />
              <span>Login as Student</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-slate-200"
            >
              <div className="mb-6 p-3 bg-teal-50 rounded-xl w-fit">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-700 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>


        <div className="mt-20 bg-white rounded-3xl shadow-xl p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">99.9%</div>
              <div className="text-slate-500">Conflict-Free Scheduling</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-800 mb-2">Conflict-Free</div>
              <div className="text-slate-500">Scheduling Guaranteed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">24/7</div>
              <div className="text-slate-500">System Availability</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;