const userModel = require('../models/userModels')

exports.getAllUsers = (req,res)=>{
    userModel.find()
    .then(users =>res.status(201).json(users))
    .catch(err =>res.status(500).json({message:'An error has ocurred', err}))
}

exports.getUser = (req,res) =>{
    const {id} = req.params
    userModel.findById(id)
    .then(user =>res.status(201).json(user))
    .catch(err =>res.status(500).json({message:'An error has ocurred', err}))
}

exports.deleteUser = (req, res) => {
    const { id } = req.params
    userModel.findByIdAndDelete(id)
      .then(user => {
        if (!user) throw new Error(`user with id ${id} not found`)
        res.status(404).json({ message: 'user deleted' })
      })
      .catch(err =>
        res.status(500).json({ message: 'An error has ocurred.', err })
      )
}

exports.updateUser = (req, res) => {
    const { id } = req.params
    const {userName,password,email,phoneNo} =req.body
    userModel
      .findByIdAndUpdate(id, { userName, email, password, phoneNo }, { new: true })//metodo mongose
      .then(user => {
        if (!user) throw new Error(`user with id ${id} not found`)
        res.status(200).json(user)
      })
      .catch(err =>
        res.status(500).json({ message: 'An error has ocurred.', err })
      )
  }

exports.createUser  = (req,res)=>{
    const {userName,password,email,phoneNo} =req.body
    const newUser = new userModel({
        userName, 
        password,
        email,
        phoneNo
    })
    newUser.save()
    .then(()=>res.status(201).json({success:"created"}))
    .catch(err => res.status(500).json({message:'An error has ocurred.', err}))
}