import mongoose from 'mongoose';

const modelSchema = new mongoose.Schema({
	createdAt: {
		type: Date,
		required: true,
		default: Date.now(),
	},
	by: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: true,
	},
});

const Model = mongoose.model('chat-message', modelSchema);

export default Model;
