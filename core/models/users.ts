import mongoose, { Document, Model } from 'mongoose'
import { Schema } from 'mongoose'

export interface IUser extends Document {
  id: string
  login: string
  password: string
  email: string
}

const userSchema = new Schema(
  {
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
  },
  { timestamps: true },
)

const User =
  (mongoose.models.User as Model<IUser>) ||
  mongoose.model<IUser>('User', userSchema)
export default User

/*const User = mongoose.model('User', userSchema, 'users')
export default User*/
