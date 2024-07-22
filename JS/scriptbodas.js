let imagenes = [
    {img: "css/img/bodas/_1.jpg"},
    {img: "css/img/bodas/_2.jpg"},
    {img: "css/img/bodas/_3.jpg"},
    {img: "css/img/bodas/_4.jpg"},
    {img: "css/img/bodas/_5.jpg"},
    {img: "css/img/bodas/_6.jpg"},
    {img: "css/img/bodas/_7.jpg"},
    {img: "css/img/bodas/_8.jpg"},
    {img: "css/img/bodas/_9.jpg"},
    {img: "css/img/bodas/_10.jpg"},
    {img: "css/img/bodas/_11.jpg"},
    {img: "css/img/bodas/_12.jpg"},
    {img: "css/img/bodas/_13.jpg"},
    {img: "css/img/bodas/_14.jpg"},
    {img: "css/img/bodas/_15.jpg"},
    {img: "css/img/bodas/_16.jpg"},
    {img: "css/img/bodas/_17.jpg"},
    {img: "css/img/bodas/_18.jpg"},
    {img: "css/img/bodas/_19.jpg"},
    {img: "css/img/bodas/_20.jpg"},
    {img: "css/img/bodas/_21.jpg"},
    {img: "css/img/bodas/_22.jpg"},
    {img: "css/img/bodas/_23.jpg"},
    {img: "css/img/bodas/_24.jpg"},
    {img: "css/img/bodas/_25.jpg"},
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

