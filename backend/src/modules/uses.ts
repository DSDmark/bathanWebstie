import mongoose, { Document, Schema } from "mongoose"

export interface IUser extends Document {
  name: string
  email: string
  password: string
  role: "manager" | "engineer"
  skills: string[]
  seniority: "junior" | "mid" | "senior"
  employmentType: "full-time" | "part-time"
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["manager", "engineer"], required: true },
  skills: { type: [String], default: [] },
  seniority: { type: String, enum: ["junior", "mid", "senior"] },
  employmentType: {
    type: String,
    enum: ["full-time", "part-time"],
    required: true,
  },
})

export const User = mongoose.model<IUser>("User", UserSchema)
