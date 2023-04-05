
/* ------Nav------- */
const navToogle =document.querySelector(".nav-toggle");
navToogle.addEventListener("click" , ()=>{
    hideSection();
    toogleNav();
    document.body.classList.toggle("hide-scrolling");
}); 
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toogleNav(){
    document.querySelector(".header").classList.toggle("active")
}
document.addEventListener("click" , (e)=>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        navToogle.classList.add("hide");
        if (e.target.classList.contains("nav-item")){
            toogleNav();
            document.body.classList.add("hide-scrolling");
        }
        else{
            hideSection();
        }
        setTimeout(() =>{
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToogle.classList.remove("hide");
        }, 500)
    }
});



/* ------About Tabs------- */
const tabsContainer = document.querySelector(".about-tabs"),
      aboutSection  = document.querySelector(".about-section");

tabsContainer.addEventListener("click" , (e)=>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");    
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active"); 
    }
});



/* -------Portfolio Items POPup------- */
document.addEventListener("click" , (e)=>{
    if(e.target.classList.contains("view-project-btn")){
        togglePortfolioPop();
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioItemsDetails(e.target.parentElement);
    }
});

document.addEventListener("click" , (e)=>{
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPop();
    }
});


function togglePortfolioPop(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click",togglePortfolioPop);

function portfolioItemsDetails(portfolioItem){

    document.querySelector(".pp-thumb img").src = 
    portfolioItem.querySelector(".portfolio-item-thumb img").src ;

    document.querySelector(".pp-header h3").innerHTML = 
    portfolioItem.querySelector(".portfolio-item-title").innerHTML ;

    document.querySelector(".pp-body").innerHTML = 
    portfolioItem.querySelector(".portfolio-item-details").innerHTML ;
 
}






