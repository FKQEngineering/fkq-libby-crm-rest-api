import mongoose, { Schema } from 'mongoose'

const eventDateSchema = new Schema({
  dateValue: {
    type: Date
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

eventDateSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      dateValue: this.dateValue,
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

const model = mongoose.model('EventDate', eventDateSchema)

export const schema = model.schema
export default model
