const db = require("../config/db");
exports.getIncomeById = (data, callback) => {
    const {
        id
    } = data.params;
    let sql = "SELECT * FROM income WHERE id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, result)
        }
    });
}

exports.getIncomeByUserId = (data) => {
    const {
        userId
    } = data.params;
    let sql = "SELECT * FROM income WHERE user_id = ?";
    db.query(sql, [userId], (err, result) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, result)
        }
    });
}

exports.addIncome = (data, callback) => {
    const {
        name
    } = data.body;
    const {
        description
    } = data.body;
    const {
        amount
    } = data.body;
    let created_at = new Date();

    let updated_at = new Date();
    const {
        user_id
    } = data.body;
    const {
        category_id
    } = data.body;
    let sql = "INSERT INTO income (name, description, amount,created_at, updated_at, user_id,category_id) VALUES (?,?,?,?,?,?,?)";
    db.query(sql, [name, description, amount, created_at, updated_at, user_id, category_id], (err, result) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, result)
        }
    });
}

exports.updateIncome = (data, callback) => {
    const {
        name
    } = data.body;
    const {
        description
    } = data.body;
    const {
        amount
    } = data.body; 

    let updated_at = new Date();
    const {
        id
    } = data.body;
    const {
        category_id
    } = data.body;
    let sql = "UPDATE income set (name, description, amount, updated_at,category_id) VALUES (?,?,?,?,?) where id = ?";
    db.query(sql, [name, description, amount, updated_at, category_id, id], (err, result) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, result)
        }
    });
}

exports.deleteIncomeById = (data) => {
    const {
        id
    } = data.params;
    let sql = "DELETE FROM income WHERE id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, result)
        }
    });
}