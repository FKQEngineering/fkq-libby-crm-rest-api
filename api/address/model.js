import mongoose, { Schema } from 'mongoose'

const addressSchema = new Schema({
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
  createddate: {
    type: String
  },
  createdBy: {
    type: String
  },
  modificedDate: {
    type: String
  },
  modifiedBy: {
    type: String
  },
  isDeleted: {
    type: String
  },
  deleteComment: {
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

addressSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      street1: this.street1,
      street2: this.street2,
      city: this.city,
      state: this.state,
      zip: this.zip,
      country: this.country,
      note: this.note,
      createddate: this.createddate,
      createdBy: this.createdBy,
      modificedDate: this.modificedDate,
      modifiedBy: this.modifiedBy,
      isDeleted: this.isDeleted,
      deleteComment: this.deleteComment,
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

const model = mongoose.model('Address', addressSchema)

export const schema = model.schema
export default model
