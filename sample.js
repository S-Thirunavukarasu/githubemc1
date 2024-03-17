var closebtn = document.querySelector(".close-btn")
var sidebar = document.querySelector(".side-bar")
closebtn.addEventListener("click",function(){
    sidebar.style.left="-300px"
})

var menubtn = document.querySelector(".menu-btn")
var sidebar = document.querySelector(".side-bar")
menubtn.addEventListener("click",function(){
    sidebar.style.left="0"
})
