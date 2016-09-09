
//var source = '@import url(http://path/to/remote/styles);';

var fs = require('fs');
var path = require('path');
var CleanCSS = require('clean-css');

var dir = 'css-min';

fs.readdir(path.join(dir, 'src'), function(err, data){
	if (err){ console.log(err); return; }
	data = data.filter(function(itm){ return itm.match(/.css$/) });

	if(data.length){
		data.forEach(function(itm){

			fs.readFile(path.join(dir, 'src', itm),function(err,data){
				if(err){ console.log(err); return; }

				new CleanCSS().minify(data.toString(), function (err, minified) {
					if(err){ console.log(err); return; }

					fs.writeFile(path.join(dir, 'dist', itm), minified.styles, function(err){
						if(err){ console.log(err); return; }
						console.log(itm+' - converted successfully!');
					});
				});
			});
		});
	} else { console.log('No SCSS files found in '+dir); }
});

