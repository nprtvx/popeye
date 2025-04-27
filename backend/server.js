const http = require('http');
const io = require('socket.io');

const server = http.createServer();
const socketServer = io(server, {
  cors: { origin: '*', methods: ['GET', 'POST'] },
});

socketServer.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('signal', (data) => {
    socket.broadcast.emit('signal', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(3000, () => console.log('Server running on http://localhost:3000'));
