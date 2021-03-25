const { v4: uuidv4 } = require('uuid');
function generateUUID() {
    return uuidv4() // returns uuid/v4 uuid
}

module.exports = {generateUUID}