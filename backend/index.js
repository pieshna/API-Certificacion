const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
require('dotenv').config()

const app = express();

//cors para aceptar peticiones de forntend
let CorsOption={
    origin: '*',
    optionSuccessStatus:200
}

app.use(cors(CorsOption))

// capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Conexión a Base de datos
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.e5gzq.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log('error db:', e))

// import routes
const authRoutes = require('./routes/auth.routes');
const logued = require('./routes/dashboard.routes');
const productRoutes=require('./routes/productos.routes')
const proveedoresRoutes=require('./routes/proveedores.routes')

//import controller
const validarToken= require('./controller/validate-token')
const upload=require('./controller/save-image')

// route middlewares
app.use('/api/user', authRoutes);
app.use('/api/product',validarToken, productRoutes);
app.use('/api/proveedor',validarToken, proveedoresRoutes);
app.use('/api/',validarToken, logued);
app.post('/api/imagen',upload.single('img'),(req,res,next)=>{
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(file)
})

// Middleware para Vue.js router modo history esto va solo si ponemos el frontend en el mismo servidor que el backend
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(__dirname + "/public"));

// route middlewares
//app.get('/', (req, res) => {
//    res.json({
//        estado: true,
//        mensaje: 'funciona!'
//    })
//});

// iniciar server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`servidor en el puerto: ${PORT}`)
})