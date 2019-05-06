const router = require('express').Router()
const Transaction = require('../controllers/transactionController')

router.post('/', Transaction.create)
router.get('/', Transaction.findAll)
router.put('/:id', Transaction.update)
router.delete('/:id', Transaction.remove)

module.exports = router