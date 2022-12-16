const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
  alt_address_city: {
    type: String
  },
  alt_address_country: {
    type: String
  },
  alt_address_postalcode: {
    type: String
  },
  alt_address_state: {
    type: String
  },
  alt_address_street: {
    type: String
  },
  alt_address_street_2: {
    type: String
  },
  birthdate: {
    type: String
  },
  child_1_birthdate: {
    type: String
  },
  child_1_name: {
    type: String
  },
  child_2_birthdate: {
    type: String
  },
  child_2_name: {
    type: String
  },
  child_3_birthdate: {
    type: String
  },
  child_3_name: {
    type: String
  },
  child_4_birthdate: {
    type: String
  },
  child_4_name: {
    type: String
  },
  child_5_birthdate: {
    type: String
  },
  child_5_name: {
    type: String
  },
  child_6_birthdate: {
    type: String
  },
  child_6_name: {
    type: String
  },
  company: {
    type: String
  },
  date_entered: {
    type: String
  },
  date_modified: {
    type: String
  },
  deleted: {
    type: String
  },
  department: {
    type: String
  },
  description: {
    type: String
  },
  email1: {
    type: String
  },
  email2: {
    type: String
  },
  first_name: {
    type: String
  },
  fkq_holiday_card_lists: {
    type: String
  },
  hire_date: {
    type: String
  },
  id: {
    type: String
  },
  last_name: {
    type: String
  },
  mailing_label_home: {
    type: String
  },
  mailing_label_office: {
    type: String
  },
  marital_status: {
    type: String
  },
  marriage_date: {
    type: String
  },
  phone_fax: {
    type: String
  },
  phone_home: {
    type: String
  },
  phone_mobile: {
    type: String
  },
  phone_other: {
    type: String
  },
  phone_work: {
    type: String
  },
  primary_address_city: {
    type: String
  },
  primary_address_country: {
    type: String
  },
  primary_address_postalcode: {
    type: String
  },
  primary_address_state: {
    type: String
  },
  primary_address_street: {
    type: String
  },
  primary_address_street_2: {
    type: String
  },
  salutation: {
    type: String
  },
  spouse_birthdate: {
    type: String
  },
  spouse_name: {
    type: String
  },
  title: {
    type: String
  },
  vip_card_lists: {
    type: String
  }
}, {
  timestamps: true
});
contactSchema.methods = {
  view: function (full) {
    const view = {
      // simple view
      id: this.id,
      alt_address_city: this.alt_address_city,
      alt_address_country: this.alt_address_country,
      alt_address_postalcode: this.alt_address_postalcode,
      alt_address_state: this.alt_address_state,
      alt_address_street: this.alt_address_street,
      alt_address_street_2: this.alt_address_street_2,
      birthdate: this.birthdate,
      child_1_birthdate: this.child_1_birthdate,
      child_1_name: this.child_1_name,
      child_2_birthdate: this.child_2_birthdate,
      child_2_name: this.child_2_name,
      child_3_birthdate: this.child_3_birthdate,
      child_3_name: this.child_3_name,
      child_4_birthdate: this.child_4_birthdate,
      child_4_name: this.child_4_name,
      child_5_birthdate: this.child_5_birthdate,
      child_5_name: this.child_5_name,
      child_6_birthdate: this.child_6_birthdate,
      child_6_name: this.child_6_name,
      company: this.company,
      date_entered: this.date_entered,
      date_modified: this.date_modified,
      deleted: this.deleted,
      department: this.department,
      description: this.description,
      email1: this.email1,
      email2: this.email2,
      first_name: this.first_name,
      fkq_holiday_card_lists: this.fkq_holiday_card_lists,
      hire_date: this.hire_date,
      last_name: this.last_name,
      mailing_label_home: this.mailing_label_home,
      mailing_label_office: this.mailing_label_office,
      marital_status: this.marital_status,
      marriage_date: this.marriage_date,
      phone_fax: this.phone_fax,
      phone_home: this.phone_home,
      phone_mobile: this.phone_mobile,
      phone_other: this.phone_other,
      phone_work: this.phone_work,
      primary_address_city: this.primary_address_city,
      primary_address_country: this.primary_address_country,
      primary_address_postalcode: this.primary_address_postalcode,
      primary_address_state: this.primary_address_state,
      primary_address_street: this.primary_address_street,
      primary_address_street_2: this.primary_address_street_2,
      salutation: this.salutation,
      spouse_birthdate: this.spouse_birthdate,
      spouse_name: this.spouse_name,
      title: this.title,
      vip_card_lists: this.vip_card_lists,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

module.exports = mongoose.model('contacts', contactSchema)