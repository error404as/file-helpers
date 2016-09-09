
var fs = require('fs');
var path = require('path');
var babel = require("babel-core")

var dir = 'js-babel';

fs.readdir(path.join(dir, 'src'), function(err, data){
	if (err){ console.log(err); return; }
	data = data.filter(function(itm){ return itm.match(/.js$/) });

	if(data.length){
		data.forEach(function(itm){

			fs.readFile(path.join(dir, 'src', itm),function(err,data){
				if(err){ console.log(err); return; }

				var result = babel.transform(data.toString(), {
					presets: ["es2015"]
				});

				fs.writeFile(path.join(dir, 'dist', itm), result.code, function(err){
					if(err){ console.log(err); return; }
					console.log(itm+' - converted successfully!');
				});

			});

		});
	} else { console.log('No JS files found in '+dir); }
});

