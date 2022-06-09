class Instrumento {
    id:number = 0;
    instrumento:string = "";
    marca:string = "";
    modelo:string = "";
    imagen:string = "";
    precio:number = 0;
    costoEnvio:string = "";
    cantidadVendida:string = "";
    descripcion:string = "";
    activo:boolean = true
    constructor(instrumento: Instrumento){
        this.id= instrumento.id
        this.instrumento = instrumento.instrumento
        this.marca = instrumento.marca
        this.modelo = instrumento.modelo
        this.imagen = instrumento.imagen
        this.precio = instrumento.precio
        this.costoEnvio = instrumento.costoEnvio
        this.cantidadVendida = instrumento.cantidadVendida
        this.descripcion = instrumento.descripcion
        this.activo = instrumento.activo
    }
}

export default Instrumento