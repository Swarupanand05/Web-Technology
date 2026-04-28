const WebSocket = require("ws");

// Create WebSocket server
const wss = new WebSocket.Server({ port: 3000 });

console.log("WebSocket server running on ws://localhost:3000");

// When client connects
wss.on("connection", (ws) => {
    console.log(" Client connected");

    // Receive message from client
    ws.on("message", (message) => {
        console.log(" Received:", message.toString());

        // Send response back
        ws.send("Server received: " + message);
    });

    // On disconnect
    ws.on("close", () => {
        console.log(" Client disconnected");
    });
});

