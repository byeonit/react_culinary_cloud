import React from 'react';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
        
        <div className="prose prose-orange max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies</h2>
            <p className="text-gray-700 mb-4">
              Cookies are small text files stored on your device when you visit our website. They help us provide and improve our services by remembering your preferences and analyzing how you use our site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Essential Cookies</h3>
                <p className="text-gray-700">Required for basic site functionality and security. Cannot be disabled.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Preference Cookies</h3>
                <p className="text-gray-700">Remember your settings and preferences for a better experience.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Analytics Cookies</h3>
                <p className="text-gray-700">Help us understand how visitors interact with our website.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Managing Cookies</h2>
            <p className="text-gray-700 mb-4">
              You can control cookies through your browser settings. Note that disabling certain cookies may limit your access to some features.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Cookies</h2>
            <p className="text-gray-700 mb-4">
              Some third-party services may place cookies on your device. These cookies are governed by the respective providers' policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Updates to This Policy</h2>
            <p className="text-gray-700">
              We may update this Cookie Policy periodically. Please check back regularly for any changes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}