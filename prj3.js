var hrs = document.getElementById("hrs")
var min = document.getElementById("min")
var sec = document.getElementById("sec")

setInterval(() => {
    var curtime = new Date();

hrs.innerHTML = curtime.getHours()
min.innerHTML = curtime.getMinutes()
sec.innerHTML = curtime.getSeconds()
}, 1000);

