const mongoose = require('mongoose')

let adminSchema = mongoose.Schema({
  fullname: String,
  username: String,
  password: String
}, {
  timestamps: true
})

let admin = mongoose.model('Admin', adminSchema)

module.exports = admin
