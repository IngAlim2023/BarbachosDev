let logo = document.getElementById("logo-bar");
let nombre = document.getElementById("nombre");


nombre.addEventListener('click', ()=>{
    const animacion = logo.animate([
        {transform: "TranslateX(0)"},
        {transform: "TranslateX(5vw)"},
        {transform: "TranslateX(-5vw)"},
        {transform: "TranslateX(0)"}
    ],{
        easing: "linear",
        iterations: 1,
        duration: 2000
    });
    return animacion;
})