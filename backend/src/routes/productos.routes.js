import { Router } from "express";
import app from "../server";

const router = Router();

//conexion a la db
import { connect } from "../database";
import { ObjectID } from "mongodb";

//ver todos los productos
router.get('/', async (req,res)=> {
    const db = await connect();
    const result = await db.collection('productos').find({}).toArray();
    res.json(result);
})

//Crar producto
router.post('/', async (req,res)=>{
    const db = await connect();
    const producto = {
        nombre: req.body.nombre,
        marca: req.body.marca,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        cantidad: req.body.cantidad,
        imagen: req.body.imagen,
        precioCompra: req.body.precioCompra 
    }
    const result = await db.collection('productos').insertOne(producto);
    res.json(result.ops[0])
})

//buscamos producto por id
router.get('/:id',async (req,res)=>{
    const {id} = req.params;
    const db = await connect();
    const result = await db.collection('productos').findOne({_id: ObjectID(id)});
    res.json(result);
})

router.delete('/:id', async (req,res) =>{
    const {id} = req.params;
    const db = await connect();
    const result = await db.collection('productos').deleteOne({_id: ObjectID(id)});
    res.json({
        messaje: 'producto '+ id +' eliminado',
        result
    })
})

//editar producto por id
router.put('/:id', async (req,res)=>{
    const {id} =req.params;
    const ActualizarProducto = {
        nombre: req.body.nombre,
        marca: req.body.marca,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        cantidad: req.body.cantidad,
        imagen: req.body.imagen,
        precioCompra: req.body.precioCompra 
    }
    const db = await connect();
    await db.collection('productos').updateOne({_id: ObjectID(id)}, {$set: ActualizarProducto});
    res.json({
        messaje: 'producto '+id+' actualizado'
    })


})

export default router;
