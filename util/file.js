const path = require('path');
const fs = require('fs');

const clearImage = filePath => {
    filePath = path.join(__dirname, '../' , filePath);
    // filePath = path.join('C:', 'Users/DELL/Documents/Messaging App with GraphQL', 'images');
    fs.unlink(filePath, err => console.log(err));
};

exports.clearImage = clearImage;