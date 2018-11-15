var account = require('./controller/accountController');
var spending = require('./controller/SpendingController')

var route = (app)=>{
        app.route('/student')
                .get(account.getStudent)
                .post(account.createStudent)
        app.route("/api/spending")
                .get(spending.getAllSpending)
                .post(spending.create)
};

module.exports = route;