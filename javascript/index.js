function updateTime() {
    // Montréal
    let montrealElement = document.querySelector("#montreal");
    let montrealDateElement = montrealElement.querySelector(".date");
    let montrealTimeElement = montrealElement.querySelector(".time");
    let montrealTime = moment().tz("Canada/Eastern");
    
    montrealDateElement.innerHTML = moment().format("dddd Do MMMM YYYY");
    montrealTimeElement.innerHTML = `${montrealTime.format("hh:mm:ss")} <small>${montrealTime.format("A")}</small>`;
    
    // Chennai
    let chennaiElement = document.querySelector("#chennai");
    let chennaiDateElement = chennaiElement.querySelector(".date");
    let chennaiTimeElement = chennaiElement.querySelector(".time");
    let chennaiTime = moment().tz("Asia/Calcutta");
    
    chennaiDateElement.innerHTML = moment().format("dddd Do MMMM YYYY");
    chennaiTimeElement.innerHTML = `${chennaiTime.format("hh:mm:ss")} <small>${chennaiTime.format("A")}</small>`;
    
    // Lyon
    let lyonElement = document.querySelector("#lyon");
    let lyonDateElement = lyonElement.querySelector(".date");
    let lyonTimeElement = lyonElement.querySelector(".time");
    let lyonTime = moment().tz("Europe/Paris");
    
    lyonDateElement.innerHTML = moment().format("dddd Do MMMM YYYY");
    lyonTimeElement.innerHTML = `${lyonTime.format("hh:mm:ss")} <small>${lyonTime.format("A")}</small>`;
    
    // Yokohama
    
    let yokohamaElement = document.querySelector("#yokohama");
    let yokohamaDateElement = yokohamaElement.querySelector(".date");
    let yokohamaTimeElement = yokohamaElement.querySelector(".time");
    let yokohamaTime = moment().tz("Asia/Tokyo");
    
    yokohamaDateElement.innerHTML = moment().format("dddd Do MMMM YYYY");
    yokohamaTimeElement.innerHTML = `${yokohamaTime.format("hh:mm:ss")} <small>${yokohamaTime.format("A")}</small>`;
}

updateTime();
setInterval(updateTime,1000);