const Sequelize = require('sequelize');
const sequelize = new Sequelize('dsxgHJR9KA','dsxgHJR9KA','aqIKyQj4Ii', {
    host: 'remotemysql.com',
    dialect: 'mysql',
})

const PostModel = require('./models/posts')

const Post = PostModel(sequelize, Sequelize);


sequelize.sync({ force: false}).then(() => {
    console.log('Tablas sincronizadas')
})

module.exports = {
    Post
}