var fs = require('fs');
var path = require('path');
var autoprefixer = require('autoprefixer');
var postcss = require('postcss');

var dir = 'css-prefixer';

fs.readdir(path.join(dir, 'src'), function(err, data){
	if (err){ console.log(err); return; }
	data = data.filter(function(itm){ return itm.match(/.css$/) });

	if(data.length){
		data.forEach(function(itm){

			fs.readFile(path.join(dir, 'src', itm),function(err,data){
				if(err){ console.log(err); return; }

				postcss([ autoprefixer ]).process(data.toString()).then(function (result) {
					result.warnings().forEach(function (warn) {
						console.warn(warn.toString());
					});

					fs.writeFile(path.join(dir, 'dist', itm), result.css, function(err){
						if(err){ console.log(err); return; }
						console.log(itm+' - converted successfully!');
					});
				});

			});
		});
	} else { console.log('No CSS files found in '+dir); }
});


