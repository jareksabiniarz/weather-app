const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const place = process.argv[2]

if (!place) {
      return console.log('Give the place!')
}

geocode(place, (error, { latitude, longitude, location } = {}) => {           // callback has two arguments typically, one is always undefined

      if (error) {
            return console.log(error)                 //return stops executing the program if error occures
      }
      // console.log('Error: ', error)
      // console.log('Data: ', data)
      forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                  return console.log(error)
            }

            // console.log('Error', error)
            // console.log('Data', data)

            console.log(location)
            console.log(forecastData)
          })
})

