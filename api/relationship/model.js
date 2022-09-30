import mongoose, { Schema } from 'mongoose'

const relationshipSchema = new Schema({}, { timestamps: true })

relationshipSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      createddate: this.createddate,
      createdBy: this.createdBy,
      modifiedDate: this.modifiedDate,
      modifiedBy: this.modifiedBy,
      isDeleted: this.isDeleted,
      deleteComment: this.deleteComment,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Relationship', relationshipSchema)

export const schema = model.schema
export default model
