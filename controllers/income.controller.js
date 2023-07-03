const incomeModel = require('../models/income.model')


exports.getIncomeById = (req, res) => {
    incomeModel.getIncomeById(req, (error, response) => {
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

exports.getIncomeByUserId = (req, res) => {
    incomeModel.getIncomeByUserId(req, (error, response) => {
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

exports.addIncome = (req, res) => {
    incomeModel.addIncome(req, (error, response) => {
        if (error) {
            res.send({
                status: "error",
                data: error
            })
        } else {
            res.send({
                status: "ok",
                data: response
            })
        }
    });
}

exports.updateIncome = (req, res) => {
    incomeModel.updateIncome(req, (error, response) => {
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
exports.deleteIncomeById = (req, res) => {
    incomeModel.updateIncome(req, (error, response) => {
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