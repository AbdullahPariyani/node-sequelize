const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
require('./Configs/globals'); // GLOBAL SETTINGS FILES

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use((req, res, next) => {
    const ResponseHandler = require('./Configs/responseHandler')
    res.handler = new ResponseHandler(req, res);
    next()
});

require('./app/Router')(server);

server.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err)
    }
    res.handler.serverError(err)
})

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});