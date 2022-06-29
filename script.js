/*function myFunction() {
  var x = document.getElementById("tnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}*/
/*const hambug = document.querySelector("i.fa-solid.fa-bars::before");
const navMenu = document.querySelectorAll(".topnav");

hambug.addEventListener("click", () => {
  //hambug.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySeclectorAll("navLink").forEach(n => n.addEventListener("click", () => {
  //hambug.classList.remove("active");
  navMenu.classList.remove("active");
}))*/

const showMenu=(toggleId, navId)=> {
    const toggle=document.getElementById(toggleId),
    nav=document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', ()=> {
                nav.classList.toggle('show');
            })
    }
}

showMenu('menu', 'tnav');

const navLi=document.querySelectorAll('navLink');

function linkAction() {
    const navMen=document.getElementById('tnav');
    navMen.classList.remove('show')
}

navLi.forEach(n=> n.addEventListener('click', linkAction));