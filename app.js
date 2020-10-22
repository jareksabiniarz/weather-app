const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=8fdeaab20c2d5d7cfca8abc683d27064&query=52.042009,23.100170&units=s'

request({url: url, json: true}, (error, response) => {         //first url is option/property name, second one is variable name, first argument of request is object
      //const data =JSON.parse(response.body)        //callback func has two arguments for two events
      //console.log(data.current)
      //console.log(response.body.current)

      console.log(response.body.current.weather_descriptions[0] + ' There is ' + response.body.current.temperature + ' Kelwins right now, it feels like ' + response.body.current.feelslike)
})                 