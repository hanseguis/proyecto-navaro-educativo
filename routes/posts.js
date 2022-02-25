const express = require('express');
const router = express.Router();
const Post = require('../database/models/producto');


// INDEX /api/posts
router.get('/', (req, res) => {
    Post.findAll().then(posts => {
        res.json(posts);
    })
})

// CREATE
router.post('/', (req, res) => {
    post = Post.create(req.body).then(function(post) {
        res.json({
            "Message": "Producto creado.",
            "Post": post
        });
    }).catch(function(err) {
        res.json({
            "Message": "Producto no creado.",
            "Error": err.parent.sqlMessage
        });
    });
});

// READ /api/posts/:id
router.get('/:id', (req, res) => {
    post = Post.findByPk(req.params.id).then(post => {
        res.json(post);
    })
});

//UPDATE 
// router.put('/:id', (req, res) => {
//     post = Post.update({
//         id: req.body.id,
//         articulo: req.body.articulo,
//         descripcion: req.body.descripcionid,
//         cantidad: req.body.cantidad,
//         precio: req.body.precio,
//         estado: req.body.estado,
//         fecha: req.body.fecha
//     }, {
//         where: {
//             id: req.params.id
//         }

//     }).then(result => {
//         res.json(result);
//     });
// });


//UPDATE /api/posts/:id
router.put('/:id', (req, res) => {
    const post = Post.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(function(post) {
        if (post[0] == 0) {
            res.json({
                "Message": "Producto no editado.",
                "Post": post
            });
        } else {
            res.json({
                "Message": "Producto Editado.",
                "Post": post
            });
        }
    }).catch(function(err) {
        res.json({
            "Message": "no sea actualizado.",
            "Error": err
        });
    });
});

//DELETE /api/posts/:id
router.delete('/:id', (req, res) => {
    post = Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    }).catch(function(err) {
        res.json({
            "Message": "no sea actualizado.",
            "Error": err.message.sqlMessage
        });
    });
});


// DELETE /api/posts/:id
router.delete('/:id', (req, res) => {
    post = Post.destroy(req.body).then(function(post) {
        res.json({
            "Message": "Producto Eliminado.",
            "Post": post
        });
    }).catch(function(err) {
        res.json({
            "Message": "no sea eliminado, revice los datos .",
            "Error": err.message.sqlMessage
        });
    });
});

module.exports = router;