// const mobile_nav=document.querySelector('.hamburger');
// const nav_header=document.querySelector('.less');
// const toggleNavbar=()=>
// {
//     nav_header.classList.toggle('active');
// }
// mobile_nav.addEventListener('click',()=>toggleNavbar());
const nav=document.querySelector('nav');
document.addEventListener('scroll',(e)=>{
  let offset=window.scrollY / 250;
  console.log(offset);
  if(offset>0)
  {
    nav.style.boxShadow=" 0px 2px 8px -3px rgba(0,0,0,0.35)";
  }
 else {
    nav.style.boxShadow = "none";
  }
});