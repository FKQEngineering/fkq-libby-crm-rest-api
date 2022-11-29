import mongoose, { Schema } from 'mongoose'

const addressesSchema = new Schema({
  name: {
    type: String
  },
  street1: {
    type: String
  },
  street2: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  zip: {
    type: String
  },
  country: {
    type: String
  },
  note: {
    type: String
  },
  iDeleted: {
    type: String
  },
  isDefault: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

addressesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      street1: this.street1,
      street2: this.street2,
      city: this.city,
      state: this.state,
      zip: this.zip,
      country: this.country,
      note: this.note,
      createdDate: this.createdDate,
      CreatedBy: this.CreatedBy,
      modifieddate: this.modifieddate,
      iDeleted: this.iDeleted,
      isDefault: this.isDefault,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Addresses', addressesSchema)

export const schema = model.schema
export default model
