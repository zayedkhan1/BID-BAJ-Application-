const ImagePreviewModal = ({ previewImage, setPreviewImage }) => {
  if (!previewImage) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={() => setPreviewImage(null)}
    >
      <div className="relative max-w-3xl w-full">

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setPreviewImage(null)}
          className="absolute -top-10 right-0 text-white text-2xl"
        >
          ✕
        </button>

        {/* IMAGE */}
        <img
          src={previewImage}
          alt="preview"
          className="w-full max-h-[80vh] object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default ImagePreviewModal;