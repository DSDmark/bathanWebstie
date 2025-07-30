import { ROLES } from "@/constants/common.js"
import { defaultTransformSchemaUtil } from "@/utils/index.js"
import mongoose, { Schema } from "mongoose"

const BaseUserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true },
    contact: { type: Number },
    department: { type: String },
    description: { type: String },
    password: String,
    skills: [
      {
        type: String,
        ref: "Skill",
      },
    ],
    role: {
      type: String,
      enum: Object.values(ROLES).map((i) => i),
      required: true,
    },
    seniority: {
      type: String,
      enum: ["junior", "mid", "senior"],
    },
    employmentType: {
      type: String,
      enum: ["full-time", "part-time"],
    },
  },
  { discriminatorKey: "role", timestamps: true }
)

defaultTransformSchemaUtil(BaseUserSchema)
export const User = mongoose.model("User", BaseUserSchema)
