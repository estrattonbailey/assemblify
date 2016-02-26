var app,
    express = require('express'),
    contentful = require('./src/contentful.js');

app = express();

app.set('port', process.env.PORT || 5000);

app.get('/', function(request, response) {
  response.send('public/index');
  response.send(contentful());
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

