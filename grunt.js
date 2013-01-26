module.exports = function(grunt) {
    var path = require('path')
      , config = createGruntConfig()

    loadTasks()
    grunt.initConfig(config)

    function loadTasks() {
        grunt.loadNpmTasks('grunt-bump')
        loadTestacularTask()
    }

    function loadTestacularTask() {
        grunt.loadNpmTasks('gruntacular')

        config.testacular = { unit : { configFile : './build/testacular.conf.js' } }
    }

    function createGruntConfig() {
        var basepath = path.join(__dirname, '..')
          , src = path.join(basepath, "src")
          , dest = path.join(__dirname, 'target')

        return { dirs : { src : basepath
                        , dest : dest
                        }
               }
    }
}