const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiamFyZWtzYWJpbmlhcnoiLCJhIjoiY2tncWs0Nmg1MDV3cTJycXdtZGg5eGs1MSJ9.ANXNmeVOXI40qm5Pv_wJxA&limit=1'
    //encodeURIComponent is a func that encodes special characters to void app crash
    request({url, json: true}, (error, { body }) => {
          if (error) {
                callback('Unable to connect to location services!', undefined)   //the data is unefined since the error occured
          } else if (body.features.length === 0) {
                callback('Unable to find location!', undefined)
          } else {
                callback(undefined, {
                      latitude: body.features[0].center[1],
                      longitude: body.features[0].center[0],
                      location: body.features[0].place_name
                })
          }
    })

}

module.exports = geocode