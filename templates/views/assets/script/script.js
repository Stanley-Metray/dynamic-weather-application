let date = new Date();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const dateTime = document.getElementById('dateTime');

let d, m, y, day;
let hours, minutes, AmOrPm, finalTime;

hours = date.getHours();
AmOrPm = hours >= 12 ? 'PM' : 'AM';
hours = (hours % 12) || 12;
hours = hours <= 9 ? '0' + hours : hours;
minutes = date.getMinutes();
finalTime = hours + ":" + minutes + " " + AmOrPm;
day = days[date.getDay()];
d = date.getDate();
m = months[date.getMonth()];
y = date.getFullYear();
dateTime.innerHTML = `${finalTime}, ${day} <br>
                        ${d}-${m}-${y}`;

setInterval(() => {
    date = new Date();
    hours = date.getHours();
    AmOrPm = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12) || 12;
    hours = hours <= 9 ? '0' + hours : hours;
    minutes = date.getMinutes();
    finalTime = hours + ":" + minutes + " " + AmOrPm;
    day = days[date.getDay()];
    d = date.getDate();
    m = months[date.getMonth()];
    y = date.getFullYear();
    dateTime.innerHTML = `${finalTime}, ${day} <br>
                        ${d}-${m}-${y}`;
}, (1000*6));



const wIcon = document.getElementsByClassName("wIcon")[0];
let climate = document.getElementById('climate').innerText;
const videoSource = document.getElementById("videoSource");

// console.log(videoSource)
if(climate=="Sunny")
{
    wIcon.innerHTML = '<i class="fas fa-sun"></i>';
    videoSource.setAttribute("src", "Sunny.mp4");
}
if(climate=="Clouds")
{
    wIcon.innerHTML = '<i class="fas fa-cloud-sun"></i>';
    videoSource.setAttribute("src", "Clouds.mp4");
}
if(climate=="Thunderstorm")
{
    wIcon.innerHTML='<i class="fas fa-bolt"></i>';
    videoSource.setAttribute("src", "Thunderstorm.mp4");
}
if(climate=="Drizzle")
{
    wIcon.innerHTML='<i class="fas fa-cloud-rain"></i>';
    videoSource.setAttribute("src", "Drizzle.mp4");
}
if(climate=="Rain")
{
    wIcon.innerHTML='<i class="fas fa-cloud-showers-heavy"></i>';
    videoSource.setAttribute("src", "Rain.mp4");
}
if(climate=="Snow")
{
    wIcon.innerHTML='<i class="fas fa-cloud-meatball"></i>';
    videoSource.setAttribute("src", "Snow.mp4");
}
if(climate=="Mist")
{
    wIcon.innerHTML='<i class="fas fa-smog"></i>';
    videoSource.setAttribute("src", "Mist.mp4");
}
if(climate=="Smoke")
{
    wIcon.innerHTML='<i class="fas fa-smog"></i>';
    videoSource.setAttribute("src", "Mist.mp4");
}
if(climate=="Haze")
{
    wIcon.innerHTML='<i class="fas fa-smog"></i>';
    videoSource.setAttribute("src", "Haze.mp4");
}
if(climate=="Dust")
{
    wIcon.innerHTML='<i class="fas fa-wind"></i>';
    videoSource.setAttribute("src", "Dust.mp4");
}
if(climate=="Fog")
{
    wIcon.innerHTML='<i class="fas fa-smog"></i>';
    videoSource.setAttribute("src", "Mist.mp4");
}
if(climate=="Sand")
{
    wIcon.innerHTML='<i class="fas fa-wind"></i>';
    videoSource.setAttribute("src", "Sand.mp4");
}
if(climate=="Squall")
{
    wIcon.innerHTML='<i class="fas fa-wind"></i>';
    videoSource.setAttribute("src", "Squall.mp4");
}
if(climate=="Squall")
{
    wIcon.innerHTML='<i class="fas fa-wind"></i>';
    videoSource.setAttribute("src", "Squall.mp4");
}
if(climate=="Tornado")
{
    wIcon.innerHTML='<i class="fas fa-wind"></i>';
    videoSource.setAttribute("src", "Tornado.mp4");
}
if(climate=="Clear")
{
    wIcon.innerHTML='<i class="fas fa-sun"></i>';
    videoSource.setAttribute("src", "Clear.mp4");
}


