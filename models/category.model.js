const db = require("../config/db");
exports.getAllCategories = (data, callback) => {
    const {
        id
    } = data.params;
    let sql = "SELECT * FROM category";
    db.query(sql, [id], (err, result) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, result)
        }
    });
}

exports.getCategoryById = (data, callback) => {
    const {
        id
    } = data.params;
    let sql = "SELECT * FROM category WHERE id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, result)
        }
    });
}

exports.addCategory = (data, callback) => {
    const {
        name
    } = data.body;
    const {
        color
    } = data.body;

    let created_at = new Date();

    let updated_at = new Date();


    let sql = "INSERT INTO category (name, color,created_at, updated_at) VALUES (?,?,?,?)";
    db.query(sql, [name, color, created_at, updated_at], (err, result) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, result)
        }
    });
}

exports.updateCategory = (data, callback) => {
    const {
        name
    } = data.body;
    const {
        color
    } = data.body;
    let updated_at = new Date();

    let sql = "UPDATE category set (name, color, updated_at) VALUES (?,?,?,?) where id = ?";
    db.query(sql, [name, color, updated_at, id], (err, result) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, result)
        }
    });
}

exports.deleteCategoryById = (data) => {
    const {
        id
    } = data.params;
    let sql = "DELETE FROM category WHERE id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, result)
        }
    });
}