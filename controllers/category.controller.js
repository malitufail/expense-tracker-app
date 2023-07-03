const categoryModel = require('../models/category.model')


exports.getAllCategories = (req, res) => {
    categoryModel.getAllCategories(req, (error, response) => {
        if (error) {
            res.send({
                status: "error",
                data: null
            })
        } else {
            res.send({
                status: "ok",
                data: response
            })
        }
    });
}

exports.getCategoryById = (req, res) => {
    categoryModel.getCategoryById(req, (error, response) => {
        if (error) {
            res.send({
                status: "error",
                data: null
            })
        } else {
            res.send({
                status: "ok",
                data: response
            })
        }
    });
} 

exports.addCategory = (req, res) => {
    categoryModel.addCategory(req, (error, response) => {
        if (error) {
            res.send({
                status: "error",
                data: null
            })
        } else {
            res.send({
                status: "ok",
                data: response
            })
        }
    });
}

exports.updateCategory = (req, res) => {
    categoryModel.updateCategory(req, (error, response) => {
        if (error) {
            res.send({
                status: "error",
                data: null
            })
        } else {
            res.send({
                status: "ok",
                data: response
            })
        }
    });
}
exports.deleteCategoryById = (req, res) => {
    categoryModel.updateCategory(req, (error, response) => {
        if (error) {
            res.send({
                status: "error",
                data: null
            })
        } else {
            res.send({
                status: "ok",
                data: response
            })
        }
    });
}