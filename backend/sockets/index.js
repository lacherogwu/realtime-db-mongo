import handleEvents from './dbEvents/index.js';
let sockets = [];

export default (db, io) => {
	// watch on db change
	const watch = db.connection.watch();

	watch.on('change', change => sockets.forEach(socket => handleEvents(change, socket)));

	io.on('connection', socket => {
		console.log(`new connection - ${socket.id}`);
		sockets.push(socket);

		socket.on('disconnect', () => (sockets = sockets.filter(i => i.id !== socket.id)));
	});
};
