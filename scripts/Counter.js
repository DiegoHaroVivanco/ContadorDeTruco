export class Contador{

    numero = 0;
    nombre;
    cuentaElement;
    containerElem;

    constructor(nombre, containerElem, cuentaIni=0){
        this.nombre = nombre
        this.numero = cuentaIni
        containerElem.querySelector("h2").innerText = nombre
        containerElem.querySelector(".add").addEventListener("click",()=>this.agregar())
        containerElem.querySelector(".subtract").addEventListener("click",()=>this.restar())
        this.cuentaElement = containerElem.querySelector(".account")
        this.containerElem = containerElem
    }

    // Métodos

    agregar(cantidad = 1){ // por defecto la cantiad es 1, a menos que le indique otro número
        this.numero += cantidad
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
        const fosforosActuales = this.containerElem.querySelectorAll("img")
        if(fosforosActuales)
            fosforosActuales.forEach(fosforo => this.cuentaElement.removeChild(fosforo))
        
        for(let i = 0; i < this.numero; i++){
            const nuevoFosforo = document.createElement("img")
            nuevoFosforo.src = "img/fosforo.jpg"
            this.cuentaElement.appendChild(nuevoFosforo)
        }
        console.log(this.numero, this.nombre)

    }


}