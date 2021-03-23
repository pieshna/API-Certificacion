import express, {json} from "express";
import bodyparser from "body-parser";
require('dotenv').config()

const app = express();

// capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//routes
import IndexRoutes from "./routes/index.routes";
import ProductosRoutes from "./routes/productos.routes";
import AuthRoutes from "./routes/auth.routes";
import UsuariosRoutes from "./routes/user.routes";
import ProveedorRoutes from "./routes/proveedores.routes";

//Settings
app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
}) 

//routes
app.use(IndexRoutes);
app.use('/product', ProductosRoutes);
app.use('/', UsuariosRoutes);
app.use('/usuario', AuthRoutes);
app.use('/user', UsuariosRoutes);
app.use('/proveedor', ProveedorRoutes);

export default app;