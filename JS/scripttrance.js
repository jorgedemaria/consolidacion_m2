let imagenes = [
    {img: "css/img/fiestas/_1.jpg"},
    {img: "css/img/fiestas/_2.jpg"},
    {img: "css/img/fiestas/_3.jpg"},
    {img: "css/img/fiestas/_4.jpg"},
    {img: "css/img/fiestas/_5.jpg"},
    {img: "css/img/fiestas/_6.jpg"},
    {img: "css/img/fiestas/_7.jpg"},
    {img: "css/img/fiestas/_8.jpg"},
    {img: "css/img/fiestas/_9.jpg"},
    {img: "css/img/fiestas/_10.jpg"},
    {img: "css/img/fiestas/_11.jpg"},
    {img: "css/img/fiestas/_12.jpg"},
    {img: "css/img/fiestas/_13.jpg"},
    {img: "css/img/fiestas/_14.jpg"},
    {img: "css/img/fiestas/_15.jpg"},
    {img: "css/img/fiestas/_16.jpg"},
    {img: "css/img/fiestas/_17.jpg"},
    {img: "css/img/fiestas/_18.jpg"},
    {img: "css/img/fiestas/_19.jpg"},
    {img: "css/img/fiestas/_20.jpg"},
    {img: "css/img/fiestas/_21.jpg"},
    {img: "css/img/fiestas/_22.jpg"},
    {img: "css/img/fiestas/_23.jpg"},
    {img: "css/img/fiestas/_24.jpg"},
    {img: "css/img/fiestas/_25.jpg"},
]

let contador = 0
const contenedor = document.querySelector(".slideshow")
const overlay = document.querySelector(".overlay")
const galeria_imagenes = document.querySelectorAll(".gallery img")
const slideshow_imagenes = document.querySelector(".slideshow img")
const btn_cerrar = document.querySelector(".btn_cerrar")

contenedor.addEventListener("click", function (event){
    let atras = contenedor.querySelector(".btn_atras"),
        adelante = contenedor.querySelector(".btn_adelante"),
        img = contenedor.querySelector("img")
        tgt = event.target
    if (tgt == atras){
            if (contador > 0) {
                img.src = imagenes[contador - 1].img
            contador--
            } else {
                img.src = imagenes[imagenes.length - 1].img
                contador = iamgenes.length - 1
            }
        }  else if (tgt == adelante) {
            if (contador < imagenes.length - 1) {
                img.src = imagenes[contador + 1].img
                contador++
            } else {
                img.src = imagenes[0].img
                contador = 0
            }
        }
})

btn_cerrar.addEventListener("click", function(){
    overlay.style.visibility = "hidden"
})

function cerrarOverlay() {
    overlay.style.visibility = "hidden"
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        cerrarOverlay()
    }
})

Array.from(galeria_imagenes).forEach(img => {
    img.addEventListener("click", event => {
        const imagen_seleccionada = +event.target.dataset.imgMostrar
        slideshow_imagenes.src = imagenes[imagen_seleccionada].img
        contaador = imagen_seleccionada
        overlay.style.opacity = 1
        overlay.style.visibility = "visible"
    })
}

)


// TOGGLER 

const boton = document.getElementById("plus")
console.log(boton)
document.getElementById("plus").addEventListener("click", function(){
    document.getElementById("remove").style.display = "initial"
    document.getElementById("plus").style.display = "none"
})

document.getElementById("remove").addEventListener("click", function(){
    document.getElementById("remove").style.display = "none"
    document.getElementById("plus").style.display = "initial"
})