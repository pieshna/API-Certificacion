const router = require("express").Router();
const Product = require("../models/Product");
const Proveedor = require("../models/Proveedor");
const User = require("../models/User");
const faker = require("faker");

router.get("/product", async (req, res) => {
  const datos = [];
  for (let i = 0; i <= 10; i++) {
    const crear = {
      name: faker.vehicle.vin(),
      marca: faker.vehicle.vehicle(),
      descripcion: faker.lorem.words(10),
      precioCompra: faker.datatype.number(2000),
      precioVenta: faker.datatype.number(2500),
      cantidad: faker.datatype.number(100),
      imagen: faker.image.imageUrl()
    };
    if (crear.precioVenta > crear.precioCompra) {
      datos.push(crear);
      await Product.create(crear);
    } else {
      i--;
    }
  }

  res.send(datos);
});

router.get("/proveedor", async (req, res) => {
  const datos = [];
  for (let i = 0; i <= 10; i++) {
    const crear = {
     nombre:faker.name.firstName(),
        apellido:faker.name.lastName(),
        correo:faker.internet.email(),
        empresa:faker.company.companyName(),
        contacto:faker.phone.phoneNumberFormat(),
        imagen:faker.image.imageUrl()
    };
    
      datos.push(crear);
      await Proveedor.create(crear);
    
  }

  res.send(datos);
});

router.get("/user", async (req, res) => {
    const datos = [];
    for (let i = 0; i <= 10; i++) {
      const crear = {
        name:faker.name.findName(),
        username:faker.internet.userName(),
        email:faker.internet.email(),
        password:faker.internet.password(),
        imagen:faker.image.imageUrl(),
        rol:"admin"
      };
      
        datos.push(crear);
        await User.create(crear);
      
    }
  
    res.send(datos);
  });
module.exports = router;
