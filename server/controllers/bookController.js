const Book = require('../models/book')
class BookController {
  static create(req, res) {
    let newBook = {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    }
    Book
      .create(newBook)
      .then(book => {
        res.status(201).json({
          book,
          message: `Success Create`
        })
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static findAll(req, res) {
    Book
      .find()
      .then(allBook => {
        res.status(200).json(allBook)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static findOne(req, res) {
    let search = {
      _id: req.params.id
    }
    Book
      .findOne(search)
      .then(getData => {
        res.status(200).json(getData)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static update(req, res) {
    let id = {
      _id: req.params.id
    }
    let newBook = {
      stock: req.body.stock
    }
    Book
      .findByIdAndUpdate(id, newBook)
      .then(updatedBook => {
        res.status(200).json(updatedBook)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static remove(req, res) {
    let id = {
      _id: req.params.id
    }
    Book
      .findByIdAndDelete(id)
      .then(deleteBook => {
        res.status(200).json(deleteBook)
      })
      .catch(err => {
        res.status(500).json(er)
      })
  }
}

module.exports = BookController