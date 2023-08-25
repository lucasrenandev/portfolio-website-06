/* ===== Strict mode ===== */
'use strict'

/* ===== Header sticky ===== */
const header = document.getElementById("header")
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 120)
})

/* ===== Responsive menu ===== */
const navBar = document.querySelector(".navbar")
const menuIcon = document.getElementById("menu-icon")
menuIcon.addEventListener("click", function() {
    navBar.classList.toggle("active")
    this.classList.toggle("bx-x")
})
window.addEventListener("scroll", function() {
    navBar.classList.remove("active")
    menuIcon.classList.remove("bx-x")
})