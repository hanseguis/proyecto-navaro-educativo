const express = require('express');
const router = express.Router();
const NavaroProyecto = require('../database/models/navaroProyecto');



// INDEX /api/users
router.get('/', (req, res) => {
    NavaroProyecto.findAll().then(navaroProyecto => {
        res.json(navaroProyecto);
    })
})

// CREATE
router.post('/', (req, res) => {
    navaroProyecto = NavaroProyecto.create(req.body).then(function(post) {
        res.json({
            "Message": "usuario creado.",
            "NavaroProyecto": post
        });
    }).catch(function(err) {
        res.json({
            "Message": "usuario no creado.",
            "Error": err
        });
    });
});

// READ /api/Users/:id
router.get('/:id', (req, res) => {
    navaroProyecto = NavaroProyecto.findByPk(req.params.id).then(navaroProyecto => {
        res.json(navaroProyecto);
    })
});

//UPDATE 
router.patch('/:id', (req, res) => {
    navaroProyecto = NavaroProyecto.update({
        id: req.body.id,
        proyecto: req.body.articulo,
        contratista: req.body.descripcionid,
        contrato: req.body.cantidad,
        contratista: req.body.precio,
        monto: req.body.estado,
        anticipo: req.body.fecha,
        capitalNeto: req.body.cantidad,
        estado: req.body.precio,
        monto: req.body.estado,
        capitalNeto: req.body.cantidad,
        fechaInicial: req.body.precio,
        fechaFinal: req.body.estado
    }, {
        where: {
            id: req.params.id
        }

    }).then(result => {
        res.json(result);
    });
});

{
    /*// UPDATE /api/Users/:id
    //router.put('/:id', (req, res) => {
    //  User = NavaroProyecto.update(req.body).then(function(navaroProyecto) {
    //     res.json({
    //         "Message": "Producto Editado.",
    //         "NavaroProyecto": navaroProyecto
    //     });
    // }).catch(function(err) {
    //     res.json({
    //         "Message": "no sea actualizado.",
    //         "Error": err.message.sqlMessage
    //     });
    //  });
    //});*/
}

//DELETE /api/Users/:id
router.delete('/:id', (req, res) => {
    navaroProyecto = NavaroProyecto.destroy({
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

// DELETE /api/Users/:id
router.delete('/:id', (req, res) => {
    navaroProyecto = NavaroProyecto.destroy(req.body).then(function(User) {
        res.json({
            "Message": "usuario Eliminado.",
            "NavaroProyecto": User
        });
    }).catch(function(err) {
        res.json({
            "Message": "no sea eliminado, revice los datos .",
            "Error": err.message.sqlMessage
        });
    });
});

module.exports = router;