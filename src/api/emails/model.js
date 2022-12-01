import mongoose, { Schema } from 'mongoose'

const emailsSchema = new Schema({
  emailAddress: {
    type: String
  },
  note: {
    type: String
  },
  createdBy: {
    type: String
  },
  modifiedBy: {
    type: String
  },
  isDeleted: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

emailsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      emailAddress: this.emailAddress,
      note: this.note,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy,
      isDeleted: this.isDeleted,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Emails', emailsSchema)

export const schema = model.schema
export default model
