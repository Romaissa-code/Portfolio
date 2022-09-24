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
// The work presentation functionality

const codeBtn=document.querySelectorAll(".code-btn");
const overlay=document.querySelector(".overlay"); 
const closeBtn=document.getElementById("closeBtn"); 

// const webLink =document.getElementById("webLink");
const siteLink=document.getElementById("siteLink");
const projectTitle=document.querySelector(".project-title"); 

let count =0 ; let position;

const left=document.getElementById("left"); 
const right=document.getElementById("right"); 
const img=document.getElementById("currentImg");

codeBtn.forEach((btn)=>{
   btn.addEventListener("click",(e)=>{
    const projectName=e.currentTarget.parentElement.dataset.title;

     content.forEach((item,index)=>{
       if(item.title==projectName){
      
        projectTitle.innerHTML=item.title; 
        //webLink.innerHTML=item.webLink;
        siteLink.innerHTML = item.title;
        siteLink.href = item.siteLink;
        position=index; 
        img.src=item.images[0].source;// to show the default image

       }
     })
    
    overlay.classList.add("show-overlay");
   })
})

closeBtn.addEventListener("click",()=>{
    overlay.classList.remove("show-overlay");
})



 function showPic(pic){
    img.src=pic[count].source;
}

let content = [
  {
    title: "Delivery Agency",
    siteLink:
      "https://romaissa-code.github.io/Romaissa-code.github.io-delivery/",
    images: [
      { source: "images/num1.png" },
      { source: "images/num2.png" },
      { source: "images/num3.png" },
    ],
    // keep in mind that the images need to have
    // the same width
  },
  {
    title: "Industrial Power Solution",
    siteLink: "https://romaissa-code.github.io/ips/",
    images: [
      { source: "IPS/ONE.PNG" },
      { source: "IPS/TWO.PNG" },
      { source: "IPS/THREE.PNG" },
      { source: "IPS/FOUR.PNG" },
    ],
  },
  {
    title: "eBooks",
    siteLink: "https://romaissa-code.github.io/ebook/",
    images: [
      { source: "ebook/one.png" },
      { source: "ebook/two.png" },
      { source: "ebook/three.png" },
      { source: "ebook/four.png" },
      { source: "ebook/five.png" },
      { source: "ebook/six.png" },
    ],
  },
];


left.addEventListener("click",()=>{
    count--;
    if(count<0) count=(content[position].images).length-1; 
    showPic(content[position].images);
   
})
right.addEventListener("click",()=>{
    count++;
    if(count>(content[position].images).length-1)  count=0;
    showPic(content[position].images);
   
})
//  used as a hover fot the contact button
const contact =document.querySelector(".contact");
const contact1 =document.querySelector(".contact1");
contact.addEventListener("mouseover",()=>{
    contact1.style.color= 'black';
})
contact.addEventListener("mouseout",()=>{
    contact1.style.color= '#486FF8';
})
