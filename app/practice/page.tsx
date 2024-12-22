import React from 'react';
import { PenTool, Keyboard, Volume2, Brain } from 'lucide-react';

const Practice = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 font-ohno-softie">Practice Exercises</h1>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Master Ol Chiki script through our comprehensive set of interactive exercises and challenges.
        </p>

        {/* Exercise Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-gray-50 p-8 rounded-2xl text-center">
            <PenTool className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4 font-ohno-softie">Writing</h2>
            <p className="text-gray-600">
              Practice writing Ol Chiki characters with stroke order guidance.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl text-center">
            <Keyboard className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4 font-ohno-softie">Typing</h2>
            <p className="text-gray-600">
              Learn to type in Ol Chiki with keyboard exercises.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl text-center">
            <Volume2 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4 font-ohno-softie">Pronunciation</h2>
            <p className="text-gray-600">
              Practice correct pronunciation with audio guidance.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl text-center">
            <Brain className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4 font-ohno-softie">Memory</h2>
            <p className="text-gray-600">
              Strengthen your memory with flashcards and quizzes.
            </p>
          </div>
        </div>

        {/* Practice Levels */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 font-ohno-softie">Practice Levels</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-6">
                <div className="bg-blue-100 p-4 rounded-full min-w-[4rem] text-center">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-ohno-softie">Beginner</h3>
                  <p className="text-gray-600">Basic character recognition and writing practice.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-6">
                <div className="bg-green-100 p-4 rounded-full min-w-[4rem] text-center">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-ohno-softie">Intermediate</h3>
                  <p className="text-gray-600">Word formation and simple sentence construction.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-6">
                <div className="bg-purple-100 p-4 rounded-full min-w-[4rem] text-center">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-ohno-softie">Advanced</h3>
                  <p className="text-gray-600">Complex sentences and advanced writing exercises.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Start Practice CTA */}
        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-colors">
            Start Practicing
          </button>
          <p className="mt-4 text-gray-600">
            Track your progress and earn achievements as you practice
          </p>
        </div>
      </div>
    </div>
  );
};

export default Practice;