const mongoose = require('mongoose')

const imageSchema = mongoose.Schema({
  title: String,
  url: String,
  description: String,
  like: Number,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {
  timestamps: true
})

const Image = mongoose.model('Image', imageSchema)

module.exports = Image