var tj = require("togeojson"),
  fs =  require("fs"),
  jsdom = require("jsdom").jsdom,
  multipart = require("multipart"),
  sys = require("sys"),
  request = require('request');

module.exports = function(req, res, next) {

  console.log(req);
  // get the temporary location of the file
  var tmp_path = req.files.kmlfile.path;
  console.log(tmp_path);

  var kml = jsdom(fs.readFileSync(tmp_path, 'utf8'));
  console.log("we are converting the file...");
  var converted_with_styles = tj.kml(kml, { styles: true });

  var converted = JSON.stringify(converted_with_styles);

  console.log(converted);

  var projName = req.body.projname;

  var contrivedObj = { "projectName" : projName, "geoJSON": converted };

  fs.unlink(tmp_path, function (err) {
    if (err) throw err;
    console.log('successfully deleted' + tmp_path);
  });

  console.log("About to Print the Body...........");


  console.log("This is what is going into the body: " + JSON.stringify( { "projectName" : projName, "geoJSON": converted } ));

  request.post({
    headers: {'content-type' : 'application/json'},
    url:     'http://localhost:9200/geotagger/jobmaps',
    body:    JSON.stringify( { "projectName" : projName, "geoJSON": converted } )
  }, function(error, response, body){
    console.log("This is the body:  " + body);
    console.log("This is the response:  " + response);
    console.log("This is the error:  " + error);
  });

  res.redirect('#/upload');

};