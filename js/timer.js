window.onload = function () {
    var start_timestamp = new Date("Oct 23, 2022 11:45:00 UTC");
    countUpFromTime(start_timestamp.getTime(), 'departure_from_boston');
};

function countUpFromTime(countFrom, id) {
    let now = new Date();
    let timeDifference = (now - countFrom);

    timeDifference /= 1000;

    let secs = Math.floor(timeDifference % 60);
    timeDifference /= 60;

    let mins = Math.floor(timeDifference % 60);
    timeDifference /= 60;

    let hours = Math.floor(timeDifference % 24);
    timeDifference /= 24;

    let days = Math.floor(timeDifference % 365);
    timeDifference /= 365;

    let years = Math.floor(timeDifference);

    document.getElementById('timerYears').innerHTML = years;
    document.getElementById('timerDays').innerHTML = days;
    document.getElementById('timerHours').innerHTML = hours;
    document.getElementById('timerMinutes').innerHTML = mins;
    document.getElementById('timerSeconds').innerHTML = secs;

    if (years === 1) {
        document.getElementById('timerYearsText').innerHTML = "Year"
    } else {
        document.getElementById('timerYearsText').innerHTML = "Year"
    }

    if (days === 1) {
        document.getElementById('timerDaysText').innerHTML = "Day"
    } else {
        document.getElementById('timerDaysText').innerHTML = "Days"
    }

    if (hours === 1) {
        document.getElementById('timerHoursText').innerHTML = "Hour"
    } else {
        document.getElementById('timerHoursText').innerHTML = "Hours"
    }

    if (mins === 1) {
        document.getElementById('timerMinutesText').innerHTML = "Minute"
    } else {
        document.getElementById('timerMinutesText').innerHTML = "Minutes"
    }

    if (secs === 1) {
        document.getElementById('timerSecondsText').innerHTML = "Second"
    } else {
        document.getElementById('timerSecondsText').innerHTML = "Seconds"
    }

    clearTimeout(countUpFromTime.interval);
    countUpFromTime.interval = setTimeout(function () {
        countUpFromTime(countFrom, id);
    }, 1000);
}