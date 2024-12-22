import React from 'react';
import { BookOpen, PlayCircle, CheckCircle2, Trophy } from 'lucide-react';

const Features = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 font-ohno-softie">Interactive Lessons</h1>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Learn Ol Chiki script through our engaging and interactive lessons designed for learners of all levels.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Lesson Types */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4 font-ohno-softie">Structured Learning</h2>
            <p className="text-gray-600">
              Progressive lessons that take you from basic characters to advanced writing skills.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <PlayCircle className="w-12 h-12 text-green-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4 font-ohno-softie">Interactive Exercises</h2>
            <p className="text-gray-600">
              Practice writing and recognition through interactive exercises with instant feedback.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <CheckCircle2 className="w-12 h-12 text-purple-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4 font-ohno-softie">Progress Tracking</h2>
            <p className="text-gray-600">
              Track your learning progress and review completed lessons at any time.
            </p>
          </div>
        </div>

        {/* Lesson Modules */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 font-ohno-softie">Learning Modules</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl flex items-center gap-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <span className="text-2xl">ᱚ</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 font-ohno-softie">Basic Characters</h3>
                <p className="text-gray-600">Learn the fundamental characters of Ol Chiki script.</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl flex items-center gap-6">
              <div className="bg-green-100 p-4 rounded-full">
                <span className="text-2xl">ᱛᱮ</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 font-ohno-softie">Word Formation</h3>
                <p className="text-gray-600">Learn how to combine characters to form words.</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl flex items-center gap-6">
              <div className="bg-purple-100 p-4 rounded-full">
                <span className="text-2xl">ᱢᱮᱱᱟ</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 font-ohno-softie">Sentence Structure</h3>
                <p className="text-gray-600">Master forming complete sentences in Ol Chiki.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Section */}
        <div className="mt-20 text-center">
          <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4 font-ohno-softie">Track Your Progress</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Earn achievements and track your learning journey as you master the Ol Chiki script.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features; 