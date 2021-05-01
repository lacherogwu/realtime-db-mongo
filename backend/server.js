import app from './app.js';
import initDb from './db/index.js';
import { Server } from 'socket.io';
import initSockets from './sockets/index.js';

// connect to db
const dbURI = 'mongodb://localhost:27017/app';
const db = await initDb(dbURI);

// start server
const server = app.listen(3000, () => console.log(`listening at ${3000}`));

// setup sockets
const io = new Server(server, { cors: true });
initSockets(db, io);
