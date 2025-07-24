// models/Assignment.ts
import mongoose, { Document, Schema } from "mongoose"

interface AssignmentDocument extends Document {
  engineerId: mongoose.Schema.Types.ObjectId
  projectId: mongoose.Schema.Types.ObjectId
  allocationPercentage: number
  startDate: Date
  endDate: Date
}

const AssignmentSchema = new Schema<AssignmentDocument>({
  engineerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  projectId: {
    type: Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  allocationPercentage: { type: Number, required: true, min: 0, max: 100 },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
})

export default mongoose.model<AssignmentDocument>(
  "Assignment",
  AssignmentSchema
)
