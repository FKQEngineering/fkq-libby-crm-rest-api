import mongoose, { Schema } from 'mongoose'

const testSchema = new Schema({
  id: {
    type: String
  },
  name: {
    type: String
  },
  title: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

testSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      id: this.id,
      name: this.name,
      title: this.title,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Test', testSchema)

export const schema = model.schema
export default model
