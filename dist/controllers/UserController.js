"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
class UserController{
   async store(req, res){
    try{
        const { name, email, password } = req.body;
        if(!name || !email || !password){
            res.status(401).json({   
                errors: "Todos os campos devem ser preenchidos!"
            });
        }
        const newUser = await _User2.default.create({
            name: name,
            email: email,
            password:password
        });
       
        return res.json(newUser);
        }catch(e){
            return res.status(404).json({
                errors: e.errors.map((err) => err.message)
            });     
        }
    }

    async index(req, res){
        try {
            const users = await _User2.default.findAll({ attributes: [ 'id', 'name', 'email' ]  });
            if(!users){
                res.json({
                    errors: 'Não há nehum usuário cadastrado!'
                })
            }
            return  res.json(users);
        } catch (e) {
            console.log(e);
            return res.status(404).json(null);
        }
    }

    async show(req, res){
        try {
            const user = await _User2.default.findByPk(req.params.id);
            const { id, name, email } = user;
            return  res.json({ id, name, email });
        } catch (e) {
            return res.status(404).json(null);

        }
    }
    async update(req, res){
        try {
            const user = await _User2.default.findByPk(req.userId);

            if(!user){
                res.json({errors: ['Usuário não existe.']});
            };
            
            const userUpdated = await user.update(req.body);
            const { id, email, name } = userUpdated;
            return  res.json({ id, name, email });
        } catch (e) {
          return res.status(404).json({
                errors: e.errors.map((err) => err.message)
            });
        }
    }
    async delete(req, res){
        try {
            const user = await _User2.default.findByPk(req.userId);

            if(!user){
                res.json({errors: ['Usuário não existe.']});
            };
            
            const { id, email, name } = user;
            await user.destroy();
            return  res.json({ id, email, name });
        } catch (e) {
            return res.status(404).json({
                errors: e.errors.map((err) => err.message)
            });
        }
    }
};

exports. default = new UserController();