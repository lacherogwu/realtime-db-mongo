import chatMessages from './chatMessages.js';
import users from './users.js';

const handlers = {
	'chat-messages': chatMessages,
	// users: users,
};

export default (event, socket) => {
	const {
		fullDocument: doc,
		ns: { coll },
		operationType: type,
		documentKey: { _id },
		updateDescription,
	} = event;

	const handler = handlers[coll];
	if (!handler) return;

	console.log(event);
	handlers[coll](socket, type, { ...doc, _id, updateDescription });
};
