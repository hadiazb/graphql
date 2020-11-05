import { Schema, model } from 'mongoose';

const userSchema = new Schema({
	nickname: {
		type: String,
		required: true,
	},
	fullname: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: false,
	},
	city: {
		type: String,
		required: false,
	},
});

export default model('User', userSchema);
