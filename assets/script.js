var navItems = document.querySelectorAll(".navbar-nav.bg-dark .nav-item.nav-link");
 
document.querySelector(".navbar-toggler").onlick = function(){
    document.querySelector(".navbar-collapse").classList.add("show")
   }

navItems.forEach((navItem)=>{
   navItem.addEventListener("click",()=>{
       document.querySelector(".navbar-collapse").classList.remove("show")
   })
})