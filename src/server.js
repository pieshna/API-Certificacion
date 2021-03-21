import express, {json} from "express";

const app = express();

//routes
import IndexRoutes from "./routes/index.routes";
import ProductosRoutes from "./routes/productos.routes";
import UsuariosRoutes from "./routes/user.routes";
import ProveedorRoutes from "./routes/proveedores.routes";

//Settings
app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(json());

//routes
app.use(IndexRoutes);
app.use('/product', ProductosRoutes);
app.use('/user', UsuariosRoutes);
app.use('/proveedor', ProveedorRoutes);

export default app;