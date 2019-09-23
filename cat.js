const fs = require('fs')

function cat(fileNames) {
    fileNames.forEach(fileName => {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                throw err;
            } else {
                process.stdout.write(data);
            }
        })
    })

    // process.stdout.write('\nprompt > ');
}

module.exports = cat
