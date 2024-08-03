import mongoose from "mongoose";
// import {User }from './user.model.js'
const tokenSchema = new mongoose.Schema({
  refreshToken: {
    type: String,
    required: true,
    unique: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', required: true
  }
}, { timestamps: true })

export const Token = mongoose.model('Token', tokenSchema)