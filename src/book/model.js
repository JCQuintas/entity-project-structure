const Sequelize = require('sequelize')

module.exports = class Book extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        author: {
          type: Sequelize.STRING,
        },
        pages: {
          type: Sequelize.INTEGER,
        },
      },
      {
        sequelize,
        tableName: 'books',
        name: {
          singular: 'book',
          plural: 'books',
        },
      }
    )
  }

  static associate(Category) {
    this.belongsTo(Category, { foreignKey: 'category_id' })
  }
}
