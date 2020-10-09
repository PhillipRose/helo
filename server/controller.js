




module.exports = {
    register: async(req,res) => {
        const {username, password, profileImg} =req.body,
        db =req.app.get('db')
    },
    login: async(req, res) => {},
    logout: (req,res) =>{
        req.session.destroy()
        res.sendStatus(200);
    }
}
