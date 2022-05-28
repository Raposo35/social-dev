import mongoose from 'mongoose'; // os dados que serão criados no banco

import User from '../user/user.model';

const PostSchema = new mongoose.Schema({
	text: { type: String, required: true, maxlength: 256 },
	createdDate: { type: Date, required: true },
	createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.models.Post || mongoose.model('Post', PostSchema);
