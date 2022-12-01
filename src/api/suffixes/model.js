import mongoose, { Schema } from 'mongoose'

const suffixesSchema = new Schema({
  name: {
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

suffixesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
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

const model = mongoose.model('Suffixes', suffixesSchema)

export const schema = model.schema
export default model
