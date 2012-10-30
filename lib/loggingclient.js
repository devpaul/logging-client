var logging = (function() {
    "use strict";

    var loglevel = { INFO : "INFO"
                   , WARN : "WARN"
                   , ERROR : "ERROR"
                   , DEBUG : "DEBUG"
                   }
      , config = { server : "http://127.0.0.1:2468"
                 , consoleout : true
                 }

    function sendLog(level, ident, msg) {
        var request = new XMLHttpRequest()
          , url = [config.server, "/log/", level, "/", ident, "?msg=", msg].join('')
        if(config.consoleout) { console.log(['[', level, '] ', ident, ": ", msg].join('')) }
        request.open("GET", url, true);
        request.send();
        request.onload = function() {
            if(config.consoleout) { console.log(request.responseText) }
        };
        request.onerror = function() {
            console.log('failed to log to server')
            console.log(arguments)
        }
        return request;
    }

    function log(ident, msg) {
        sendLog(loglevel.INFO, ident, msg);
    }

    function warn(ident, msg) {
        sendLog(loglevel.WARN, ident, msg);
    }

    function debug(ident, msg) {
        sendLog(loglevel.DEBUG, ident, msg);
    }

    function error(ident, msg) {
        sendLog(loglevel.ERROR, ident, msg);
    }

    return { log : log
           , debug : debug
           , info : log
           , warn : warn
           , error : error
           , sendLog : sendLog
           , config : config
           , loglevel : loglevel
    }
})()