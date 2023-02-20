export class Contador{

    numero = 0;
    nombre;
    cuentaElement;
    containerElem;

    constructor(nombre, containerElem, cuentaIni=0){
        this.nombre = nombre
        this.numero = cuentaIni
        this.containerElem = containerElem
        containerElem.querySelector("h2").innerText = nombre
        containerElem.querySelector(".add").addEventListener("click",()=>this.agregar())
        containerElem.querySelector(".subtract").addEventListener("click",()=>this.restar())
        this.cuentaElement = containerElem.querySelector(".account")
        this.actualizarCuenta()
    }

    // Métodos

    agregar(cantidad = 1){ // por defecto la cantiad es 1, a menos que le indique otro número
        this.numero += cantidad
        if(this.numero <= 30)
            this.actualizarCuenta()
    }

    restar(cantidad = 1){
        
        this.numero = Math.max(0, this.numero-cantidad)
        this.actualizarCuenta()
    }

    reset(){
        this.numero = 0
        this.actualizarCuenta()
    }

    actualizarCuenta(){
        const gruposAct = this.containerElem.querySelectorAll(".group")
        const separadoresAct = this.cuentaElement.querySelectorAll(".separator")
        
        if(gruposAct){ // grupoAct !== undefined
            gruposAct.forEach(grupo => this.cuentaElement.removeChild(grupo))
            separadoresAct.forEach(separador => this.cuentaElement.removeChild(separador))
        } 
            
        let grupoAct;
        for(let i = 0; i < this.numero; i++){
            if(i % 5 === 0){
                grupoAct = document.createElement("div")
                grupoAct.classList.add("group");
                if(i % 15 === 0 && i !== 0){
                    const separador = document.createElement("div")
                    separador.classList.add("separator")
                    this.cuentaElement.appendChild(separador)
                }
                this.cuentaElement.appendChild(grupoAct)

            }
            const nuevoFosforo = document.createElement("img")
            nuevoFosforo.src = "img/fosforo.jpg"
            nuevoFosforo.classList.add("phosphor", "phosphor"+(i%5+1))
            grupoAct.appendChild(nuevoFosforo)
        
        }

    }


}