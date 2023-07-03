
const db = require("../config/db");
exports.getExpenseById = (data, callback) => {
    const {
        id
    } = data.params;
    let sql = "SELECT * FROM expense WHERE id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, result)
        }
    });
}

exports.getExpenseByUserId = (data) => {
    const {
        userId
    } = data.params;
    let sql = "SELECT * FROM expense WHERE user_id = ?";
    db.query(sql, [userId], (err, result) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, result)
        }
    });
}

exports.addExpense = (data, callback) => {
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

    let sql = "INSERT INTO expense (name, description, amount,created_at, updated_at, user_id,category_id) VALUES (?,?,?,?,?,?,?)";
    db.query(sql, [name, description, amount, created_at, updated_at, user_id, category_id], (err, result) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, result)
        }
    });
}

exports.updateExpense = (data, callback) => {
    const {
        name
    } = data.body;
    
    const {
        description
    } = data.body;

    const {
        amount
    } = data.body;

    const {
        updated_at
    } = new Date();

    const {
        id
    } = new Date();

    const {
        category_id
    } = new Date();
    let sql = "UPDATE expense set (name, description, amount, updated_at,category_id) VALUES (?,?,?,?,?) where id = ?";
    db.query(sql, [name, description, amount, updated_at, category_id, id], (err, result) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, result)
        }
    });
}

exports.deleteExpenseById = (data) => {
    const {
        id
    } = data.params;
    let sql = "DELETE FROM expense WHERE id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, result)
        }
    });
}