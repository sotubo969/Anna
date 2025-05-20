import React from 'react';
import { BookOpen, Award, Brain, CheckCircle } from 'lucide-react';

const ExamWishes: React.FC = () => {
  return (
    <section id="exam" className="section bg-birthday-pink-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-birthday-pink-100 rounded-full opacity-50"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-birthday-pink-100 rounded-full opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 animate-on-scroll">
          <div className="text-center mb-8">
            <div className="inline-block bg-birthday-gold-100 p-4 rounded-full mb-4">
              <BookOpen className="h-12 w-12 text-birthday-gold-600" />
            </div>
            <h2 className="title text-birthday-pink-700 mb-4">Good Luck on Your Exam!</h2>
            <p className="subtitle text-gray-600">
              Wishing you success on your Business Paper 2 exam tomorrow!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center text-center animate-on-scroll">
              <Brain className="h-10 w-10 text-birthday-pink-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Sharp Mind</h3>
              <p className="text-gray-600 text-sm">Your preparation and hard work will shine through. Trust your knowledge!</p>
            </div>
            
            <div className="flex flex-col items-center text-center animate-on-scroll">
              <CheckCircle className="h-10 w-10 text-birthday-pink-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Clear Focus</h3>
              <p className="text-gray-600 text-sm">Stay calm and focused. You've got this! One question at a time.</p>
            </div>
            
            <div className="flex flex-col items-center text-center animate-on-scroll">
              <Award className="h-10 w-10 text-birthday-pink-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Great Success</h3>
              <p className="text-gray-600 text-sm">I believe in you! Your hard work will pay off with excellent results.</p>
            </div>
          </div>
          
          <div className="bg-birthday-gold-50 p-6 rounded-xl border border-birthday-gold-200 animate-on-scroll">
            <p className="text-center text-lg font-script text-gray-700">
              "Even on your birthday, you're showing dedication and commitment. That's what makes you so special, Annabelle! I know you'll ace this exam and then we can celebrate both your birthday and your success!"
            </p>
          </div>
          
          <div className="mt-8 text-center animate-on-scroll">
            <button className="btn-primary">
              You'll Do Amazing!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamWishes;