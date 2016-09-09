var fs = require('fs');
var path = require('path');
var less = require('less');

var dir = 'css-less';
fs.readdir(dir, function(err, data){
	if (err){ console.log(err); return; }
	data = data.filter(function(itm){ return itm.match(/.less$/) });

	if(data.length){
		data.forEach(function(itm){

			fs.readFile(path.resolve(dir, itm),function(err,data){
				if(err){ console.log(err); return; }

				less.render(data.toString(), {
					paths: ['.'],  // Specify search paths for @import directives
					compress: false
				},
				function (err, result) {
					if(err){ console.log(err); return; }

					fs.writeFile(path.resolve(dir, itm.replace('.less','.css')), result.css, function(err){
						if(err){ console.log(err); return; }
						console.log(itm+' - converted successfully!');
					});
				});
			});
		});
	} else { console.log('No LESS files found in '+dir); }
});

