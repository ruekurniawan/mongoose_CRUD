const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
  memberId: {
    type: 'ObjectId',
    ref: 'Member'
  },
  in_date: {
    type: Date
  },
  out_date: {
    type: Date
  },
  due_date: {
    type: Date
  },
  fine: Number,
  booklist: [
    {
      type: 'ObjectId',
      ref: 'Book'
    }
  ]
})
// transactionSchema.post('save', function(next) {
//   console.log(this.in_date)
//   const inBook = this.in_date.getTime()
//   const dueBook = this.due_date.getTime()
//   const penalty = parseInt((inBook - dueBook) / (24 * 3600 * 1000))
//   console.log(inBook)
//   if(penalty > 0) {
//     this.fine = penalty * 1000
//   }
//   next()
// })
const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction