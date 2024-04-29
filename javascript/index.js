function updateTime() {
    // Montréal
    let montrealElement = document.querySelector("#montreal");
    if (montrealElement) {
        let montrealDateElement = montrealElement.querySelector(".date");
        let montrealTimeElement = montrealElement.querySelector(".time");
        let montrealTime = moment().tz("Canada/Eastern");

        montrealDateElement.innerHTML = montrealTime.format("dddd Do MMMM YYYY");
        montrealTimeElement.innerHTML = `${montrealTime.format("hh:mm:ss")} <small>${montrealTime.format("A")}</small>`;
    }

    // Chennai
    let chennaiElement = document.querySelector("#chennai");
    if (chennaiElement) {
        let chennaiDateElement = chennaiElement.querySelector(".date");
        let chennaiTimeElement = chennaiElement.querySelector(".time");
        let chennaiTime = moment().tz("Asia/Calcutta");

        chennaiDateElement.innerHTML = chennaiTime.format("dddd Do MMMM YYYY");
        chennaiTimeElement.innerHTML = `${chennaiTime.format("hh:mm:ss")} <small>${chennaiTime.format("A")}</small>`;
    }

    // Lyon
    let lyonElement = document.querySelector("#lyon");
    if (lyonElement) {
        let lyonDateElement = lyonElement.querySelector(".date");
        let lyonTimeElement = lyonElement.querySelector(".time");
        let lyonTime = moment().tz("Europe/Paris");

        lyonDateElement.innerHTML = lyonTime.format("dddd Do MMMM YYYY");
        lyonTimeElement.innerHTML = `${lyonTime.format("hh:mm:ss")} <small>${lyonTime.format("A")}</small>`;
    }

    // Yokohama    
    let yokohamaElement = document.querySelector("#yokohama");
    if (yokohamaElement) {
        let yokohamaDateElement = yokohamaElement.querySelector(".date");
        let yokohamaTimeElement = yokohamaElement.querySelector(".time");
        let yokohamaTime = moment().tz("Asia/Tokyo");

        yokohamaDateElement.innerHTML = yokohamaTime.format("dddd Do MMMM YYYY");
        yokohamaTimeElement.innerHTML = `${yokohamaTime.format("hh:mm:ss")} <small>${yokohamaTime.format("A")}</small>`;
    }
}

function updateCity(event) {
    setInterval(function() {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace('_', ' ').split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
    <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("dddd Do MMMM YYYY")}</div>
    </div>
        <div class="time">${cityTime.format("hh:mm:ss")} <small>${cityTime.format("A")}</small></div>
        </div>
        <br>
        <a href="/">Back to homepage</a>
        `;
    }, 1000);    
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);