var express = require('express');
var router = express.Router();
var request = require('request-promise');
var debug = require('debug')('myapp:routes');

/* GET characters listing. */
router.get('/', function(request, response, next) {
  debug('Doing a request to the API', `${process.env.MARVEL_API_URL}/v1/public/events`);
  request({
    url: `${process.env.MARVEL_API_URL}/v1/public/events`,
    json: true,
    qs: {
    }
  }).then(result => {
    debug('Response from API received');
    debug(result);

    response.json(result);
  })
});

// la respuesta de la ruta debería tener el siguiente formato



module.exports = router;