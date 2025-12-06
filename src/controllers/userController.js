import User from "../models/User";
class UserController{
   async create(req, res){
    try{

        const newUser = await User.create({
            name: 'Nicolas',
            email: 'ferreira@mail.com',
            password: '12345678',
           
         });
       
        return res.json(newUser);
        }catch(e){
            return res.status(404).json({
                erros: e.erros.map((err) => err.message)
            });     
        }
    }

    async index(req, res){
        try {
            const users = await User.findAll();
            return  res.json(users);
        } catch (e) {
            return res.status(404).json({
                erros: e.erros.map((err) => err.message)
            });
        }
    }

    async show(req, res){
        try {
            const user = await User.findByPk(req.params.id);

            return  res.json(user);
        } catch (e) {
           return res.status(404).json({
                erros: e.erros.map((err) => err.message)
            });
        }
    }
    async update(req, res){
        try {
            if(!req.params.id){
                res.json({ erros: ['Não é possivel encontrar usário sem ID.'] });
            };
            
            const user = await User.findByPk(req.params.id);

            if(!user){
                res.json({erros: ['Usuário não existe.']});
            };
            
            const userUpdated = await user.update(req.body);

            return  res.json(userUpdated);
        } catch (e) {
          return res.status(404).json({
                erros: e.erros.map((err) => err.message)
            });
        }
    }
    async delete(req, res){
        try {
            if(!req.params.id){
                res.json({ erros: ['Não é possivel encontrar usário sem ID.'] });
            };
            
            const user = await User.findByPk(req.params.id);

            if(!user){
                res.json({erros: ['Usuário não existe.']});
            };
            
            await user.destroy();
            return  res.json(user);
        } catch (e) {
            return res.status(404).json({
                erros: e.erros.map((err) => err.message)
            });
        }
    }
};

export default new UserController();