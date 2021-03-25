const router = require('express').Router();
const Product=require('../models/Product');
const Joi=require('@hapi/joi');
const { ObjectID } =require('mongodb');
const { now } = require('mongoose');


//ver todos los productos
router.get('/', async (req,res)=> {
    const result = await Product.find({});
    res.json(result);
})

const SchemaRegister=Joi.object({
    name: Joi.string().min(6).max(255).required(),
    marca: Joi.string().min(6).max(100).required(),
    descripcion: Joi.string().min(3).max(255).required(),
    precioCompra: Joi.string().min(1).max(255).required(),
    precioVenta: Joi.string().min(1).max(255).required(),
    cantidad: Joi.string().min(1).max(255).required(),
    imagen: Joi.string().min(6).max(1024).required()
});
const SchemaUpdater=Joi.object({
    name: Joi.string().min(6).max(255).required(),
    marca: Joi.string().min(6).max(100).required(),
    descripcion: Joi.string().min(3).max(255).required(),
    precioCompra: Joi.string().min(1).max(255).required(),
    precioVenta: Joi.string().min(1).max(255).required(),
    cantidad: Joi.string().min(1).max(255).required(),
    imagen: Joi.string().min(6).max(1024).required(),
    edited: Joi.string().min(6).max(1024).required()
});

//Crar producto
router.post('/', async (req,res)=>{
    //validamos que los datos no esten en blanco
    const {error}=SchemaRegister.validate(req.body);
    
    if(error){
        return res.status(400).json({
            error: error.details[0].message
        })
    }

    //registramos
    const producto=new Product({
        name:req.body.name,
        marca:req.body.marca,
        descripcion:req.body.descripcion,
        precioCompra:req.body.precioCompra,
        precioVenta:req.body.precioVenta,
        cantidad:req.body.cantidad,
        imagen:req.body.imagen,
        date: `${now()}`,
        edited:`${now()}`
    })

    try {
        const ProductDB = await producto.save();
        res.json({
            error:null,
            data:  ProductDB
        })
    } catch (error) {
        res.status(400).json({error})
    }
})

//buscamos producto por id
router.get('/:id',async (req,res)=>{
    //console.log('entramos a buscar por id');
    const {id} = req.params;
    try {
        const result = await Product.findOne({_id: id});
    res.json(result);
    } catch (error) {
        res.status(404).json('product not found')
    }
    
})

router.delete('/:id', async (req,res) =>{
    const {id} = req.params;
    const result = await Product.deleteOne({_id:id});
    res.json({
        messaje: `producto ${id} eliminado`,
        result
    })
})

//editar producto por id
router.put('/:id', async (req,res)=>{
    //console.log('entramos a edit');
    //console.log('recibimos:',req.body);
    //validamos que los datos no esten en blanco
    const {id} =req.params;
    const ActualizarProducto = {
        name:req.body.name,
        marca:req.body.marca,
        descripcion:req.body.descripcion,
        precioCompra:req.body.precioCompra,
        precioVenta:req.body.precioVenta,
        cantidad:req.body.cantidad,
        imagen:req.body.imagen,
        edited:`${now()}`
    }
    //console.log('validamos:',ActualizarProducto);
    const {error}=SchemaUpdater.validate(ActualizarProducto);
    
    if(error){
        console.log('error al validar',error);
        return res.status(400).json({
            error: error.details[0].message
        })
    }

    //console.log(id);
    //console.log(ActualizarProducto);
    await Product.updateOne({_id: ObjectID(id)}, {$set: ActualizarProducto});
    res.json({
        messaje: `producto ${id} actualizado`
    })


})

module.exports= router;
