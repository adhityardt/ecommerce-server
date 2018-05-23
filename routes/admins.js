var express = require('express')
var router = express.Router()

const { registerAdmin, deleteUserById, loginAdmin } = require('../controllers/admin.controller')

/* GET users listing. */
// router.post('/login', loginUser)

router.post('/login', loginAdmin)
router.post('/register', registerAdmin)
router.delete('/:id', deleteUserById)

module.exports = router
