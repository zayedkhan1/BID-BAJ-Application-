// import { FaPaperPlane, FaImage } from "react-icons/fa";

// const InputChatModal = ({
//   messageInput,
//   setMessageInput,
//   handleSend,
//   selectedFiles,

//   removeImage,
//     handleFileChange,
//   fileInputRef,
//  disabled = false
// }) => {
//   return (
//     <div className="p-2 md:p-3 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700">
      
//       {/* ✅ File Preview */}
//       {selectedFiles.length > 0 && (
//         <div className="flex gap-2 mb-2 overflow-x-auto pb-2">
//           {selectedFiles.map((item, index) => (
//             <div key={index} className="relative flex-shrink-0">
//               <img
//                 src={item.preview}
//                 className="w-14 h-14 rounded-lg object-cover"
//                 alt="preview"
//               />
//               <button
//                 onClick={() => removeImage(index)}
//                 className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center"
//               >
//                 ✕
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* ✅ Input + Buttons */}
//       <div className="flex items-center gap-2">
        
//         {/* Upload Button */}
//         <button
//           onClick={() => fileInputRef.current.click()}
//           className="text-gray-400 hover:text-green-400 transition p-2"
//         >
//           <FaImage size={22} />
//         </button>

//         {/* Hidden Input */}
//         <input
//           type="file"
//           multiple
//           ref={fileInputRef}
//           onChange={handleFileChange}
//           className="hidden"
//         />

//         {/* Message Input */}
//         <input
//           value={messageInput}
//           onChange={(e) => setMessageInput(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               e.preventDefault();
//               handleSend();
//             }
//           }}
//           className="flex-1 bg-gray-700 text-white rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 text-sm"
//           placeholder="Type a message..."
//         />

//         {/* Send Button */}
//         <button
//           onClick={handleSend}
//           className="bg-green-600 hover:bg-green-700 text-white rounded-full p-2 transition-all shadow-lg"
//         >
//           <FaPaperPlane size={18} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default InputChatModal;

import { FaImage, FaPaperPlane } from "react-icons/fa";

const InputChatModal = ({
  messageInput,
  setMessageInput,
  handleSend,
  selectedFiles,
  removeImage,
  handleFileChange,
  fileInputRef,
  disabled = false
}) => {
  return (
    <div className="p-2 md:p-3 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700">

      {/* IMAGE PREVIEW */}
      {selectedFiles?.length > 0 && (
        <div className="flex gap-2 mb-2 overflow-x-auto pb-2">
          {selectedFiles.map((item, index) => (
            <div key={index} className="relative flex-shrink-0">
              <img
                src={item.preview}
                className="w-14 h-14 rounded-lg object-cover"
                alt="preview"
              />
              <button
                onClick={() => removeImage(index)}
                className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {/* INPUT ROW */}
      <div className="flex items-center gap-2">

        {/* IMAGE BUTTON */}
        <button
          onClick={() => fileInputRef.current.click()}
          className="text-gray-400 hover:text-green-400 transition p-2"
          disabled={disabled}
        >
          <FaImage size={22} />
        </button>

        <input
          type="file"
          multiple
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />

        {/* TEXT INPUT */}
        <input
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSend();
            }
          }}
          className="flex-1 bg-gray-700 text-white rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 text-sm"
          placeholder="Type a message..."
          disabled={disabled}
        />

        {/* SEND BUTTON */}
        <button
          onClick={handleSend}
          className="bg-green-600 hover:bg-green-700 text-white rounded-full p-2 transition-all shadow-lg"
          disabled={disabled}
        >
          <FaPaperPlane size={18} />
        </button>

      </div>
    </div>
  );
};

export default InputChatModal ;