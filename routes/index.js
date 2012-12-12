
/*
 * GET home page.
 */
exports.index = function(req, res){
  var fs = require('fs');
  var timings = fs.readFileSync('./transTimings.txt').toString().split('\n');
  var imageArray = fs.readdirSync('../Images').toString()


  res.render('index', { 
      title: 'Image Visualizer', 
      imgURL: '/images/squid.png',
      scriptURL: '/javascripts/imageController.js',
      audioURL: '/music/glitch.ogg',
      Timings: timings,
      ImageArray: imageArray,
      });
};
