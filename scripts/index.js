import {Contador} from "./Counter.js"

const modal = document.querySelector("dialog")

const p1 = new Contador("Nosotros", document.getElementById("playerContainer"))
const p2 = new Contador("Ellos", document.getElementById("playerContainer2"))

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


// p1.agregar(5)
// p1.agregar()
// p2.agregar()
