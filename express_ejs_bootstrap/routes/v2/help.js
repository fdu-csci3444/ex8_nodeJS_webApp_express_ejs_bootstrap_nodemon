/**
 * 
 * NOTE ilker, you can test above routes with below; (NOTE -d passes data or dataFile to POST and PUT )
 * curl -i "http://localhost:8014/api/v2/help"
 * curl -i "http://localhost:8014/api/v2/help" -X GET
 * curl -i "http://localhost:8014/api/v2/help" -X POST -d "param1=value1&param2=value2"
 * curl -i "http://localhost:8014/api/v2/help" -X PUT  -d "param1=value1&param2=value2"
 * curl -i "http://localhost:8014/api/v2/help" -X PUT  -d "@dataFile.txt"
 * curl -i "http://localhost:8014/api/v2/help" -X PUT  -d "@dataFile.json"
 * curl -i "http://localhost:8014/api/v2/help" -X POST -d '{"param1":"value1", "param2":"value2"}' -H "Content-Type: application/json"
 */
var express = require('express');

var helpRouter = express.Router();
helpRouter.route('/help')
    .get((request, response) => { response.send('<h3>/api/v2/help got GET - text/html directly returned from server.js</h3>'); })
    .post((request, response) => { response.send('<h3>/api/v2/help got POST - text/html directly returned from server.js</h3>'); })
    .put((request, response) => { response.send('<h3>/api/v2/help got PUT - text/html directly returned from server.js</h3>'); });

module.exports = helpRouter;