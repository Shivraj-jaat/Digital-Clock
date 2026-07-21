let hour = document.getElementById("hour")
let minute = document.getElementById("minute")
let second = document.getElementById("second")
let indicator = document.getElementById("time-indicator")
let date = document.getElementById("date")
let day = document.getElementById("day")
let month = document.getElementById("month")
let year = document.getElementById("year")
let modeBtn = document.getElementById("mode-btn")
let parent = document.getElementById("parent")
let formatBtn = document.getElementById("format-btn")

let now = new Date();

const updateTime = () => {
    now = new Date();

    if (isFormat) {
        hour.innerHTML = now.getHours() % 12 || 12;
        formatBtn.innerHTML = "12 hr"
    } else {
        hour.innerHTML = String(now.getHours()).padStart(2, "0");
        formatBtn.innerHTML = "24 hr"
    }

    minute.innerHTML = String(now.getMinutes()).padStart(2, "0");

    second.innerHTML = String(now.getSeconds()).padStart(2, "0");

}

const updateIndicator = () => {
    indicator.innerHTML = now.getHours() >= 12 ? "P.M." : "A.M."
}

const updateDay = () => {
    let weekDay = now.getDay();
    switch (weekDay) {
        case 0:
            day.innerHTML = "Sunday"
            break;

        case 1:
            day.innerHTML = "Monday"
            break;

        case 2:
            day.innerHTML = "Tuesday"
            break;

        case 3:
            day.innerHTML = "Wednesday"
            break;

        case 4:
            day.innerHTML = "Thursday"
            break;

        case 5:
            day.innerHTML = "Friday"
            break;

        case 6:
            day.innerHTML = "Saturday"
            break;

        default:
            break;
    }

    date.innerHTML = now.getDate();

    let monthidx = now.getMonth();
    switch (monthidx) {
        case 0:
            month.innerHTML = "January"
            break;

        case 1:
            month.innerHTML = "February"
            break;

        case 2:
            month.innerHTML = "March"
            break;

        case 3:
            month.innerHTML = "April"
            break;

        case 4:
            month.innerHTML = "May"
            break;

        case 5:
            month.innerHTML = "June"
            break;

        case 6:
            month.innerHTML = "July"
            break;

        case 7:
            month.innerHTML = "August"
            break;

        case 8:
            month.innerHTML = "September"
            break;

        case 9:
            month.innerHTML = "October"
            break;

        case 10:
            month.innerHTML = "November"
            break;

        case 11:
            month.innerHTML = "December"
            break;

        default:
            break;
    }

    year.innerHTML = now.getFullYear();
}

setInterval(() => {

    updateTime();

    updateDay();

    updateIndicator();

}, 1000);


let isMode = true;
modeBtn.addEventListener("click", () => {
    parent.classList.toggle("mode")
    isMode = !isMode;
    isMode == true ? modeBtn.innerHTML = "Light" : modeBtn.innerHTML = "Dark"

})

let isFormat = true;
formatBtn.addEventListener("click", () => {
    isFormat = !isFormat;
})