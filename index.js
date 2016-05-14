var mongo = require('mongoose');
	mongo.connect(process.env.MONGODB_URI);
	
var doc = mongo.model('Url', {_id: String, url: String});

require('http').createServer(function(req, res) {
	var url = req.url;
	if ( url.length > 1 ) {
		if (url.substring(1,5) == 'new/') res.end(JSON.stringify(getJson(url.substring(5))));
		else getDirect(res, url.substring(1));
	}
	else getHtml(res);
})
.listen(process.env.PORT);

function getDirect(res, id) {
	doc.find({_id: id}).limit(1).exec(function(err, data) {
		if (err) throw err;
		if (data.length > 0) res.writeHead(302, {'Location': data[0].url});
		else res.write(JSON.stringify({error: 404}));
		res.end();
	});
}

function getJson(url) {
	if ( isUrl(url) ) {
		var id = require('shortid').generate();
		new doc({_id: id, url: url}).save();
		return {original_url: url, short_url: process.env.APP_URL + id};
	}
	else return {error: 'Wrong url format.'};
}

function getHtml(res) {
	require('fs').readFile('public/url-shortener.html', function(err, data) {
		if (err) throw err;
		res.end(data);
	});
}

function isUrl(url) {
	var path  = url.split('/');
	return path[0].match(/(https?|ftp):/) && path[1] == '' && path[2].match(/^([a-z0-9-]+\.)+[a-z]{2,7}(:\d+)?$/i);
}
