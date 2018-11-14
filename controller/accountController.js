var accountController = {
    getStudent: (req,res,next) => {
        res.json( {
            "Name": "Linh",
            "Course": "NodeJS"
        });
    },
    createStudent: (req,res,next)=> {
        res.send({
            "result": "ok",
            "account": "ok"
        });
    }
};

module.exports = accountController;