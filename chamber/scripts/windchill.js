let temp = 10;
let speed = 10;
let windChill;

if (temp <= 50 && speed > 3) {
    windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
    windChill = Math.round(windChill * 10)/10;
} else {
    windChill = "N/A";
}

htmlTemp = document.querySelector('#tempValue');
htmlTemp.textContent = temp;
htmlSpeed = document.querySelector('#speedValue');
htmlSpeed.textContent = speed;
htmlWindchill = document.querySelector('#windchillValue');
htmlWindchill.textContent = windChill;