var account = require('./controller/accountController');
var route = (app)=>{
    app.route('/student')
        .get(account.getStudent)
        .post(account.createStudent)
};

module.exports = route;