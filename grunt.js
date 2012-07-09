module.exports = function(grunt){

grunt.initConfig({

stylus: {
  compile: {
    options: {
      compress: true,
      paths: [
        require('nib').path
      ]
    },
    files: {
      'styles.css': ['src/style/main.styl']
    }
  }
},

coffee: {
  src: {
    options: {
      bare: true
    },
    files: {
      'src/script/main.js': 'src/script/main.coffee'
    }
  }
},

requirejs: {
  compile: {
    options: {
      baseUrl: 'src/script',
      paths: {
        'jquery': 'lib/jquery-1.7.2.min'
      },
      name: 'main',
      out: 'scripts.js'
    }
  }
},

clean: ['src/script/main.js'],

watch: {
  files: 'src/**/*',
  tasks: 'defaultWatch'
}

});

grunt.loadNpmTasks('grunt-contrib');

grunt.registerTask('default',      'stylus coffee requirejs clean');
grunt.registerTask('defaultWatch', 'stylus coffee clean');

};