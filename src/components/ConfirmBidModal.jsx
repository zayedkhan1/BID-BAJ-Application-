const ConfirmBidModal = ({
  show,
  offer,
  onConfirm,
  onCancel,
}) => {
  if (!show) return null;

  return (
    
    <div className="fixed inset-0 bg-black/60 z-50 p-4 flex justify-center items-start">
  
  <div className="bg-gray-800 rounded-2xl max-w-sm w-full p-6 shadow-xl border border-gray-700 
                  transform transition-all duration-300 translate-y-0 animate-slideDown">

    <h3 className="text-xl font-semibold text-white mb-2">
      Confirm Your Bid
    </h3>

    <p className="text-gray-300 mb-4">
      You are bidding:{" "}
      <span className="text-green-400 font-bold">${offer}</span>
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
        Confirm Bid
      </button>
    </div>

  </div>
</div>
  );
};

export default ConfirmBidModal;