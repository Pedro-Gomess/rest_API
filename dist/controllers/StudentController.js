"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Student = require('../models/Student'); var _Student2 = _interopRequireDefault(_Student);
var _Photo = require('../models/Photo'); var _Photo2 = _interopRequireDefault(_Photo);
class StudentController{
    async store (req, res){
        try {
            const { name, lastname, email, age, height, weight } = req.body;
            
            if(!name || !lastname || !email || !age || !height || !weight){
                res.status(401).json({   
                    errors: "Todos os campos devem ser preenchidos!"
                });
            }
            const newStudent = await _Student2.default.create({  
                name: name,
                lastname: lastname,
                email: email, 
                age:age, 
                height: height,
                weight: weight
                });

            return res.json(newStudent);

        }catch (e){
              res.status(401).json({
                errors: e.errors.map(err => err.message)
            });
        }
    };

    async index(req, res){
        try {
            const students = await _Student2.default.findAll({
                attributes: [ 'id', 'name', 'lastname', 'email', 'age' ],
                order: [ [ 'id', 'DESC' ], [ _Photo2.default, 'id', 'DESC' ] ],
                include:{
                    model:_Photo2.default,
                    attributes: [ 'filename' ]
                }
            });
            if(!students){
                res.json(null);        
            }      
            return res.json(students);        
            
        } catch (e) {            
            res.status(401).json({
                errors: e.errors.map(err => err.message)
            });
        }
    };

    async show(req, res){
        try {
            if(!req.params.id){
            res.status(401).json({
                errors: 'É preciso do ID para realizar a busca!'
            });
        }
        const student = await _Student2.default.findByPk(req.params.id, {
                attributes: [ 'id', 'name', 'lastname', 'email', 'age' ],
                order: [ [ 'id', 'DESC' ], [ _Photo2.default, 'id', 'DESC' ] ],
                include:{
                    model:_Photo2.default,
                    attributes: [ 'url', 'filename' ]
                }
            });
        
        if(!student){
            res.status(404).json({
                errors: 'Usuário não existe!'
            });
        }
        return res.json(student);
        } catch (e) {  
            res.status(401).json({
                errors: e.errors.map(err => err.message)
            });
        }
    };

    async update(req, res){
        try {
            if(!req.params.id){
            res.status(401).json({
                errors: 'É preciso do ID para realizar a busca!'
            });
        }
        const student = await _Student2.default.findByPk(req.params.id);
        
        if(!student){
            res.status(404).json({
                errors: 'Usuário não existe!'
            });
        }
    
        const studentUpdated = await student.update(req.body);
        return res.json(studentUpdated);
        } catch (e) {
            console.log(e);
            
            res.status(401).json({
                errors: e.errors.map(err => err.message)
            });
        }
    };

    async delete(req, res){
        try {
            if(!req.params.id){
            res.status(401).json({
                errors: 'É preciso do ID para realizar a busca!'
            });
        }
        const student = await _Student2.default.findByPk(req.params.id);
        
        if(!student){
            res.status(404).json({
                errors: 'Usuário não existe!'
            });
        }
    
        await student.destroy();
        return res.json({
            apagado: true
        });
        } catch (e) {
            console.log(e);
            
            res.status(401).json({
                errors: e.errors.map(err => err.message)
            });
        }
    };
};

exports. default = new StudentController();