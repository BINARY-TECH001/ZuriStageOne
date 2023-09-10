let timeElement = document.getElementById("timeEl");
let dayElement = document.getElementById("dayEl");


function getTime(){
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    const currentTime = timeElement.textContent = `${addZero(hour)} : ${addZero(minutes)} : ${addZero(seconds)}`
}

function addZero(value){
    return value < 10 ? `0${value}` : value;
}

setInterval(getTime, 1000);


function getCurrentDay(){  
    let date = new Date();
    let days = [
        'Sunday',   
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday', 
        'Saturday',
    ]
    const today = days[date.getDay()];
    return today;

}

const currentDayOfTheweek = getCurrentDay();
dayElement.innerHTML = currentDayOfTheweek
