// the nav bar functionality
const toggleBtn= document.querySelector(".bars"); 
const links= document.querySelector(".links"); 
const navBar=document.getElementsByClassName("navBar")[0]; 
const progress=document.querySelectorAll(".progress")

window.addEventListener("scroll",function(){
   const scrollHeight=window.pageYOffset;// it returns the height in which u have scrolled down
    const navHeight=navBar.getBoundingClientRect().height; 
    if(scrollHeight>navHeight) 
        {    navBar.classList.add("fixed-nav");
        
        }
    else
       { navBar.classList.remove("fixed-nav");}
 
 })

toggleBtn.addEventListener("click", function(){
    links.classList.toggle("show")
})


//  used as a hover for the contact button
const contact =document.querySelector(".contact");
const contact1 =document.querySelector(".contact1");
contact.addEventListener("mouseover",()=>{
    contact1.style.color= 'black';
})
contact.addEventListener("mouseout",()=>{
    contact1.style.color= '#486FF8';
})
