const services = require('./services')
const express = require('express')
const router = express.Router()

router.route('/').get((req, res, next) => {
  services
    .findAll(req)
    .then(r => res.json(r))
    .catch(next)
})

module.exports = router
