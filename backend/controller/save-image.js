const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './storage/img')
    },
    filename: function (req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}-${file.originalname}`)
    }
  })
   
  var upload = multer({storage})

  module.exports=upload