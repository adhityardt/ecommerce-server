const express = require('express')
const router = express.Router()
const { saveNewImage, getAllImage, updateImageById, deleteImageById  } = require('../controllers/image.controller')
//const {} = require('../middlewares')
const { multer, sendUploadToGCS } = require('../helpers/image.helper')

// video itu nama field yang mau d pakai AKA req.body.video
router.post('/', multer.single('image'), sendUploadToGCS, saveNewImage)
router.get('/', getAllImage)
router.put('/:id', updateImageById)
router.delete('/:id', deleteImageById)

module.exports = router