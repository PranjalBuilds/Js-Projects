const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

const time = document.querySelector('#time');

function setDate() {
    let now = new Date();
   
    let seconds = now.getSeconds(); 
    let secondsToDegrees = ((seconds / 60 ) * 360) + 90; 
    secondHand.style.transform = `rotate(${secondsToDegrees}deg)`;
   
    let minutes = now.getMinutes();
    let minutesToDegrees = ((minutes / 60 ) * 360) + 90; 
    minuteHand.style.transform = `rotate(${minutesToDegrees}deg)`;
    
    let hours = now.getHours(); 
    let hourToDegrees = ((hours / 12) * 360 + (minutes / 60) * 30) +90; 
    hoursHand.style.transform = `rotate(${hourToDegrees}deg)`;

    // console.log(seconds);
    // console.log(secondsToDegrees);
    
    // time.innerText  = `${hours} : ${minutes} : ${seconds}`; //3:5:7 (hms)
    time.innerText = `${String(hours).padStart(2, '0')} : ` +
                      `${String(minutes).padStart(2, '0')} : ` + 
                      `${String(seconds).padStart(2  , '0')}`; //03:05:07 (hms)
    
}

setInterval(setDate, 1000);
setDate();