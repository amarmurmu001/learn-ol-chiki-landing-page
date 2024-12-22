import React from 'react';
import { Shield, Lock, Eye, RefreshCw } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-white">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 font-ohno-softie">Privacy Policy</h1>
      <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
        We are committed to protecting your privacy and ensuring the security of your personal information.
      </p>

      {/* Key Points */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        <div className="bg-gray-50 p-8 rounded-2xl text-center">
          <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4 font-ohno-softie">Data Protection</h2>
          <p className="text-gray-600">
            Your data is protected using industry-standard security measures.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl text-center">
          <Lock className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4 font-ohno-softie">Secure Storage</h2>
          <p className="text-gray-600">
            All personal information is stored securely and encrypted.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl text-center">
          <Eye className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4 font-ohno-softie">Transparency</h2>
          <p className="text-gray-600">
            Clear information about how we collect and use your data.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl text-center">
          <RefreshCw className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4 font-ohno-softie">Your Control</h2>
          <p className="text-gray-600">
            You have full control over your personal data and preferences.
          </p>
        </div>
      </div>

      {/* Detailed Sections */}
      <div className="max-w-4xl mx-auto space-y-12">
        <section>
          <h2 className="text-3xl font-bold mb-6 font-ohno-softie">Information We Collect</h2>
          <div className="bg-gray-50 p-8 rounded-2xl space-y-4">
            <p className="text-gray-700">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Learning progress and preferences</li>
              <li>Communication data</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 font-ohno-softie">How We Use Your Information</h2>
          <div className="bg-gray-50 p-8 rounded-2xl space-y-4">
            <p className="text-gray-700">We use the collected information to:</p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Provide and improve our services</li>
              <li>Personalize your learning experience</li>
              <li>Send important updates and notifications</li>
              <li>Analyze and enhance our platform's performance</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 font-ohno-softie">Data Security</h2>
          <div className="bg-gray-50 p-8 rounded-2xl">
            <p className="text-gray-700">
              We implement appropriate technical and organizational measures to maintain the security of your personal information. This includes encryption, secure server storage, and regular security assessments.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 font-ohno-softie">Your Rights</h2>
          <div className="bg-gray-50 p-8 rounded-2xl space-y-4">
            <p className="text-gray-700">You have the right to:</p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Access your personal data</li>
              <li>Request corrections to your data</li>
              <li>Delete your account and associated data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold mb-6 font-ohno-softie">Questions?</h2>
        <p className="text-xl text-gray-600 mb-8">
          If you have any questions about our privacy policy, please contact us.
        </p>
        <a 
          href="mailto:privacy@olchiki.learn" 
          className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-colors inline-block"
        >
          Contact Privacy Team
        </a>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
