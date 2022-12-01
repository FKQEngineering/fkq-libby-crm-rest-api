import mongoose, { Schema } from 'mongoose'

const contactsSchema = new Schema({
  firstName: {
    type: String
  },
  middleName: {
    type: String
  },
  lastName: {
    type: String
  },
  title: {
    type: String
  },
  department: {
    type: String
  },
  hireDate: {
    type: String
  },
  note: {
    type: String
  },
  imageUrl: {
    type: String
  },
  defaultMailingAddress: {
    type: String
  },
  createdBy: {
    type: String
  },
  modifiedBy: {
    type: String
  },
  isHidden: {
    type: String
  },
  isDeleted: {
    type: String
  },
  defaultEmailAddress: {
    type: String
  },
  defaultPhoneNumber: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

contactsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName,
      title: this.title,
      department: this.department,
      hireDate: this.hireDate,
      note: this.note,
      imageUrl: this.imageUrl,
      defaultMailingAddress: this.defaultMailingAddress,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy,
      isHidden: this.isHidden,
      isDeleted: this.isDeleted,
      defaultEmailAddress: this.defaultEmailAddress,
      defaultPhoneNumber: this.defaultPhoneNumber,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Contacts', contactsSchema)

export const schema = model.schema
export default model
