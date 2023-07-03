const expenseModel = require('../models/expense.model')


exports.getExpenseById = (req, res) => {
    expenseModel.getExpenseById(req, (error, response) => {
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

exports.getExpenseByUserId = (req, res) => {
    expenseModel.getExpenseByUserId(req, (error, response) => {
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

exports.addExpense = (req, res) => {
    expenseModel.addExpense(req, (error, response) => {
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

exports.updateExpense = (req, res) => {
    expenseModel.updateExpense(req, (error, response) => {
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
exports.deleteExpenseById = (req, res) => {
    expenseModel.updateExpense(req, (error, response) => {
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