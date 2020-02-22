const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/b6ccf957857217d05d747431b6742b01/'+ longitude + ',' + latitude
  
    request({ url, json: true}, (error, { body }) => {
      if(error) {
        callback('Unable to connect to Weather services!!', undefined)
      }
      else if(body.error) {
        callback('Unable to find location!!', undefined)
      }
      else {
        callback(undefined, body.daily.data[0].summary + ' It is currently '+ body.currently.temperature + ' degrees out. There is a '+ body.currently.precipProbability +'% chance of rain.')
      }
    })
}

module.exports = forecast