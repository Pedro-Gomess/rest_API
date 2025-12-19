"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _Photo = require('../models/Photo'); var _Photo2 = _interopRequireDefault(_Photo);
const upload = _multer2.default.call(void 0, _multerConfig2.default).single('photo');


class PhotosController{
   async store(req, res){
        return upload(req, res, async (error) =>{
            if(error){
                return res.status(400).json({
                    errors: [error.code]
                })
            };
            
            try {
                const { filename, originalname } = req.file;
                const { student_id } = req.body;
                const photo = await _Photo2.default.create({ filename:filename,
                     originalname:originalname,
                      student_id: student_id });
                
                res.json(photo);
            }catch (e){
                res.status(400).json({
                    errors: ['Aluno não existe!']
                });
            }
        });

    }
};

exports. default = new PhotosController();