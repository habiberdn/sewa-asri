const attractionModel = require('../models/attractionModel')
const factory = require('./handleFactory')
const multer = require('multer')
const sharp = require('sharp');

const multerStorage = multer.memoryStorage();
//if u want to resize, save file into memory not into disk
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

exports.getAllAttraction = factory.getAll(attractionModel)
exports.getAttraction = factory.getOne(attractionModel)
exports.updateAttraction = factory.updateOne(attractionModel)
exports.deleteAttraction = factory.deleteOne(attractionModel)
exports.createAttraction = factory.createOne(attractionModel)

exports.uploadUserPhoto = upload.single('photo');
exports.resizeUserPhoto =  async (req,file,next)=>{
    if(!req.file){
      return next()
    }
    req.file.filename = `user${req.user.id}-${Date.now()}.webp` //save file into db
   await sharp(req.file.buffer).resize(500,500).toFormat('webp').jpeg({quality:90}).toFile(`public/img/users/${req.file.filename}`) 
    next()
    
  }  