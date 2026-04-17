let hour = document.querySelector("#time-h")
let minute = document.querySelector("#time-m")
let second = document.querySelector("#time-s")
let amPm = document.querySelector(".am-pm")

setInterval(() => {
    hour.innerHTML = new Date().getHours();
    minute.innerHTML = new Date().getMinutes();
    second.innerHTML = new Date().getSeconds();
}, 1000);


