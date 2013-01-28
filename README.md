# Basic Logging Client

A basic implementation of a javascript client API for logging-server

## Usage
```
<script type="text/javascript" src="loggingclient.js"></script>
   <script>
       logging.config.server = "http://yourserver.com"
   </script>
```

## Features
* browser logging using rest or websockets
* node client logging using rest or sockets
* modularized distributions targeting browser, require/AMD, node

## Project Goals
* websocket/socket support for browser/node client
* fully tested with unit and integration tests
* coincident node/browser development
* coincident node/browser testing
* packaged for node and minified for browsers

## Building
Not implemented. The build process will be started using Grunt.

## Testing
Testing is done using Testacular/Jasmine

### Unit testing
On the command line call:
``` bash
    grunt testacular
```
This should fetch any necessary dependencies from the package.json and run testacular using Chrome.
Edit build/testacular.conf.js to test using a different set of browsers.

### Integration testing with logging-server
Not implemented