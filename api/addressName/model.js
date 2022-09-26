import mongoose, { Schema } from 'mongoose'

const addressNameSchema = new Schema({
  name: {
    type: String
  },
  createddate: {
    type: String
  },
  createdBy: {
    type: String
  },
  modifiedDate: {
    type: String
  },
  modifiedby: {
    type: String
  },
  isDeleted: {
    type: String
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

addressNameSchema.methods = {
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

const model = mongoose.model('AddressName', addressNameSchema)

export const schema = model.schema
export default model
