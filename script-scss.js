var fs = require('fs');
var path = require('path');
var sass = require('node-sass');

var dir = 'css-scss';

fs.readdir(dir, function(err, data){
	if (err){ console.log(err); return; }
	data = data.filter(function(itm){ return itm.match(/.scss$/) });

	if(data.length){
		data.forEach(function(itm){
			sass.render({
				file: path.resolve(dir, itm),
				indentWidth: 4, // default: 2
				outputStyle: 'expanded' // Default: nested Values: nested, expanded, compact, compressed
			}, function(err, result) {
				if(err){ console.log(err); return; }

				fs.writeFile(path.resolve(dir, itm.replace('.scss','.css')), result.css, function(err){
					if(!err){
						console.log(itm + ' - converted successfully!');
					}
				});

			});

		});
	} else { console.log('No SCSS files found in '+dir); }
});
