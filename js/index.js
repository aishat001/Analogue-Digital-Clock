function clock() {
    var date = new Date();

    //calender
    var week = [ 'Sun','Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    var month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var dayInWeek = week[date.getDay()];
    var dayInMonth = date.getDate();
    var month = month[date.getMonth()];
    var year = date.getFullYear();

    document.querySelector('.dayW').innerText = dayInWeek;
    document.querySelector('.dayM').innerText = dayInMonth;
    document.querySelector('.month').innerText = month;
    document.querySelector('.year').innerText = year;


//DIGITAL AND ANALOGUE
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();

    var secondHand = seconds * 360 / 60;
    var minuteHand = (minutes * 360 / 60) + (seconds * (360 / 60)/60);
    var hourHand = (hours * 360 / 12) + (minutes * (360 / 60) / 12);

    hourHand = hourHand + (3 / 360);
    minuteHand = minuteHand + (6 / 60);
    secondHand = secondHand + 6;


    document.querySelector('.sechand').style.transform = `rotate(${secondHand}deg)`;
    document.querySelector('.minhand').style.transform = `rotate(${minuteHand}deg)`;
    document.querySelector('.hrhand').style.transform = `rotate(${hourHand}deg)`;

    document.querySelector('.dSecond').innerText = seconds;
    document.querySelector('.dMinute').innerText = minutes;
    document.querySelector('.dHour').innerText = hours;

}
setInterval(clock, 1000);