import express from 'express';
import User from './models/User.js';
import ChatMessage from './models/ChatMessage.js';

const app = express();

// md
app.use((req, res, next) => {
	console.log('logging');
	next();
});

app.get('/', async (req, res) => {
	const { email, username, password, text } = req.query;

	// await User.deleteMany({});
	// await User.create({ email, username, password }).catch(() => {});
	await ChatMessage.create({ by: username, text }).catch(() => {});

	// const users = await User.find();
	const chatMessages = await ChatMessage.find();

	res.json({ success: true, message: 'Application is running', chatMessages });
});

export default app;
