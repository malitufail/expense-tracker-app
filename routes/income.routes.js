const incomeController = require('../controllers/income.controller')

module.exports = (app) => {
    app.get("/api/income/:id", incomeController.getIncomeById);
    app.get("/api/income/:userId", incomeController.getIncomeByUserId);
    app.post("/api/income/add", incomeController.addIncome);
    app.put('/api/income/update', incomeController.updateIncome);
    app.delete('/api/income/delete/:id', incomeController.deleteIncomeById);
}