import React from 'react';
import { Users, MessageCircle, Share2, Calendar } from 'lucide-react';

const Community = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 font-ohno-softie">Join Our Community</h1>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Connect with fellow learners, share your progress, and participate in events to enhance your Ol Chiki learning journey.
        </p>

        {/* Community Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-gray-50 p-8 rounded-2xl text-center">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4 font-ohno-softie">Study Groups</h2>
            <p className="text-gray-600">
              Join or create study groups to learn together and support each other.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl text-center">
            <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4 font-ohno-softie">Discussion Forums</h2>
            <p className="text-gray-600">
              Engage in discussions about Ol Chiki and Santali culture.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl text-center">
            <Share2 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4 font-ohno-softie">Resource Sharing</h2>
            <p className="text-gray-600">
              Share and access learning materials created by the community.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl text-center">
            <Calendar className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4 font-ohno-softie">Events</h2>
            <p className="text-gray-600">
              Participate in online events, workshops, and cultural celebrations.
            </p>
          </div>
        </div>

        {/* Featured Groups */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 font-ohno-softie">Featured Study Groups</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 font-ohno-softie">Beginners Circle</h3>
              <p className="text-gray-600 mb-4">For those just starting their Ol Chiki journey.</p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100"></div>
                  <div className="w-8 h-8 rounded-full bg-green-100"></div>
                  <div className="w-8 h-8 rounded-full bg-yellow-100"></div>
                </div>
                <span className="text-gray-500">50+ members</span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 font-ohno-softie">Practice Partners</h3>
              <p className="text-gray-600 mb-4">Find partners for regular practice sessions.</p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  <div className="w-8 h-8 rounded-full bg-purple-100"></div>
                  <div className="w-8 h-8 rounded-full bg-pink-100"></div>
                  <div className="w-8 h-8 rounded-full bg-indigo-100"></div>
                </div>
                <span className="text-gray-500">35+ members</span>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 font-ohno-softie">Upcoming Events</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl flex items-center gap-6">
              <div className="bg-blue-100 p-4 rounded-xl text-center min-w-[80px]">
                <div className="text-xl font-bold text-blue-600">15</div>
                <div className="text-sm text-blue-600">Jan</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 font-ohno-softie">Beginner&apos;s Workshop</h3>
                <p className="text-gray-600">Introduction to Ol Chiki script and basic writing practice.</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl flex items-center gap-6">
              <div className="bg-green-100 p-4 rounded-xl text-center min-w-[80px]">
                <div className="text-xl font-bold text-green-600">22</div>
                <div className="text-sm text-green-600">Jan</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 font-ohno-softie">Cultural Exchange</h3>
                <p className="text-gray-600">Share and learn about Santali traditions and stories.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Join CTA */}
        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-colors">
            Join Our Community
          </button>
          <p className="mt-4 text-gray-600">
            Connect with over 1,000+ learners worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;