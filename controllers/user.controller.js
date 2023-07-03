const userModel = require('../models/user.model')


exports.getUserById = (req, res) => {
    userModel.getUserById(req, (error, response) => {
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

exports.getAllUsers = (req, res) => {
    userModel.getAllUsers({}, (error, response) => {
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

exports.registerUser = (req, res) => {
    userModel.registerUser(req, (error, response) => {
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

exports.loginUser = (req, res) => {
    userModel.loginUser(req, (error, response) => {
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