const router = require('express').Router()

const apiPosts = require('./api/posts')

router.use('/posts', apiPosts)

module.exports = router