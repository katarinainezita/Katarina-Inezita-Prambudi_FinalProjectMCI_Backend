const categoryService = require('../services/categoryService');

const getAllCategories = async(req, res) => {
    categoryService.getAllCategories()
    .then(Categories => {

        if(!Categories){
            res.status(404).send({
                status : 'error',
                message : 'Data category tidak ditemukan',
                data : {}
            });
        } else {
            res.status(200).send({
                status: 'success',
                message: 'Data category berhasil ditemukan',
                data: Categories
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

const getCategoryByName = async(req, res) => {
    const name = req.params.name;
    categoryService.getCategoryByName(name)
    .then(Categories => {
        if (!Categories) {
            req.status(404).send({
                status: 'error',
                message: 'Data category tidak ditemukan',
                data: {}
            });
            
        } else {
            res.status(200).send({
                status: 'success',
                message: 'Data category berhasil ditemukan',
                data: Categories
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

const createCategory = async(req, res) => {
    console.log(req.body);
    const categoryData = {
        name : req.body.name
    }
    categoryService.createCategory(categoryData)
    .then(Categories => {
        res.status(200).send({
            status: 'success',
            message: 'Data category berhasil ditambahkan',
            data: Categories
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

const updateCategory = (req, res) => {
    const name = req.params.name;
    const categoryData = req.body;

    if(!name){
        return res.status(400).send({
            status: 'error',
            message: 'Name tidak ditemukan',
            data : {}
        });
    }

    categoryService.updateCategory(name, categoryData)
    .then(Carts => {
        res.status(200).send({
            status: 'success',
            message: 'Data category berhasil diupdate',
            data: Carts
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

const deleteCategory = (req, res) => {
    const name = req.params.name;

    if(!name){
        return res.status(400).send({
            status : 'error',
            message : 'Name tidak ditemukan',
            data : {}
        });
    }

    categoryService.deleteCategory(name)
    .then(Categories => {
        res.status(200).send({
            status: 'success',
            message: 'Data category berhasil dihapus',
            data: Categories
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
    getAllCategories,
    getCategoryByName,
    createCategory,
    updateCategory,
    deleteCategory
}
