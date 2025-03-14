const express = require('express');
const morgan = require("morgan")
const app = express();
const pokemon = require('./routes/pokemon')

/*
 GET - Obtener recursos
 POST - almacenar/crear recursos
 PATCH - modificar una parte de un recurso
 PUT - modificar un recurso
 DELETE - borrar un recurso
*/
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res, next) => {
    return res.status(200).send("Bienvenido al pokedex")
});

app.use("/pokemon", pokemon);

app.listen(process.env.PORT || 3000, () =>{
    console.log('Server is running');
});