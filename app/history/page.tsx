import React from 'react';
import { Calendar, Users, BookOpen, Globe } from 'lucide-react';

const History = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-white">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 font-ohno-softie">History of Ol Chiki</h1>
      <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
        Discover the rich history and cultural significance of the Ol Chiki script, the official writing system of the Santali language.
      </p>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="space-y-12">
          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div className="w-0.5 h-full bg-blue-100 mt-4"></div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 font-ohno-softie">Creation (1925)</h2>
              <p className="text-gray-700">
                Ol Chiki script was created by Pandit Raghunath Murmu in 1925. The script was designed specifically for the Santali language, which previously had no written form.
              </p>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-4 rounded-full">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div className="w-0.5 h-full bg-green-100 mt-4"></div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 font-ohno-softie">Early Adoption (1930s-1940s)</h2>
              <p className="text-gray-700">
                The script gained popularity among the Santali community as it perfectly represented the phonemes of the Santali language. Educational materials began to be produced in Ol Chiki.
              </p>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-4 rounded-full">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <div className="w-0.5 h-full bg-purple-100 mt-4"></div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 font-ohno-softie">Official Recognition (2003)</h2>
              <p className="text-gray-700">
                Santali language, written in Ol Chiki script, was included in the Eighth Schedule of the Indian Constitution, giving it official recognition.
              </p>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-yellow-100 p-4 rounded-full">
                <Globe className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 font-ohno-softie">Modern Usage</h2>
              <p className="text-gray-700">
                Today, Ol Chiki is widely used in education, literature, and digital communication. It continues to play a vital role in preserving and promoting Santali culture and heritage.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cultural Significance */}
      <div className="bg-gray-50 p-8 rounded-2xl mb-20">
        <h2 className="text-3xl font-bold text-center mb-8 font-ohno-softie">Cultural Significance</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 mb-4">
            Ol Chiki script represents more than just a writing system - it's a symbol of Santali cultural identity and independence. The script was carefully designed to capture the unique sounds and expressions of the Santali language.
          </p>
          <p className="text-gray-700 mb-4">
            Each character in Ol Chiki has significance, often derived from natural shapes and objects familiar to Santali culture. This makes the script both practical and culturally meaningful.
          </p>
          <p className="text-gray-700">
            The creation and adoption of Ol Chiki has played a crucial role in preserving Santali literature, songs, and traditions for future generations.
          </p>
        </div>
      </div>

      {/* Legacy */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6 font-ohno-softie">Preserving Our Heritage</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          By learning and using Ol Chiki, you're helping to preserve and promote the rich cultural heritage of the Santali people.
        </p>
      </div>
    </div>
  );
};

export default History;