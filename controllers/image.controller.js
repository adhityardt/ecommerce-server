const Image = require('../models/image.model')

module.exports = {
  saveNewImage(req, res) {
    let image = new Image(req.body)
    console.log(req.body, 'ini req body ==============================')
    
    image.url     = req.file.cloudStoragePublicUrl
    image.like    = 0

    image
      .save()
      .then(result => {
        res.status(200).json({
          message: 'success save new image',
          result
        })
      })
      .catch(error => {
        console.log(error)
        res.status(400).json({
          error
        })
      })
  },

  getAllImage(req, res) {
    Video.find({})
      .then(result => {
        res.status(200).json({
          message: 'success get all videos',
          result
        })
      })
      .catch(error => {
        res.status(error.status).json({
          error
        })
      })
  },

  updateImageById(req, res) {
    Video.findByIdAndUpdate(req.params.id, req.body)
      .then(result => {
        res.status(200).json({
          message: 'success update video',
          result
        })
      })
      .catch(error => {
        res.status(error.status).json({
          error
        })
      })
  },

  deleteImageById(req, res) {
    Video.findByIdAndRemove(req.params.id)
      .then(result => {
        res.status(200).json({
          message: 'success delete video',
          result
        })
      })
      .catch(error => {
        res.status(error.status).json({
          error
        })
      })
  }
}