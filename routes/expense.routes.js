const expenseController = require('../controllers/expense.controller')

module.exports = (app) => {
    app.get("/api/expense/:id", expenseController.getExpenseById);
    app.get("/api/expense/:userId", expenseController.getExpenseByUserId);
    app.post("/api/expense/add", expenseController.addExpense);
    app.put('/api/expense/update', expenseController.updateExpense);
    app.delete('/api/expense/delete/:id', expenseController.deleteExpenseById);
}