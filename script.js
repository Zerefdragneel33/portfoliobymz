// typing effect
const text = "Freelancer | System Designer | Graphic Designer";
let i = 0;

function type(){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(type,100);
    }
}
type();

// back to top
let btn = document.getElementById("topBtn");

window.onscroll = function(){
    if(document.documentElement.scrollTop > 200){
        btn.style.display = "block";
    }else{
        btn.style.display = "none";
    }
};

btn.onclick = function(){
    window.scrollTo({top:0, behavior:"smooth"});
};

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});