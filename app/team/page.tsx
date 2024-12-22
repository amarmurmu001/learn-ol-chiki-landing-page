import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Team = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 font-ohno-softie">Our Team</h1>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Meet the passionate individuals dedicated to preserving and promoting the Ol Chiki script.
        </p>

        {/* Core Team */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 font-ohno-softie">Core Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold mb-2 font-ohno-softie">Amit Kumar</h3>
              <p className="text-gray-600 mb-4">Founder & Lead Developer</p>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold mb-2 font-ohno-softie">Priya Singh</h3>
              <p className="text-gray-600 mb-4">Language Expert</p>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold mb-2 font-ohno-softie">Rajesh Murmu</h3>
              <p className="text-gray-600 mb-4">Cultural Advisor</p>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contributors */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 font-ohno-softie">Contributors</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-bold mb-1 font-ohno-softie">Contributor {i}</h3>
                <p className="text-gray-600 text-sm">Community Member</p>
              </div>
            ))}
          </div>
        </div>

        {/* Join the Team */}
        <div className="max-w-4xl mx-auto text-center bg-gray-50 p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6 font-ohno-softie">Join Our Team</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're always looking for passionate individuals to join our mission of preserving and promoting Ol Chiki.
          </p>
          <div className="space-y-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-colors">
              View Open Positions
            </button>
            <p className="text-gray-500">
              or email us at <a href="mailto:careers@olchiki.learn" className="text-blue-600 hover:underline">careers@olchiki.learn</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;