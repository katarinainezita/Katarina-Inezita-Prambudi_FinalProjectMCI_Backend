const { User } = require('../models')

const getAllUsers = () => {
    return User.findAll(
        {
            attributes: ['name', 'email', 'password', 'role']
        }
    )
}

const getUserByName = (name) => {
    return User.findOne(
        {
            where: {
                name: name
            }
        }
    )
}

const createUser = (userData) => {
    return User.create(userData)
}

const updateUser = (name, userData) => {
    return User.update(userData, {
        where: {
            name: name
        }
    })
}

const deleteUser = (name) => {
    return User.destroy({
        where: {
            name: name
        }
    })
}

module.exports = {
    getAllUsers,
    getUserByName,
    createUser,
    updateUser,
    deleteUser
}