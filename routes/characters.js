var express = require('express');
var router = express.Router();
var request = require('request-promise');
var debug = require('debug')('myapp:routess');

// completar acá con la ruta para listar caracteres
// la respuesta de la ruta debería tener el siguiente formato
// [
//   {
//     "id": 1011334,
//     "name": "3-D Man",
//     "description": "",
//     "modified": "2014-04-29T14:18:17-0400",
//     "thumbnail": {
//       "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
//       "extension": "jpg"
//     },
//     "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
//     "comics": {...},
//     "series": {...},
//     "stories": {...},
//     "events": {...},
//     "urls": [...]
//   },
//   {
//      ...
//   }
// ]

module.exports = router;