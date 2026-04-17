import { FaChevronUp } from "react-icons/fa";

const OfferBidModal = ({
  show,
  offer,
  setOffer,
  onClose,
  onSend,
  disabled = false
}) => {
  if (!show || disabled) return null;

  return (
    <div className="p-4 mt-auto border-t border-gray-700 bg-gray-800/50">

      <div className="bg-gray-800 rounded-xl p-3">

        <h3 className="text-white font-medium mb-2">
          Enter Your Offer
        </h3>

        <div className="flex gap-2">

          {/* INPUT */}
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              $
            </span>

            <input
              type="number"
              placeholder="0.00"
              value={offer}
              onChange={(e) => setOffer(e.target.value)}
              className="w-full bg-gray-700 text-white rounded-full pl-8 pr-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* SEND */}
          <button
            onClick={onSend}
            className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
          >
            Send
          </button>

        </div>

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="mt-2 text-gray-400 text-sm flex items-center gap-1 mx-auto"
        >
          <FaChevronUp /> collapse
        </button>

      </div>
    </div>
  );
};

export default OfferBidModal;