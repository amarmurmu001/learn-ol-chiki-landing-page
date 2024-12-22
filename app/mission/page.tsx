import React from 'react';
import { Target, Globe, BookOpen, Users } from 'lucide-react';

const Mission = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 font-ohno-softie">Our Mission</h1>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          We are dedicated to preserving and promoting the Ol Chiki script and Santali language through accessible education and digital innovation.
        </p>

        {/* Vision Statement */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <Target className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6 font-ohno-softie">Our Vision</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            To create a world where every Santali person can read, write, and express themselves in their native script, 
            and where Ol Chiki becomes a bridge connecting generations while preserving cultural identity in the digital age.
          </p>
        </div>

        {/* Core Values */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 font-ohno-softie">Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4 font-ohno-softie">Accessibility</h3>
              <p className="text-gray-600">
                Making Ol Chiki learning resources available to everyone, regardless of location or background.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4 font-ohno-softie">Innovation</h3>
              <p className="text-gray-600">
                Leveraging technology to create engaging and effective learning experiences.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4 font-ohno-softie">Community</h3>
              <p className="text-gray-600">
                Building a supportive network of learners, educators, and cultural advocates.
              </p>
            </div>
          </div>
        </div>

        {/* Key Objectives */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 font-ohno-softie">Our Objectives</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl flex items-center gap-6">
              <div className="bg-blue-100 p-4 rounded-xl">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 font-ohno-softie">Digital Preservation</h3>
                <p className="text-gray-600">
                  Creating digital tools and resources to ensure Ol Chiki thrives in the modern world.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl flex items-center gap-6">
              <div className="bg-green-100 p-4 rounded-xl">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 font-ohno-softie">Education</h3>
                <p className="text-gray-600">
                  Developing comprehensive learning materials and interactive courses.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl flex items-center gap-6">
              <div className="bg-purple-100 p-4 rounded-xl">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 font-ohno-softie">Community Building</h3>
                <p className="text-gray-600">
                  Fostering connections between learners and native speakers worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-ohno-softie">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
              <p className="text-gray-600">Active Learners</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
              <p className="text-gray-600">Communities Reached</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">5K+</div>
              <p className="text-gray-600">Resources Created</p>
            </div>
          </div>
          <p className="text-xl text-gray-600">
            Join us in our mission to preserve and promote the Ol Chiki script for future generations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;