let windChill;
const urlLink = 'https://api.openweathermap.org/data/2.5/weather?id=3871336&appid=f728990ddb2748daab91237181ef16e9&units=imperial';

fetch(urlLink)
    .then((response) => response.json())
    .then((jsObject) => {
            console.log("jsObject: \n",jsObject);
            let temp = `${jsObject.main.temp}`;
            let htmlTemp = document.querySelector('#tempValue');
            htmlTemp.textContent = temp;
            let description = `Condition: ${jsObject.weather[0].description}`;
            let htmlCondition = document.querySelector('#conditionValue');
            htmlCondition.textContent = description;

            
            let speed = `${jsObject.wind.speed}`;
            let htmlSpeed = document.querySelector('#speedValue');
            htmlSpeed.textContent = speed;

            if (temp <= 50 && speed > 3) {
                windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
                windChill = Math.round(windChill * 10)/10;
            } else {
                windChill = "N/A";
            }
            let htmlWindchill = document.querySelector('#windchillValue');
            htmlWindchill.textContent = windChill;

            let imagesrc = `https://openweathermap.org/img/wn/${jsObject.weather[0].icon}.png`;
            console.log("imagesrc: ", imagesrc);
            let htmlImg = document.querySelector('#imageValue');
            htmlImg.src = imagesrc;
        }
    )
;






