const userController = require('../controllers/user.controller')

module.exports = (app) => {
    app.get("/api/users/:id", userController.getUserById);
    app.get("/api/users/all", userController.getAllUsers);
    app.post("/api/users/register", userController.registerUser);
    app.post('/api/users/login', userController.loginUser);
}




