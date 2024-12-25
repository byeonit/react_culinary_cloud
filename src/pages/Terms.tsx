import React from 'react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Use</h1>
        
        <div className="prose prose-orange max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using CulinaryCloud, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. User Accounts</h2>
            <p className="text-gray-700 mb-4">
              When you create an account with us, you must provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account and password.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Content Guidelines</h2>
            <p className="text-gray-700 mb-4">
              Users may post recipes, comments, and other content. You retain ownership of your content, but grant CulinaryCloud a license to use, modify, and display it on our platform.
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Content must be original or properly attributed</li>
              <li>No inappropriate or offensive content</li>
              <li>No spam or promotional content without approval</li>
              <li>No copyright infringement</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Subscription Terms</h2>
            <p className="text-gray-700 mb-4">
              Premium features require a paid subscription. Subscriptions automatically renew unless cancelled. Refunds are handled according to our refund policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Privacy</h2>
            <p className="text-gray-700 mb-4">
              Your use of CulinaryCloud is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Modifications</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions about these Terms of Use, please contact us at support@culinarycloud.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}