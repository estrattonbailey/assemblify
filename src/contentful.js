var util = require('util');

var client,
    config = require('../site.config.json'),
    contentful = require('contentful');


function Test(){
  client = contentful.createClient({
    space: config.space,
    accessToken: config.accessToken 
  });

  var res = '';

  client.entries()
    .then(function (entries) {
      // log the title for all the entries that might have it
      entries.forEach(function (entry) {
        if(entry.fields.title) {
          res += entry.fields.title
          console.log(entry.fields.title)
        }
      })
      resolve(res)
    }, function(error){
      console.log('Error')
      console.log(error)
    })

  return res;
}

module.exports = Test;
