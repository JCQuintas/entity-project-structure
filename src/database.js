module.exports = {
  name: 'book_library',
  username: 'postgres',
  password: 'postgres',
  options: {
    dialect: 'postgres',
    port: 5432,
    logging: false,
    define: {
      underscored: true,
    },
    pool: {
      max: 20,
      min: 2,
      idle: 30000,
      maxIdleTime: 30000,
      acquire: 60000,
    },
  },
}
