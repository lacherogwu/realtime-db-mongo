export default (socket, type, doc) => {
	switch (type) {
		case 'insert':
			socket.emit('chatMessage', doc);
			break;
		case 'delete':
			socket.emit('chatMessage-delete', doc);
			break;
		case 'update':
			socket.emit('chatMessage-update', doc);
			break;
	}
};
