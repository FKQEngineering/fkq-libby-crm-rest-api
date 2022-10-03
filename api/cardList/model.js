import mongoose, { Schema } from 'mongoose'

const cardListSchema = new Schema({
  name: {
    type: String
  },
  quantity: {
    type: String
  },
  cardListType: {
    type: String
  },
  cardListTypeId: {
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

cardListSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      quantity: this.quantity,
      cardListType: this.cardListType,
      cardListTypeId: this.cardListTypeId,
      createDate: this.createDate,
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

const model = mongoose.model('CardList', cardListSchema)

export const schema = model.schema
export default model
