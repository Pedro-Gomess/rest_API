import multerConfig from '../config/multerConfig';
import multer from 'multer';
import Photo from '../models/Photo';
const upload = multer(multerConfig).single('photo');


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
                const photo = await Photo.create({ filename:filename,
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

export default new PhotosController();