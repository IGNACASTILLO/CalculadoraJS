class Display{
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual= displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = "";
        this.valorAnterior = "";
        this.signos = {
            sumar:"+",
            restar:"-",
            dividir: "%",
            multiplicar: "*"
            
        }
    }

        borrar(){
            this.valorActual = this.valorActual.toString().slice(0,-1);
            this.mostrarValor()
        }
        borrarTodo(){
            this.valorActual = "";
            this.valorAnterior = "";
            this.tipoOperacion = undefined;
            this.mostrarValor()
        }
        agregarNumero(num){
            if(num === "." && this.valorActual.includes(".")) return
            this.valorActual = this.valorActual.toString() + num.toString();
            this.mostrarValor()
        }
        
        mostrarValor(){
            this.displayValorActual.textContent = this.valorActual;
            this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion]||""}`;
        }

        calcular(){
            const valorActual = parseFloat(this.valorActual);
            const valorAnterior = parseFloat(this.valorAnterior);

            if(isNaN(valorActual)|| isNaN(valorAnterior)) return
            this.valorActual = this.calculador[this.tipoOperacion](valorAnterior,valorActual);
        }

        computar(tipo){
            this.tipoOperacion !== "igual" && this.calcular();
            this.tipoOperacion = tipo;
            this.valorAnterior = this.valorActual || this.valorAnterior;
            this.valorActual="";
            this.mostrarValor();
        } 
}