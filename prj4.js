document.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelector(".container")
    var header = document.querySelector(".header")
    var menuItem = container.querySelectorAll(".header > div")
    var tabBody = container.querySelector(".body")
    var tabBodyElements = container.querySelectorAll(".body > div")
    var indicator = container.querySelector(".indicator > div")
    
    menuItem.forEach((tab,index)=>{
        tab.addEventListener("click", function () {
            header.querySelector(".active").classList.remove("active")
            tab.classList.add("active")
            indicator.style.left = `${index*25}%`
            tabBody.querySelector(".active").classList.remove("active")
            tabBodyElements[index].classList.add("active")
        })
    })
})
