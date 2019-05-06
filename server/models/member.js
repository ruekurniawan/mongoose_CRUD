const mongoose = require('mongoose')
const Schema = mongoose.Schema

const memberSchema = new Schema({
  name: {
    type: String,
    required: [true, `Name is required`]
  },
  address: {
    type: String,
    required: [true, 'Address is required']
  },
  zipcode: {
    type: String,
    required: [true, 'Zip Code is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Email format is invalid'],
    validate: {
      validator(value) {
        return Member.findOne({
          email: value,
          _id: { $ne: this._id}
        })
        .then(member => {
          if(member) {
            throw `Email has been used`
          }
        })
        .catch(err => {
          throw err
        })
      }
    }
  },
  phone: {
    type: String,
    required: [true, `Phone is required`],
    maxlength: 13,
    minlength: 10
  }
})

const Member = mongoose.model('Member', memberSchema)

module.exports = Member