// api key: d0150bea7061ca9e55a2422c1d332ccb
// base api URL: http://api.ipstack.com/
// example regular: http://api.ipstack.com/178.150.67.219?access_key=d0150bea7061ca9e55a2422c1d332ccb
// example request: http://api.ipstack.com/check?access_key=YOUR_ACCESS_KEY

//Weather API:
//http://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=bf60c7cca9ba7d27aa20f720b3d78bec

function getData (url) {
    return new Promise(
        function(resolve, reject) {
            let request = new XMLHttpRequest();
            let data = '';
            request.open('GET',url);
            request.onreadystatechange = function() {
                if (request.readyState === 4) {
                    if ((request.status === 200)) {
                        data = JSON.parse(this.response);
                        resolve(data);
                    } else {
                        reject(new Error());
                    }
                }
            }
            request.send();
        }
    )
}

let locationURL = "http://api.ipstack.com/check?access_key=d0150bea7061ca9e55a2422c1d332ccb";

getData(locationURL).then((data) => {
    let weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=bf60c7cca9ba7d27aa20f720b3d78bec`;
    getData(weatherURL).then((data) => {
        console.log(data);
        console.log(`You are in: ${data.name}`);
        console.log(`Temperature is: ${data.main.temp - 273.15} Celcius`);
        console.log(`Weather description: ${data.weather[0].description}`);
        $('.city').html(`You are in: ${data.name}`);
        $('.temperature').html(`Temperature is: ${data.main.temp - 273.15} Celcius`);
        $('.weather').html(`Weather description: ${data.weather[0].description}`);
    });
    return data.city;
    }, (error) =>{
        console.log(`we have an error: ${error}`);
        return error;
});




