const db = require("../config/db");
exports.getUserById = (data, callback) => {
    const {
        id
    } = data.params;
    let sql = "SELECT * FROM users WHERE id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, result)
        }
    });
}

exports.getAllUsers = (data) => {
    let sql = "SELECT * FROM users";
    db.query(sql, (err, result) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, result)
        }
    });
}

exports.registerUser = (data, callback) => {
    const {
        username
    } = data.body;
    const {
        email
    } = data.body;
    const {
        password
    } = data.body;
    const {
        created_at
    } = new Date();
    const {
        updated_at
    } = new Date(); 
   let sql = "INSERT INTO users (username, email, password,created_at, updated_at) VALUES (?,?,?,?,?)";
    db.query(sql, [username, email, password, created_at, updated_at], (err, result) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, result)
        }
    });
}

exports.loginUser = (data, callback) => {
    const {
        email
    } = data.body;
    const {
        password
    } = data.body;
    
    let sql = "SELECT * FROM users WHERE email = ? and password = ?";
    db.query(sql, [email, password], (err, result) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, result)
        }
    });
}