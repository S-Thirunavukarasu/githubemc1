var countinc = document.getElementById("count-val")
var entries = document.getElementById("text")
var count = 0
function print() {
    count = count + 1
    countinc.textContent=count
}
function save() {
    var two = count + "-"
    entries.textContent+=two
    countinc.textContent=0
    count = 0
}