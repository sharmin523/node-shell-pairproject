const request = require('request')

function curl(urlsArr) {
    urlsArr.forEach(url => {
        request(url, (_err, _response, body) => {
            process.stdout.write(body)
        })
    })
}

module.exports = curl
