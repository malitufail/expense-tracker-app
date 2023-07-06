const userController = require('../controllers/user.controller')

module.exports = (app) => {
    app.get("/api/users/get-user-by-id/:id", userController.getUserById);
    app.get("/api/users/alls", userController.getAllUsers);
    app.post("/api/users/register", userController.registerUser);
    app.post('/api/users/login', userController.loginUser);
}




