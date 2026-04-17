const ConfirmAcceptModal = ({
  show,
  onConfirm,
  onCancel,
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-2xl max-w-sm w-full p-6 shadow-xl border border-gray-700">
        
        <h3 className="text-xl font-semibold text-white mb-2">
          Confirm Accept Bid
        </h3>

        <p className="text-gray-300 mb-6">
          Are you sure you want to accept this bid?
        </p>

        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-2 rounded-full bg-gray-700 text-white"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 py-2 rounded-full bg-green-600 text-white"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAcceptModal;