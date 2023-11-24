import {API_key, weatherAPI, blind} from "./consts";

const getWeather = (callback, city) => {
    fetch(`${weatherAPI}?q=${city}&appid=${API_key}&units=metric`)
        .then(res => res.json())
        .then(re => callback(re));
}

const getImage = (callback, city) => {
    fetch(`${imageAPI}&q=${city}+${weather.weather[0].main}&image_type=photo`)
        .then(res => res.json())
        .then(re => {
            if (re?.hits[0]?.largeImageURL) {
                callback(re?.hits[0]?.largeImageURL)
            } else {
                callback(blind);
            }
        })
}

export {getWeather, getImage};