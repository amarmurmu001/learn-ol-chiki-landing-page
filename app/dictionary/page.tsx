import React from 'react';
import { Search, Book, History, Star } from 'lucide-react';

const Dictionary = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 font-ohno-softie">Ol Chiki Dictionary</h1>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Comprehensive dictionary for Ol Chiki script with translations, pronunciations, and usage examples.
        </p>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-20">
          <div className="relative">
            <input 
              type="text"
              placeholder="Search for words..."
              className="w-full p-4 pl-12 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gray-50 p-8 rounded-2xl text-center">
            <Book className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4 font-ohno-softie">Extensive Database</h2>
            <p className="text-gray-600">
              Access thousands of words with detailed meanings and usage examples.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl text-center">
            <History className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4 font-ohno-softie">Search History</h2>
            <p className="text-gray-600">
              Keep track of your recently searched words for quick reference.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl text-center">
            <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4 font-ohno-softie">Favorites</h2>
            <p className="text-gray-600">
              Save your frequently used words for easy access.
            </p>
          </div>
        </div>

        {/* Example Words */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-ohno-softie">Example Words</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">ᱚᱲᱟᱜ</h3>
                  <p className="text-lg text-gray-600">/oɽaɡ/</p>
                </div>
                <span className="text-gray-500">noun</span>
              </div>
              <p className="text-gray-700">Meaning: House, Home</p>
              <p className="text-gray-600 mt-2">Example: ᱚᱲᱟᱜ ᱫᱚ ᱢᱟᱨᱟᱝ ᱜᱮᱭᱟ</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">ᱥᱮᱛᱟ</h3>
                  <p className="text-lg text-gray-600">/seta/</p>
                </div>
                <span className="text-gray-500">noun</span>
              </div>
              <p className="text-gray-700">Meaning: Morning</p>
              <p className="text-gray-600 mt-2">Example: ᱥᱮᱛᱟ ᱨᱮ ᱧᱮᱞᱟᱢ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dictionary; 