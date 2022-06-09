"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
const mysqldb_1 = require("../db/mysqldb");
const instrumento_1 = __importDefault(require("../models/instrumento"));
exports.controller = {
    getInstrument: (req, res) => new Promise((resolve, reject) => {
        mysqldb_1.pool.getConnection((err, connection) => {
            if (err) {
                console.log(err);
                res.send(err);
                return;
            }
            console.log('MySQL Connection: ', connection.threadId);
            connection.query('SELECT * FROM instrumento WHERE activo = 1', (err, results) => {
                if (err)
                    console.error(err);
                let instrumento = [];
                results.forEach((ins) => {
                    instrumento.push(JSON.parse(JSON.stringify(ins)));
                });
                connection.release();
                res.send(instrumento);
            });
        });
    }),
    getInstrumentById: (req, res) => new Promise((resolve, rejects) => {
        let empId = req.params.id;
        mysqldb_1.pool.getConnection((err, connection) => {
            if (err) {
                console.log(err);
                res.send(err);
                return;
            }
            console.log('MySQL Connection: ', connection.threadId);
            connection.query('SELECT * FROM instrumento WHERE id = ?', [empId], (err, results) => {
                if (err)
                    console.error(err);
                connection.release();
                console.log(empId);
                results = new instrumento_1.default(JSON.parse(JSON.stringify(results[0])));
                res.send(results);
            });
        });
    }),
    createInstrument: (req, res) => {
        const { instrumento, marca, modelo, precio, descripcion, activo } = req.body;
        var values = [instrumento, marca, modelo, precio, descripcion, activo];
        mysqldb_1.pool.getConnection((err, connection) => {
            if (err) {
                console.error(err);
                res.send(err);
                return;
            }
            else {
                let sql = 'INSERT INTO instrumento (instrumento, marca, modelo, precio, descripcion, activo) VALUES (?, ?, ?, ?, ?, ?)';
                connection.query(sql, values, (err, results) => {
                    if (err) {
                        console.error(err);
                        res.json({ message: "Error al tratar de insertar" });
                    }
                    else {
                        res.json({ message: "Articulo Insertado con exito" });
                    }
                });
            }
        });
    },
    updateInstrument: (req, res) => {
        console.log(req.body);
        const { id, instrumento, marca, modelo, precio, descripcion } = req.body;
        var values = [instrumento, marca, modelo, precio, descripcion, id];
        mysqldb_1.pool.getConnection((err, connection) => {
            if (err) {
                console.error(err);
                res.send(err);
                return;
            }
            else {
                let sql = 'UPDATE instrumento SET instrumento=?, marca=?, modelo=?, precio=?, descripcion=? WHERE id=?';
                connection.query(sql, values, (err, results) => {
                    if (err) {
                        console.error(err);
                        res.json({ message: "Error al actualizar " + err });
                    }
                    else {
                        res.json({ message: "Articulo Actualizado con exito" });
                    }
                });
            }
        });
    },
    deleteInstrument: (req, res) => {
        console.log("asdads");
        let insId = req.params.id;
        mysqldb_1.pool.getConnection((err, connection) => {
            if (err) {
                console.log(err);
                res.send(err);
                return;
            }
            console.log('MySQL Connection: ', connection.threadId);
            connection.query('UPDATE instrumento SET activo = 0 WHERE id = ?', [insId], (err, results) => {
                if (err) {
                    res.json({ message: 'Error al eliminar un instrumento' });
                }
                else {
                    res.json({ message: 'Instrumento eliminado exitosamente' });
                }
            });
        });
    }
};
