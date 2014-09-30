var exec = require('cordova/exec');

module.exports = {
    copyFiles : function(fileList, destEntry, success) {
        var win = function(){
            success();
        }
        
        exec(win, null, "contentSync", "copy", [fileList]);
    }
}