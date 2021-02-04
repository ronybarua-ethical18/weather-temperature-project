const getName = document.getElementById('get-name');
getName.addEventListener('click', function () {
    let getCityNames = document.getElementById('get-city-name').value;
    document.getElementById('city-name').innerText = getCityNames;

    // calling api 
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + getCityNames + '&appid=5b329556758957bce9791abee2d9f566&units=metric')
        .then(response => response.json())
        .then(data => {
            document.getElementById('temperature').innerText = data.main.temp;
            document.getElementById('sky-condition').innerText = data.weather[0].main;
            let iconId = data.weather[0].icon;
            document.getElementById('weather-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${iconId}@2x.png"/>`;
            const icon = data.weather[0].id;
        })
});
