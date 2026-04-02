
// ============== Chat.jsx Time function ===========
export const formatChatTime = (timestamp) => {
  if (!timestamp) return "";

  const date = new Date(timestamp);

  const datePart = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const timePart = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return `${datePart}, ${timePart}`;
};



// =============== Message.jsx Date function ============

export const formatMessageDate = (timestamp) => {
  if (!timestamp) return "";

  return new Date(timestamp).toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
};



// =============== Message.jsx Time functoin ==============
export const formatMessageTime = (timestamp) => {
  if (!timestamp) return "";

  return new Date(timestamp).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

// =============== ApprisalsUserInfo.jsx Date function ==============

export const formatApprisalUserInfoDate = (timestamp) => {
  if (!timestamp) return "";

  return new Date(timestamp).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
