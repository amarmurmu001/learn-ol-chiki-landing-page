import React from 'react';

const DataPolicy = () => {
  return (
    <div className="bg-white max-w-4xl mx-auto p-8 md:p-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Data Policy</h1>
      
      <section className="space-y-6">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="text-gray-700">
            We collect information you provide directly to us, including but not limited to:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-2">
            <li>Personal identification information (Name, email address, etc.)</li>
            <li>Usage data and preferences</li>
            <li>Communication data between you and our services</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700">
            We use the information we collect to:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Process your transactions</li>
            <li>Send you technical notices and support messages</li>
            <li>Communicate with you about products, services, and events</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">3. Information Sharing and Disclosure</h2>
          <p className="text-gray-700">
            We do not sell or rent your personal information to third parties. We may share your information in the following circumstances:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-2">
            <li>With your consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and prevent fraud</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">4. Data Security</h2>
          <p className="text-gray-700">
            We implement appropriate technical and organizational measures to maintain the security of your personal information, including encryption and secure server storage.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">5. Your Rights</h2>
          <p className="text-gray-700">
            You have the right to:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Data portability</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">6. Cookies and Tracking</h2>
          <p className="text-gray-700">
            We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">7. Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update our Data Policy from time to time. We will notify you of any changes by posting the new Data Policy on this page and updating the "Last updated" date.
          </p>
        </div>
      </section>

      <div className="mt-12 text-gray-600 text-sm">
        Last updated: {new Date().toLocaleDateString()}
      </div>
    </div>
  );
};

export default DataPolicy; 