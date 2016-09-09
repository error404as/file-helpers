var fs = require('fs');
var path = require('path');
var autoprefixer = require('autoprefixer');
var postcss = require('postcss');

var dir = 'css-prefixer/src';
var dir2 = 'css-prefixer/dist';

fs.readdir(dir, function(err, data){
	if (err){ console.log(err); return; }
	data = data.filter(function(itm){ return itm.match(/.css$/) });

	if(data.length){
		data.forEach(function(itm){

			fs.readFile(path.resolve(dir, itm),function(err,data){
				if(err){ console.log(err); return; }

				postcss([ autoprefixer ]).process(data.toString()).then(function (result) {
					result.warnings().forEach(function (warn) {
						console.warn(warn.toString());
					});

					fs.writeFile(path.resolve(dir2, itm), result.css, function(err){
						if(err){ console.log(err); return; }
						console.log(itm+' - converted successfully!');
					});
				});

			});
		});
	} else { console.log('No SCSS files found in '+dir); }
});


