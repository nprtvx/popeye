const http = require('http');
const io = require('socket.io');

// Create an HTTP server
const server = http.createServer();
const socketServer = io(server, {
  cors: {
    origin: '*', // Allow connections from any origin
    methods: ['GET', 'POST'],
  },
});

// Handle WebSocket connections
socketServer.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Relay signaling data between peers
  socket.on('signal', (data) => {
    console.log('Signal received:', data);
    socket.broadcast.emit('signal', data); // Send to all other connected clients
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
  });
});

// Start the server on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Signaling server is running at http://localhost:${PORT}`);
});
