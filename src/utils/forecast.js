const axios = require("axios");

const forecast = (lat, long, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=fdd3a74c2d9635bb130cc5624688bcf2`;

    axios
        .get(url)
        .then(({ data }) => {
            callback(
                undefined,
                `${data.current.weather[0].description}. It is currently ${data.current.temp} degrees out. The high today is ${data.daily[0].temp.max}ºC with a low of ${data.daily[0].temp.min}ºC There is ${data.minutely[0].precipitation}% chance of rain `
            );
        })
        .catch((err) => {
            if (err) callback("Unable to connect to weather services", undefined);
            if (err.response.data.cod) callback("Cannot find this location", undefined);
        });
};

module.exports = forecast;
