require('dotenv').config()
const BeautyPref = require('../../models/beautypref')
const User = require('../../models/user')

const createBeautyPref = async (req, res, next) => {
    try {
      const createdBeautyPref = await BeautyPref.create(req.body)
      const user = await User.findOne({ email: res.locals.data.email })
      user.beautyPref.addToSet(createdBeautyPref)
      await user.save()
      res.locals.data.beautyPref = createdBeautyPref
      next()
    } catch (error) {
      res.status(400).json({ msg: error.message })
    }
  }

  const respondWithBeautyPref = (req, res) => {
    res.json(res.locals.data.beautyPref)
  }

  module.exports = {
     createBeautyPref,
    respondWithBeautyPref
  }