"use strict"
const ul = document.querySelector("ul");

function frames(){
    const animacion = ul.animate([
        {transform: "TransLateY(0px)"},
        {transform: "TransLateX(-100px)"}
    ],{
        easing: "linear",
        interation: 1,
        duration: 400
    });

    return animacion.finished;
}

function displace(){
    frames()
    .then((res)=>{
        console.log(res);
        ul.appendChild(document.querySelectorAll("ul > li")[0])
    })
}

setInterval(() => {
    displace();
}, 1000);