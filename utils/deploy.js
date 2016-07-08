'use strict';

var ghPages = require('gh-pages');
var path = require('path');


var config = {
  message: 'Publish DragnDrop'
};

ghPages.publish(path.join(__dirname, '../', 'public'), config, function(err) {
  if (err) { console.log(err); }
  console.log('Successfully Deployed to Github Pages'.green.bold);
});
