let socket = null;


export const connectSocket = (chatId, token, onMessage) => {
  const url = `ws://www.bidbaj.com/ws/chat/${chatId}/?token=${token}`;

  socket = new WebSocket(url);

  socket.onopen = () => {
    console.log("✅ Connected");
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log("📩 Received:", data);

    onMessage && onMessage(data);
  };

  socket.onerror = (err) => {
    console.error("❌ Error:", err);
  };

  socket.onclose = () => {
    console.log("🔌 Disconnected");
  };
};

export const sendSocketMessage = (payload) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(payload));
  } else {
    console.error("Socket not connected");
  }
};

export const closeSocket = () => {
  if (socket) socket.close();
};


