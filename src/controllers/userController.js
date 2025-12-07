import User from "../models/User";
class UserController{
   async store(req, res){
    try{
        const { name, email, password } = req.body;
        if(!name || !email || !password){
            res.status(401).json({   
                erros: "Todos os campos devem ser preenchidos!"
            });
        }
        const newUser = await User.create({
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
            const users = await User.findAll({ attributes: [ 'id', 'name', 'email' ]  });
            
            return  res.json(users);
        } catch (e) {
            console.log(e);
            return res.status(404).json(null);
        }
    }

    async show(req, res){
        try {
            const user = await User.findByPk(req.params.id);
            const { id, name, email } = user;
            return  res.json({ id, name, email });
        } catch (e) {
            return res.status(404).json(null);

        }
    }
    async update(req, res){
        try {
            const user = await User.findByPk(req.userId);

            if(!user){
                res.json({erros: ['Usuário não existe.']});
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
            const user = await User.findByPk(req.userId);

            if(!user){
                res.json({erros: ['Usuário não existe.']});
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

export default new UserController();