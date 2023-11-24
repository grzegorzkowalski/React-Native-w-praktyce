import {API_key, weatherAPI, imageAPI, blind} from "./consts";

const getWeather = (callback, city) => {
    fetch(`${weatherAPI}?q=${city}&appid=${API_key}&units=metric`)
        .then(res => res.json())
        .then(re => callback(re));
}

const getImage = (callback, weather) => {
    fetch(`${imageAPI}&q=${weather.weather[0].main}&image_type=photo`)
        .then(res => res.json())
        .then(re => {
            if (re?.hits[0]?.largeImageURL) {
                callback(re?.hits[0]?.largeImageURL)
                console.log(re?.hits[0]?.largeImageURL)
            } else {
                callback(blind);
            }
        })
}

export {getWeather, getImage};