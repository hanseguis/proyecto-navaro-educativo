const express = require('express');
const router = express.Router();
const User = require('../database/models/Users');
const bcryptjs = require('bcryptjs');

// INDEX /api/users
router.get('/', (req, res) => {
    User.findAll().then(users => {
        res.json(users);
    })
})

//CREATE/api/users
router.post('/', (req, res) => {
    user = User.create({
        username: req.body.username,
        //password: req.body.password
        password: bcryptjs.hashSync(req.body.password.toString(), 8),

    }).then(() => {
        res.json({
            "Message": "usuario creado."
        });
    }).catch(err => {
        res.json({
            "Message": "usuario no creado.",
            "Error": err
        });
    });
});


{
    /*// CREATE
    //router.post('/', (req, res) => {
    // post = Post.create(req.body).then(function(post) {
    //     res.json({
    //         "Message": "Escribe el correo.",
    //         "Post": post
    //     });
    // }).catch(function(err) {
    //     res.json({
    //         "Message": ".",
    //         "Error": err.parent.sqlMessage
    //     });
    //  });
    //});*/
}


// READ  /api/users/:id
router.get('/:id', (req, res) => {
    user = User.findByPk(req.params.id).then(post => {
        res.json(post);
    })
});

//UPDATE 
router.patch('/:id', (req, res) => {
    user = User.update({
        id: req.body.id,
        username: req.body.mame,
        password: req.body.password
    }, {
        where: {
            id: req.params.id
        }

    }).then(result => {
        res.json(result);
    });
});

// UPDATE /api/users/:id
router.put('/:id', (req, res) => {
    user = User.update(req.body).then(function(post) {
        res.json({
            "Message": "Producto Editado.",
            "User": post
        });
    }).catch(function(err) {
        res.json({
            "Message": "no sea actualizado.",
            "Error": err.message.sqlMessage
        });
    });
});

//DELETE  /api/users/:id
//router.delete('/:id', (req, res) => {
//   post = Post.destroy({
//      where: {
//          id: req.params.id
//     }
//  }).then(result => {
//      res.json(result);
//  }).catch(function(err) {
//      res.json({
//          "Message": "no el correo sea actualizado.",
//          "Error": err.message.sqlMessage
//      });
//  });
//});

// DELETE  /api/users/:id
router.delete('/:id', (req, res) => {
    user = User.destroy(req.body).then(function(post) {
        res.json({
            "Message": "usuario Eliminado.",
            "User": post
        });
    }).catch(function(err) {
        res.json({
            "Message": "no sea eliminado, revice los datos .",
            "Error": err.message.sqlMessage
        });
    });
});





module.exports = router;