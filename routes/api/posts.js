const router = require('express').Router();
const upload = require('../../middlewares/multer')

const {Post} = require('../../db')

router.get('/', async(req,res) => {
    let response = await Post.findAll();
    res.json(response)
})

router.get('/:id', async(req, res) => {
    id = req.params.id
    let response = await Post.findByPk(id);
    res.json(response)
})

router.post('/create', upload.single('Imagen'), async(req,res) =>{
    
    let response = await Post.create(req.body)
    res.json(response)
})

router.put('/modify/:id', async (req, res) => {
    await Post.update(req.body, {where : {id : req.params.id}})
    res.json({ succes: 'Se ha modificado correctamente'})
})

router.delete('/:id', async(req,res) => {
    await Post.destroy({
        where: {id : req.params.id}
    })
    res.json({ succes: 'Se ha borrado el Post'})
})

module.exports = router