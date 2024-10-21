// models/User.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  phone: string;
  numberOfGuests: number;
  dateFrom: Date;
  dateTo: Date;
  additionalRequirements: string;
}

const userSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
  },
  numberOfGuests: {
    type: Number,
    required: [true, 'Number of guests is required'],
    min: [1, 'Number of guests must be at least 1'],
    max: [6, 'Number of guests cannot exceed 6'],
  },
  dateFrom: {
    type: Date,
    required: [true, 'Start date is required'],
  },
  dateTo: {
    type: Date,
    required: [true, 'End date is required'],
  },
  additionalRequirements: {
    type: String,
    required: false,
  },
});

const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
