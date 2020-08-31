

/* -------------------------------- 

// Comparative table of mortgage loans (Fourth block) 

-------------------------------- */

// First Arrow 

function tableFirstArrow() {
    var dots = document.getElementById("dots-first-arrow");
    var more = document.getElementById("more-first-arrow");
    var btn = document.getElementById("btn-first-arrow");

    if(dots.style.display === "none"){
        dots.style.display="inline";
        btn.innerHTML="<img src='../icons/down-arrow.png'>";
        more.style.display="none";
    } else {
        dots.style.display="none";
        btn.innerHTML="<img src='../icons/top-arrow.png'>";
        more.style.display="inline";
    }
}

// Second Arrow 

function tableSecondArrow() {
    var dots = document.getElementById("dots-second-arrow");
    var more = document.getElementById("more-second-arrow");
    var btn = document.getElementById("btn-second-arrow");

    if(dots.style.display === "none"){
        dots.style.display="inline";
        btn.innerHTML="<img src='../icons/down-arrow.png'>";
        more.style.display="none";
    } else {
        dots.style.display="none";
        btn.innerHTML="<img src='../icons/top-arrow.png'>";
        more.style.display="inline";
    }
}

// Third Arrow 

function tableThirdArrow() {
    var dots = document.getElementById("dots-third-arrow");
    var more = document.getElementById("more-third-arrow");
    var btn = document.getElementById("btn-third-arrow");

    if(dots.style.display === "none"){
        dots.style.display="inline";
        btn.innerHTML="<img src='../icons/down-arrow.png'>";
        more.style.display="none";
    } else {
        dots.style.display="none";
        btn.innerHTML="<img src='../icons/top-arrow.png'>";
        more.style.display="inline";
    }
}




/* -------------------------------- 

Mortgage in the primary market (The sixth unit)

-------------------------------- */



// First button in the section (Ипотека на первичном рынке)

function readMore() {
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btn = document.getElementById("btn");

    if(dots.style.display === "none"){
        dots.style.display="inline";
        btn.innerHTML="<img src='../icons/down-arrow.png'>";
        more.style.display="none";
    } else {
        dots.style.display="none";
        btn.innerHTML="<img src='../icons/top-arrow.png'>";
        more.style.display="inline";
    }
} 

// Second button in the section (Ипотека на первичном рынке)

function readMore2() {
    var dots = document.getElementById("dots2");
    var more = document.getElementById("more2");
    var btn = document.getElementById("btn2");

    if(dots.style.display === "none"){
        dots.style.display="inline";
        btn.innerHTML="<img src='../icons/down-arrow.png'>";
        more.style.display="none";
    } else {
        dots.style.display="none";
        btn.innerHTML="<img src='../icons/top-arrow.png'>";
        more.style.display="inline";
    }
} 