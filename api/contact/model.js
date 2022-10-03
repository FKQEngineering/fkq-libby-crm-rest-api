import mongoose, { Schema } from 'mongoose'

const contactSchema = new Schema({
  firstName: {
    type: String
  },
  middleName: {
    type: String
  },
  lastName: {
    type: String
  },
  hireDate: {
    type: Date
  },
  title: {
    type: String
  },
  company: {
    type: String
  },
  department: {
    type: String
  },
  notes: {
    type: String
  },
  gender:{
    type:String
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
    type: Boolean
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

contactSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName,
      hireDate: this.hireDate,
      title: this.title,
      company: this.company,
      department: this.department,
      notes: this.notes,
      gender:this.gender,
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

const model = mongoose.model('Contact', contactSchema)

export const schema = model.schema
export default model
