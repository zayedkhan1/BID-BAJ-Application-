import { useState } from "react";

const TermsAndConditions = () => {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setShowTerms(true)}
        className="text-blue-500 hover:underline mx-1"
      >
        Terms of Service
      </button>

      {/* Modal */}
      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg max-w-lg w-full p-6 relative">

            {/* Close Button */}
            <button
              onClick={() => setShowTerms(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Terms & Conditions
            </h2>

            {/* Content */}
            <div className="text-sm text-gray-600 dark:text-gray-300 max-h-64 overflow-y-auto space-y-3">
              <p>
                By using this application, you agree to comply with all
                applicable laws and regulations.
              </p>
              <p>
                You are responsible for maintaining the confidentiality of
                your account and activities.
              </p>
              <p>
                We reserve the right to modify or terminate services at any
                time without notice.
              </p>
              <p>
                Any misuse, abuse, or illegal activity may result in account
                suspension.
              </p>
            </div>

            {/* Footer */}
            <div className="mt-6 text-right">
              <button
                onClick={() => setShowTerms(false)}
                className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-sm"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TermsAndConditions;
