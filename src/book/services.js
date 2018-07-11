const model = require('./model')

module.exports = {
  findAll: req => {
    const { id, title, author, category_id, pages } = req.query
    const where = {}
    if (id) where.id = id
    if (title) where.title = title
    if (author) where.author = author
    if (category_id) where.category_id = category_id
    if (pages) where.pages = pages
    return model.findAll({ where })
  },
}
