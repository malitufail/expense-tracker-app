const categoryController = require('../controllers/category.controller')

module.exports = (app) => {
    app.get("/api/category/:id", categoryController.getCategoryById); 
    app.get("/api/category", categoryController.getAllCategories); 
    app.post("/api/category/add", categoryController.addCategory);
    app.put('/api/category/update', categoryController.updateCategory);
    app.delete('/api/category/delete/:id', categoryController.deleteCategoryById);
}