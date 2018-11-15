var webServer = {
    initialize: function(app, express){
        app.use(express.static(__dirname+'/static'));
    }
}

module.exports  = webServer;