import { defaultTransformSchemaUtil } from "@/utils/index.js"
import mongoose from "mongoose"

const SkillSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
})

defaultTransformSchemaUtil(SkillSchema)
export const Skills = mongoose.model("Skill", SkillSchema)
