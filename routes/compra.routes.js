const router = require('express').Router();
const Joi=require('@hapi/joi');
const { ObjectID } =require('mongodb');
const { now } = require('mongoose');
const Compra=require('../models/Compra')


//Crar compra
router.post('/', async (req,res)=>{
    //registramos
    const compra=new Compra({
        name:req.body.name,
        marca:req.body.marca,
        descripcion:req.body.descripcion,
        precioCompra:req.body.precioCompra,
        precioVenta:req.body.precioVenta,
        cantidad:req.body.cantidad,
        imagen:req.body.imagen,
        tempCantidad:req.body.tempCantidad,
        newCantidad:req.body.newCantidad,
        proveedor:req.body.proveedor
    })
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