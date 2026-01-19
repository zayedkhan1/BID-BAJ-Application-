import { useState } from "react";

const PrivacyPolicy = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      {/* Privacy Policy Link */}
      <button
        onClick={() => setShowPrivacy(true)}
        className="text-blue-500 hover:underline mx-1"
      >
        Privacy Policy
      </button>

      {/* Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl max-w-lg w-full p-6 relative">

            {/* Close Button */}
            <button
              onClick={() => setShowPrivacy(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Privacy Policy
            </h2>

            {/* Content */}
            <div className="text-sm text-gray-600 dark:text-gray-300 max-h-64 overflow-y-auto space-y-3">
              <p>
                Your privacy is important to us. This Privacy Policy explains
                how we collect, use, and protect your information.
              </p>
              <p>
                We collect personal data only when necessary to provide our
                services and improve user experience.
              </p>
              <p>
                Your data is never sold or shared with third parties without
                your consent, except when required by law.
              </p>
              <p>
                We use industry-standard security measures to protect your
                information.
              </p>
              <p>
                By using this application, you agree to this Privacy Policy.
              </p>
            </div>

            {/* Footer */}
            <div className="mt-6 text-right">
              <button
                onClick={() => setShowPrivacy(false)}
                className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PrivacyPolicy;
