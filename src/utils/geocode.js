const axios = require("axios");

const geocode = (address, callback) => {
    var url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibWlyNDg2MiIsImEiOiJja2xreGxuaWUwbGdiMnZwNWIyOTZmMHQyIn0.JZbEbz4cjJVftjCdf-sFGA&limit=1`;

    axios.get(url).then(({data}) => {
            if (data.features.length === 0) {
                callback("Unable to find location. Try another search", undefined);
            } else {
                callback(undefined, {
                    latitude: data.features[0].center[1],
                    longitude: data.features[0].center[0],
                    location: data.features[0].place_name
                })
            }
    }).catch((err) => {
            if(err) callback('Unable to connect to location services', undefined)
    });
};

module.exports = geocode