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