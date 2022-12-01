import mongoose, { Schema } from 'mongoose'

const phonesSchema = new Schema({
  phoneNumber: {
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

phonesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      phoneNumber: this.phoneNumber,
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

const model = mongoose.model('Phones', phonesSchema)

export const schema = model.schema
export default model
