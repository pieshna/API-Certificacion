const router = require('express').Router();
const Joi=require('@hapi/joi');
const { ObjectID } =require('mongodb');
const { now } = require('mongoose');
const Compra=require('../models/Compra')
const Proveedor=require('../models/Proveedor')

router.get('/', async (req,res)=> {
    const verCompra = await Compra.find({});
    const verProveedor = await Proveedor.find({});
    const result=[verCompra,verProveedor];
    res.json(result);
})

//Crar compra
router.post('/', async (req,res)=>{
    //registramos
    const compra=new Compra({
        name:req.body.name.toString(),
        marca:req.body.marca.toString(),
        descripcion:req.body.descripcion.toString(),
        precioCompra:req.body.precioCompra.toString(),
        precioVenta:req.body.precioVenta.toString(),
        cantidad:req.body.cantidad.toString(),
        imagen:req.body.imagen.toString(),
        tempCantidad:req.body.tempCantidad.toString(),
        newCantidad:req.body.newCantidad.toString(),
        proveedor:req.body.proveedor.toString()
    })
    console.log('compra',compra);
    try {
        const CompraDB = await compra.save();
        console.log(CompraDB);
        res.json({
            error:null,
            data:  CompraDB
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({error})
    }
})

module.exports= router;