import mongoose from 'mongoose';

const modelSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		// unique: true,
		lowecase: true,
	},
	username: {
		type: String,
		required: true,
		// unique: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 6,
	},
});

const Model = mongoose.model('user', modelSchema);

export default Model;
