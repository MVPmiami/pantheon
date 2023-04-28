import mongoose from 'mongoose';
import { Schema } from 'mongoose';
const userSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    login: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
}, { timestamps: true });
const User = mongoose.models.User ||
    mongoose.model('User', userSchema);
export default User;
/*const User = mongoose.model('User', userSchema, 'users')
export default User*/
