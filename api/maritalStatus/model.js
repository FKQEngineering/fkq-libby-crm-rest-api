import mongoose, { Schema } from 'mongoose'

const maritalStatusSchema = new Schema({
  name: {
    type: String
  },
  createddate: {
    type: Date
  },
  createdBy: {
    type: String
  },
  modifiedDate: {
    type: Date
  },
  modifiedby: {
    type: String
  },
  isDeleted: {
    type: Boolean
  },
  deleteComment: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

maritalStatusSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
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

const model = mongoose.model('MaritalStatus', maritalStatusSchema)

export const schema = model.schema
export default model
