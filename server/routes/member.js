const router = require('express').Router()
const Member = require('../controllers/memberController')

router.post('/', Member.create)
router.get('/', Member.findAll)
router.get('/:id', Member.findOne)
router.put('/:id', Member.update)
router.delete('/:id', Member.remove)

module.exports = router