const router = require('express').Router()
const Book = require('../routes/book')
const Member = require('../routes/member')
const Transaction = require('../routes/transaction')

router.use('/book', Book)
router.use('/member', Member)
router.use('/transaction', Transaction)

module.exports = router