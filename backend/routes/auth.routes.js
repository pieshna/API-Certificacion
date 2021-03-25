const router = require('express').Router();
const User=require('../models/User');
const Joi=require('@hapi/joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { now } = require('mongoose');

const SchemaRegister=Joi.object({
    name: Joi.string().min(6).max(255).required(),
    username: Joi.string().min(6).max(100).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
    imagen: Joi.string().min(6).max(1024).required(),
    rol: Joi.string().min(3).max(255).required()
});
const SchemaUpdater=Joi.object({
    name: Joi.string().min(6).max(255).required(),
    username: Joi.string().min(6).max(100).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
    imagen: Joi.string().min(6).max(1024).required(),
    rol: Joi.string().min(3).max(255).required(),
    edited: Joi.string().min(3).max(255).required()
});

router.post('/register', async (req,res) => {
    
    //validamos que los datos no esten en blanco
    const {error}=SchemaRegister.validate(req.body);
    
    if(error){
        return res.status(400).json({
            error: error.details[0].message
        })
    }
    
    //validamos que el username sea unico
    const ExisteUsername= await User.findOne({username:req.body.username});
    
    if(ExisteUsername) return res.status(400).json({error: true, mensaje: `El username ${req.body.username} ya existe`})

    //validamos que el email sea unico
    const ExisteEmail= await User.findOne({email:req.body.email});
    
    if(ExisteEmail) return res.status(400).json({error: true, mensaje: `El correo ${req.body.email} ya existe`})
    
    //hasheamos la password
    const saltos=await bcrypt.genSalt(10);
    const password=await bcrypt.hash(req.body.password,saltos)
    
    //creamos usuario
    const user= new User({
        name:req.body.name,
        username:req.body.username,
        email:req.body.email,
        password:password,
        imagen:req.body.imagen,
        rol:req.body.rol
    })
    
    try {
        
        const UserDB = await user.save();
        res.json({
            error: null,
            data: UserDB
        })
        
    } catch (error) {
        res.status(400).json({error})
    }
})

const SchemaLogin=Joi.object({
    username: Joi.string().min(6).max(100).required(),
    password: Joi.string().min(6).max(1024).required(),
})

router.post('/login',async (req,res) => {
    // validaciones
    const { error } = SchemaLogin.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message })
    
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).json({ error: 'Usuario no encontrado' });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json({ error: 'contraseña no válida' })
    
    //Creamos JWT
    const token =jwt.sign({
        name: user.name,
        rol: user.rol,
        id: user._id
    }, process.env.TOKEN_SECRET)





    res.json({
        error: null,
        data: 'exito bienvenido',
        token
    })
})

//editar usuarios por id
router.put('/:id', async (req,res)=>{
    const {id} =req.params;
    //hasheamos la password
    const saltos=await bcrypt.genSalt(10);
    const password=await bcrypt.hash(req.body.password,saltos)
    const ActualizarProducto = {
        name:req.body.name,
        username:req.body.username,
        email:req.body.email,
        password:password,
        imagen:req.body.imagen,
        rol:req.body.rol,
        edited: `${now()}`
    }

    //validamos que los datos no esten en blanco
    const {error}=SchemaUpdater.validate(ActualizarProducto);
    
    if(error){
        console.log(error);
        return res.status(400).json({
            error: error.details[0].message
        })
    }

    

    await User.updateOne({_id: id}, {$set: ActualizarProducto});
    res.json({
        messaje: `Usuario ${id} actualizado`
    })


})

//ver todos los usuarios
router.get('/', async (req,res)=> {
    const result = await User.find({});
    res.json(result);
})

//eliminamos usuario
router.delete('/:id', async (req,res) =>{
    const {id} = req.params;
    const result = await User.deleteOne({_id: id});
    res.json({
        messaje: `Usuario ${id} eliminado`,
        result
    })
})

router.get('/:id',async (req,res)=>{
    const {id} = req.params;
    const result = await User.findOne({_id: id});
    res.json(result);
})

module.exports = router;