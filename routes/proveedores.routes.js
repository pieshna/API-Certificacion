const router = require('express').Router();
const Product=require('../models/Proveedor');
const Joi=require('@hapi/joi');
const { ObjectID } =require('mongodb');
const { now } = require('mongoose');


//ver todos los productos
router.get('/', async (req,res)=> {
    const result = await Product.find({});
    res.json(result);
})

const SchemaRegister=Joi.object({
    nombre: Joi.string().min(6).max(255).required(),
    apellido: Joi.string().min(6).max(100).required(),
    correo: Joi.string().min(3).max(255).required().email(),
    empresa: Joi.string().min(1).max(255).required(),
    contacto: Joi.string().min(1).max(255).required(),
    imagen: Joi.string().min(6).max(1024).required()
});
const SchemaUpdater=Joi.object({
    nombre: Joi.string().min(6).max(255).required(),
    apellido: Joi.string().min(6).max(100).required(),
    correo: Joi.string().min(3).max(255).required().email(),
    empresa: Joi.string().min(1).max(255).required(),
    contacto: Joi.string().min(1).max(255).required(),
    imagen: Joi.string().min(6).max(1024).required(),
    edited: Joi.string().min(6).max(1024).required(),
});

//Crar producto
router.post('/', async (req,res)=>{
    //validamos que los datos no esten en blanco
    console.log('ingresa:',req.body);
    const {error}=SchemaRegister.validate(req.body);
    if(error){
        console.log(error);
        return res.status(400).json({
            error: error.details[0].message
        })
    }
    console.log('validamos');

    //validamos que el email sea unico
    const ExisteEmail= await Product.findOne({correo:req.body.correo});
    
    if(ExisteEmail) return res.status(400).json({error: true, mensaje: `El correo ${req.body.correo} ya existe`})

    //registramos
    const producto=new Product({
        nombre:req.body.nombre,
        apellido:req.body.apellido,
        correo:req.body.correo,
        empresa:req.body.empresa,
        contacto:req.body.contacto,
        imagen:req.body.imagen
    })
    console.log(producto);
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
    const {id} = req.params;
    const result = await Product.findOne({_id: id});
    res.json(result);
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
    //validamos que los datos no esten en blanco
    const {id} =req.params;
    const ActualizarProducto = {
        nombre:req.body.nombre,
        apellido:req.body.apellido,
        correo:req.body.correo,
        empresa:req.body.empresa,
        contacto:req.body.contacto,
        imagen:req.body.imagen,
        edited:`${now()}`
    }
    const {error}=SchemaUpdater.validate(ActualizarProducto);
    
    if(error){
        return res.status(400).json({
            error: error.details[0].message
        })
    }

    await Product.updateOne({_id: ObjectID(id)}, {$set: ActualizarProducto});
    res.json({
        messaje: `producto ${id} actualizado`
    })


})

module.exports= router;
