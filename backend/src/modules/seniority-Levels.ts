import { defaultTransformSchemaUtil } from "@/utils/index.js"
import mongoose from "mongoose"

const SeniorityLevelsSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
})

defaultTransformSchemaUtil(SeniorityLevelsSchema)
export const SeniorityLevels = mongoose.model(
  "seniorityLevel",
  SeniorityLevelsSchema
)
