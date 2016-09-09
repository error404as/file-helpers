
var fs = require('fs');
var path = require('path');
var UglifyJS = require("uglify-js");

var dir = 'js-uglify';

fs.readdir(path.join(dir, 'src'), function(err, data){
	if (err){ console.log(err); return; }
	data = data.filter(function(itm){ return itm.match(/.js$/) });

	if(data.length){
		data.forEach(function(itm){

			var result = UglifyJS.minify(path.join(dir, 'src', itm));

			fs.writeFile(path.join(dir, 'dist', itm), result.code, function(err){
				if(err){ console.log(err); return; }
				console.log(itm+' - converted successfully!');
			});

		});
	} else { console.log('No JS files found in '+dir); }
});


