const Member = require('../models/member')

class MemberController {
  static create(req, res) {
    let newMember = {
      name: req.body.name,
      address: req.body.address,
      zipcode: req.body.zipcode,
      email: req.body.email,
      phone: req.body.phone
    }
    Member
      .create(newMember)
      .then(member => {
        res.status(201).json({
          member,
          message: `Success Create`
        })
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static findAll(req, res) {
    Member
      .find()
      .then(allMember => {
        res.status(200).json(allMember)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static findOne(req, res) {
    let search = {
      _id: req.params.id
    }
    Member
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
    let newMember = req.body
    Member
      .findByIdAndUpdate(id, newMember)
      .then(updatedMember => {
        res.status(200).json(updatedMember)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static remove(req, res) {
    let id = {
      _id: req.params.id
    }
    Member
      .findByIdAndDelete(id)
      .then(deleteMember => {
        res.status(200).json(deleteMember)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}

module.exports = MemberController