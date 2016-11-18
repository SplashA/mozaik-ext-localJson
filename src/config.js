var convict = require('convict');

var config = convict({
    json: {
        url: {
          doc:     'The JSON resource url.',
          default: 'foo',
          format:  String,
          env:     'JSON_RES_URL'
        },
    }
});

module.exports = config;