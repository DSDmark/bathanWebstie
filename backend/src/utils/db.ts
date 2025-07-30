import mongoose from "mongoose"

export const defaultTransformSchemaUtil = (schema: mongoose.Schema) => {
  schema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: (_, ret) => {
      ret.id = ret._id
      delete ret._id
      delete ret.createdAt
      delete ret.updatedAt
      delete ret.password
      delete ret.modifiedOn
    },
  })
}
