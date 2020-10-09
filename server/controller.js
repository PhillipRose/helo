const bcrypt = require('bcryptjs');




module.exports = {
    register: async(req,res) => {
        const {username, password, profileImg} =req.body,
            db =req.app.get('db');




        const foundUser =await db.users.check_user({email});
        if(foundUser[0]){
            return res.status(400).send('Email already in use');
        }

        let salt = bcrypt.genSaltSync(10),
            hash = bcrypt.hashSync(password, salt);
        
        const newUser = await db.users.register_user({username, email, hash, profilePicture});
        req.session.user = newUser[0];
        res.status(201).send(req.session.user);
    },
    login: async(req, res) => {},
    logout: (req,res) =>{
        req.session.destroy()
        res.sendStatus(200);
    }
























}
