const Transaction = require('../models/transaction')
const Book = require('../models/book')
const Member = require('../models/member')

class TransactionController {
  static create(req, res) {
    let newTransaction = {
      memberId: req.body.memberId,
      out_date: req.body.out_date,
      due_date: req.body.due_date,
      booklist: req.body.booklist
    }
    Transaction
      .create(newTransaction)
      .then(transaction => {
        res.status(201).json(transaction)
      })
      .catch(err => {
        // console.log(err);
        res.status(500).json(err)
      })
  }

  static findAll(req, res) {
    Transaction
      .find()
      .populate('memberId')
      .populate('booklist')
      .then(books => {
        res.status(200).json(books)
      })
      .catch(err => {
        
        res.status(500).json(err)
      })
  }

  static update(req, res) {
    let id = {
      _id: req.params.id
    }
    let updateTransaction = req.body
    Transaction
      .findByIdAndUpdate(id, updateTransaction)
      .then(updatedTransaction => {
        return Transaction.findById(id)
      })
      .then(newData => {
        let inDate = newData.in_date.getTime()
        let dueDate = newData.due_date.getTime()
        let penalty = parseInt(inDate - dueDate) / (24 * 3600 * 1000)
        if(penalty > 0) {
          Transaction.fine = penalty * 1000
          let fine = {
            fine: Transaction.fine
          }
          return Transaction.findByIdAndUpdate(id, fine)
        }
      })
      .then(newUpdate => {
        res.status(200).json(newUpdate)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static remove(req, res) {
    let id = {
      _id: req.params.id
    }
    Transaction
      .findByIdAndDelete(id)
      .then(deleteTransaction => {
        res.status(200).json(deleteTransaction)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}
module.exports = TransactionController