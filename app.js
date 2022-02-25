const express = require('express');
const app = express();
const sequelize = require('./database/db');
const Producto = require('./database/models/producto')
const cors = require('cors')
require('dotenv').config()


//Cors
app.use(cors());

// Setting
const PORT = process.env.PORT;

// Middleware
// Para poder rellenar el req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.get('/productos', async function(req, res) {
    try {
        const productos = await Producto.findAll();
        res.json(productos);
    } catch (err) {
        res.json(err);
    }
});

app.use('/api/posts', require('./routes/posts'));
app.use('/api/users', require('./routes/users'));
app.use('/api/navaroProyecto', require('./routes/users'));



// Arrancamos el servidor
app.listen(PORT, function() {
    console.log(`La app ha arranado en http://localhost:${PORT}`);
    // Conectase a la base de datos
    // Force true: DROP TABLES
    sequelize.sync({ force: false }).then(() => {
        console.log("Nos hemos conectado a la base de datos");
    }).catch(error => {
        console.log('Se ha producido un error', error);
    })
});