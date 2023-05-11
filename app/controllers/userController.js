const userService = require('../services/userService');

const getAllUsers = async(req, res) => {
    userService.getAllUsers()
    .then(Users => {

        if(!Users){
            res.status(404).send({
                status : 'error',
                message : 'Data user tidak ditemukan',
                data : {}
            });
        } else {
            res.status(200).send({
                status: 'success',
                message: 'Data user berhasil ditemukan',
                data: Users
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            status: 'error',
            message: err.message,
            data: {}
        });
    })
}

const getUserByName = async(req, res) => {
    const name = req.params.name;
    userService.getCartByIdUSer(name)
    .then(Users => {
        if (!Users) {
            req.status(404).send({
                status: 'error',
                message: 'Data user tidak ditemukan',
                data: {}
            });
            
        } else {
            res.status(200).send({
                status: 'success',
                message: 'Data user berhasil ditemukan',
                data: Users
            });
        }
        
    })
    .catch(err => {
        res.status(500).send({
            status: 'error',
            message: err.message,
            data: {}
        });
    })
}

const createUser = async(req, res) => {
    console.log(req.body);
    const userData = {
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        role : req.body.role
    }
    userService.createUser(userData)
    .then(Users => {
        res.status(200).send({
            status: 'success',
            message: 'Data user berhasil ditambahkan',
            data: Users
        });
    })
    .catch(err => {
        res.status(500).send({
            status: 'error',
            message: err.message,
            data: {}
        });
    })
}

const updateUser = (req, res) => {
    const name = req.params.name;
    const userData = req.body;

    if(!user_id){
        return res.status(400).send({
            status: 'error',
            message: 'Id User tidak ditemukan',
            data : {}
        });
    }

    userService.updateUser(name, userData)
    .then(Users => {
        res.status(200).send({
            status: 'success',
            message: 'Data user berhasil diupdate',
            data: Users
        });
    })
    .catch(err => {
        res.status(500).send({
            status: 'error',
            message: err.message,
            data: {}
        });
    })
}

const deleteUser = (req, res) => {
    const name = req.params.name;

    if(!name){
        return res.status(400).send({
            status : 'error',
            message : 'Id User tidak ditemukan',
            data : {}
        });
    }

    userService.deleteUser(name)
    .then(Users => {
        res.status(200).send({
            status: 'success',
            message: 'Data user berhasil dihapus',
            data: Users
        });
    })
    .catch(err => {
        res.status(500).send({
            status: 'error',
            message: err.message,
            data: {}
        });
    })
}

module.exports = {
    getAllUsers,
    getUserByName,
    createUser,
    updateUser,
    deleteUser
}
