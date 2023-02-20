import {Contador} from "./Counter.js"

const modal = document.querySelector("dialog")
const partidaSave = JSON.parse(localStorage.getItem("truco"))
const p1Nombre = "Nosotros"
const p2Nombre = "Ellos"

const p1 = new Contador(p1Nombre, document.getElementById("playerContainer"), partidaSave[p1Nombre])
const p2 = new Contador(p2Nombre, document.getElementById("playerContainer2"), partidaSave[p2Nombre])

const reset = ()=>{
    p1.reset()
    p2.reset()
}

document.getElementById("reset").addEventListener("click",()=>{
    modal.showModal()
})

document.getElementById("cancel").addEventListener("click",()=> modal.close())
document.getElementById("accept").addEventListener("click",()=> {
    reset()
    modal.close()
})

document.querySelectorAll("button").forEach(button =>{
    button.addEventListener("click", () =>{
        const save = {
            [p1.nombre] : p1.numero,
            [p2.nombre] : p2.numero,
        }
    
        localStorage.setItem("truco", JSON.stringify(save))
    })
})
