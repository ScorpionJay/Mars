module.exports = function(grunt) {

  // load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // time how long tasks. can help when optimizing build times
  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    // connect
    connect:{
      options:{
        port:9000,
        hostname:'localhost',
        livereload:35729
      },
      server:{
        options:{
           open:true,// auto open default bowser
           base:['app']
        }
      }
    },
    // watch
    watch:{
      livereload:{
    		options:{
    			livereload:'<%= connect.options.livereload %>' //this port must be same with the connect livereload port
    		},
    		// watch files
    		files:[
    			'app/*.html',
    			'app/css/{,*/}*.css',
    			'app/js/{,*/}*.js',
    			'app/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
    		]
	    }
    }

    // others tasks
    
  });

  // register task
  grunt.registerTask('serve',[
    'connect:server',
    'watch'
  ]);

};