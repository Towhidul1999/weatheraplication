var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var cityName = document.querySelector('.name')
var temp = document.querySelector('.temp')
var desc = document.querySelector('.desc')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=5a2651eec46dc2bb89fb76b70e73165d')
        .then(response => response.json())
        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var tempConvertedValue = (tempValue-32)/1.8;
            var descValue = data['weather']['0']['description'];

            cityName.innerHTML = nameValue;
            temp.innerHTML = tempConvertedValue + ' ' + 'C';
            desc.innerHTML = descValue;
        })
});