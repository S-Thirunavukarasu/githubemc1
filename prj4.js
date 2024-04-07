//Menu Icons
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
};


//Active Links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Navbar Degsin
window.onscroll = () => {
    sections.forEach(sec => {
        let top  = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
let header = document.querySelector('.header');
header.classList.toggle('sticky',window.scrollY > 100);

//Remove Toggle Navbar Onclick
navbar.classList.remove('active');
}

//Swiper Degsin
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //Dark Mode
  let darkMode = document.querySelector('#darkMode-icon');
  darkMode.onclick = () => {
    document.body.classList.toggle('dark-mode');
  }

  //Scroll Property
  ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
  });

  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img img, .services-container, .testimonial-wrapper, .contact form', 
  { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
  ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });


  //Email Script
  // const form = document.querySelector('form');
  // const fullName = document.getElementById("name");
  // const email = document.getElementById("email");
  // const phone = document.getElementById("phone");
  // const subject = document.getElementById("subject");
  // const message = document.getElementById("message");

  // function sendEmail() {
  //   const bodyMessage = `Full Name: ${fullName.value}<br> 
  //   Email: ${email.value}<br> Phone: ${phone.value}<br> 
  //   Subject: ${subject.value}<br> Message:${message.value}`;
  //   Email.send({
  //     Host : "smtp.elasticemail.com",
  //     Username : "projectexample66@gmail.com",
  //     Password : "2F7FB38656B35C9CF66DF3EFA1EA71CEC77D",
  //     To : 'projectexample66@gmail.com',
  //     From : "projectexample66@gmail.com",
  //     Subject : subject.value,
  //     Body : bodyMessage
  // }).then(
  //   message => {
  //     if (message == "OK"){
  //       Swal.fire({
  //         title: "Success!",
  //         text: "Thanks for Feedback!",
  //         icon: "success"
  //       });
  //     }
  //   }
  // );
  // }

// function checkInput(){
//     const items = document.querySelectorAll(".item");
//     for(const item of items){
//       if(item.value == ""){
//         item.classList.add("error");
//         item.parentElement.classList.add("error");
//       }
//       item.addEventListener("keyup", () => {
//         if (item.value != "") {
//           item.classList.remove("error");
//           item.parentElement.classList.remove("error");
//         }
//         else{
//           item.classList.add("error");
//           item.parentElement.classList.add("error");
//         }
//       });
//     }
// }

  // form.addEventListener("submit",(e) => {
  //   e.preventDefault();
  //   sendEmail();
  // });
