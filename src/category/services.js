const model = require('./model')

module.exports = {
  findAll: req => {
    const { id, name } = req.query
    const where = {}
    if (id) where.id = id
    if (name) where.name = name
    return model.findAll({ where })
  },
}
