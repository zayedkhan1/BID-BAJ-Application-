import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div
        className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin"
        style={{ borderColor: "#769A7F", borderTopColor: "transparent" }}
      ></div>
    </div>
  );
};

export default Loading;