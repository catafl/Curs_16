

function reqListener () {
    // debugger;
    var data = JSON.parse(this.responseText);
    // console.log(this.responseText);
    var resultElement = document.getElementById("result");

    console.log(resultElement);
    resultElement.innerHTML = data.activity;
    // console.log(data.value.joke);
    // console.log(data.TWS_GUST_MAX.VALUE)
    console.log(data.activity);
}
  
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
// oReq.open("GET", "https://api.oceandrivers.com:443/v1.0/getWeatherDisplay/cnarenal/?period=latestdata");

oReq.open("GET", "https://www.boredapi.com/api/activity?type=recreational");
// oReq.open("GET", "https://api.chucknorris.io/jokes/random");
oReq.send();