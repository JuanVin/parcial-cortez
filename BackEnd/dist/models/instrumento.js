"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Instrumento {
    constructor(instrumento) {
        this.id = 0;
        this.instrumento = "";
        this.marca = "";
        this.modelo = "";
        this.imagen = "";
        this.precio = 0;
        this.costoEnvio = "";
        this.cantidadVendida = "";
        this.descripcion = "";
        this.activo = true;
        this.id = instrumento.id;
        this.instrumento = instrumento.instrumento;
        this.marca = instrumento.marca;
        this.modelo = instrumento.modelo;
        this.imagen = instrumento.imagen;
        this.precio = instrumento.precio;
        this.costoEnvio = instrumento.costoEnvio;
        this.cantidadVendida = instrumento.cantidadVendida;
        this.descripcion = instrumento.descripcion;
        this.activo = instrumento.activo;
    }
}
exports.default = Instrumento;
