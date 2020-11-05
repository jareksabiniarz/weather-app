const request = require ('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8fdeaab20c2d5d7cfca8abc683d27064&query=' + latitude + ',' + longitude

    request({url, json: true}, (error, { body }) => {         //first url is option/property name, second one is variable name, first argument of request is object
        if (error) {                                           //error is default property
              callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {         //if response.body.error property exists...
                callback('unable to find location', undefined)
        } else {
              callback(undefined, body.current.weather_descriptions[0] + '. There is ' + body.current.temperature + ' Celsius right now, it feels like ' + body.current.feelslike)
    
        }
    })  
}

module.exports = forecast