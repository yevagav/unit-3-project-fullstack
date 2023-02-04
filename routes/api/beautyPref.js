const router = require('express').Router()
const beautyPrefCtrl = require('../../controllers/api/beautyPref')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')
/*
POST
create beautyPref
api/beautypref
*/ 
router.post('/', checkToken, ensureLoggedIn, beautyPrefCtrl.createBeautyPref, beautyPrefCtrl.respondWithBeautyPref)

module.exports = router 