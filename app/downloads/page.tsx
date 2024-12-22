import React from 'react';
import { Smartphone, Monitor, FileText, Keyboard } from 'lucide-react';

const Downloads = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 font-ohno-softie">Downloads</h1>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Access tools and resources to enhance your Ol Chiki learning experience across all your devices.
        </p>

        {/* Mobile Apps */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 font-ohno-softie">Mobile Apps</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <Smartphone className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold font-ohno-softie">Android App</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Learn Ol Chiki on the go with our feature-rich Android application.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-bold hover:bg-blue-700 transition-colors w-full">
                Download for Android
              </button>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <Smartphone className="w-8 h-8 text-gray-600" />
                <h3 className="text-2xl font-bold font-ohno-softie">iOS App</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Coming soon to the Apple App Store. Join the waitlist to be notified.
              </p>
              <button className="bg-gray-600 text-white px-6 py-3 rounded-xl text-lg font-bold hover:bg-gray-700 transition-colors w-full">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Resources */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 font-ohno-softie">Desktop Resources</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl flex items-center gap-6">
              <div className="bg-green-100 p-4 rounded-xl">
                <Keyboard className="w-8 h-8 text-green-600" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2 font-ohno-softie">Ol Chiki Keyboard Layout</h3>
                <p className="text-gray-600">Install the Ol Chiki keyboard layout for Windows and macOS.</p>
              </div>
              <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition-colors">
                Download
              </button>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl flex items-center gap-6">
              <div className="bg-purple-100 p-4 rounded-xl">
                <Monitor className="w-8 h-8 text-purple-600" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2 font-ohno-softie">Font Package</h3>
                <p className="text-gray-600">Download Ol Chiki fonts optimized for digital display.</p>
              </div>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-purple-700 transition-colors">
                Download
              </button>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl flex items-center gap-6">
              <div className="bg-yellow-100 p-4 rounded-xl">
                <FileText className="w-8 h-8 text-yellow-600" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2 font-ohno-softie">Learning Materials</h3>
                <p className="text-gray-600">PDF workbooks and practice sheets for offline learning.</p>
              </div>
              <button className="bg-yellow-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-yellow-700 transition-colors">
                Download
              </button>
            </div>
          </div>
        </div>

        {/* Installation Guide */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-ohno-softie">Need Help?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Check out our installation guides and documentation for step-by-step instructions.
          </p>
          <button className="bg-gray-200 text-gray-800 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-300 transition-colors">
            View Installation Guide
          </button>
        </div>
      </div>
    </div>
  );
};

export default Downloads; 