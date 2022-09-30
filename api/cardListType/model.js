import mongoose, { Schema } from 'mongoose'

const cardListTypeSchema = new Schema({
  name: {
    type: String
  },
  createDate: {
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

cardListTypeSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      createDate: this.createDate,
      createdBy: this.createdBy,
      modifiedDate: this.modifiedDate,
      modifiedby: this.modifiedby,
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

const model = mongoose.model('CardListType', cardListTypeSchema)

export const schema = model.schema
export default model
