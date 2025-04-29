// function setActiveNavLink() {
//     const currentPage = window.location.pathname.split("/").pop();
//     const navLinks = document.querySelectorAll(".nav-link");

//     navLinks.forEach(link => {
//       const hrefPage = link.getAttribute("href").split("/").pop();
//       if (hrefPage === currentPage || (hrefPage === "" && currentPage === "")) {
//         link.classList.add("active");
//       } else {
//         link.classList.remove("active");
//       }
//     });
//   }

//   document.addEventListener("DOMContentLoaded", setActiveNavLink);