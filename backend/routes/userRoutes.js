const express = require('express')

const router = express.Router()

router.post('login', loginController)
router.post('singin', singinController)
router.put('', updateController)
router.delete('', updateController)
router.get('', getUserController)

module.exports = router
