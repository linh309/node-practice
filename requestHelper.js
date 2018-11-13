var constants = require('./constants');

var requestHelper = {
    getContentTypeFromUrl: function(url) {
        let fileType = '';
        let contentType = constants.contentType.textPlain;

        if (url!='/') {
            var paths = url.split('/');
            var lastToken = paths.length > 0 ? paths[paths.length-1] : '';
            fileType = lastToken !== '' && lastToken.split('.').length > 0 
                            ? lastToken.split('.')[lastToken.split('.').length-1] : 
                            '';
        }

        if (fileType !=='') {
            if (fileType === constants.fileExtension.html) {
            contentType = constants.contentType.textHtml;
            } else if (fileType===constants.fileExtension.css) {
            contentType = constants.contentType.textCss;
            } else if (fileType===constants.fileExtension.js){
            contentType = constants.contentType.textJavascript;
            }
        }
        
        return contentType;
    },

    transformRequestToFilePath: function (url) {
        var requestPath = '';
        if (url=='/') {
            //get defaul page (index.html)
            requestPath=`/${constants.site.defaultPage}`;
        }
        else {
            //need to split url into each token and the last token is the real file (physical file)
            //Ex: /css/bootstrap.css => ['css','bootstrap.css']
            var paths = url.split('/');
            if (paths.length > 0) {
            for(var i = 0; i < paths.length; i++) {
                if (paths[i]!=='') {
                requestPath += `/${paths[i]}`;
                }
            }
            }
        }
        return `${constants.site.siteDirectory}${requestPath}`;
    }
};

module.exports = requestHelper;