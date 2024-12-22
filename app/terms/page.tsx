import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-white max-w-4xl mx-auto p-8 md:p-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms and Conditions</h1>
      
      <section className="space-y-6">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700">
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">2. Use License</h2>
          <p className="text-gray-700">
            Permission is granted to temporarily download one copy of the materials (information or software) on this website for personal, non-commercial transitory viewing only.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">3. Disclaimer</h2>
          <p className="text-gray-700">
            The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">4. Limitations</h2>
          <p className="text-gray-700">
            In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">5. Revisions and Errata</h2>
          <p className="text-gray-700">
            The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete, or current.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">6. Links</h2>
          <p className="text-gray-700">
            We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">7. Modifications</h2>
          <p className="text-gray-700">
            We may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </div>
      </section>

      <div className="mt-12 text-gray-600 text-sm">
        Last updated: {new Date().toLocaleDateString()}
      </div>
    </div>
  );
};

export default TermsAndConditions; 