import { Request, Response } from "express"
import  { pool }  from "../db/mysqldb"
import Instrumento from "../models/instrumento"

export let controller = {
    getInstrument: (req: Request, res: Response) => new Promise ((resolve, reject) => {
        pool.getConnection((err: any, connection: any) => {
            if(err){
                console.log(err)
                res.send(err)
                return;
            }
            console.log('MySQL Connection: ', connection.threadId);
            connection.query('SELECT * FROM instrumento WHERE activo = 1', (err: any, results: any) => {
                if (err) console.error(err);
                let instrumento: Instrumento[] = [] 
                
                results.forEach((ins: any) => {
                    instrumento.push(JSON.parse(JSON.stringify(ins)))
                });
                connection.release()
                res.send(instrumento)
            });
        })
    })
    ,
    getInstrumentById: (req: Request, res: Response) => new Promise ((resolve, rejects) => {
        let empId = req.params.id
        pool.getConnection((err: any, connection: any) => {
            if(err){
                console.log(err)
                res.send(err)
                return;
            }
            console.log('MySQL Connection: ', connection.threadId);
            connection.query('SELECT * FROM instrumento WHERE id = ?', [empId], (err: any, results: any) => {
                if (err) console.error(err);
                connection.release()
                console.log(empId)
                
                results = new Instrumento(JSON.parse(JSON.stringify(results[0])))
                
                res.send(results)
            });
        })
    })   
    ,
    createInstrument: (req: Request, res: Response) => {
        const {instrumento, marca, modelo, precio, descripcion, activo} = req.body;
        var values = [instrumento, marca, modelo, precio, descripcion, activo];
        pool.getConnection((err: any, connection: any) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        else{
            let sql:string = 'INSERT INTO instrumento (instrumento, marca, modelo, precio, descripcion, activo) VALUES (?, ?, ?, ?, ?, ?)';
            connection.query(sql, values, (err: any, results: any) => {
                if (err) {
                  console.error(err);
                  res.json({message:"Error al tratar de insertar"})
                }else{
                  res.json({message:"Articulo Insertado con exito"})
                }
            });
        }          
      });
    },
    updateInstrument: (req: Request, res: Response) => {

        console.log(req.body)
        const {id, instrumento, marca, modelo, precio, descripcion} = req.body;
        var values = [instrumento, marca, modelo, precio, descripcion, id];
        pool.getConnection((err: any, connection: any) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        else{
            let sql:string = 'UPDATE instrumento SET instrumento=?, marca=?, modelo=?, precio=?, descripcion=? WHERE id=?';
            connection.query(sql, values, (err:any, results:any) => {
                if (err) {
                  console.error(err);
                  res.json({message:"Error al actualizar " + err})
                }else{
                  res.json({message:"Articulo Actualizado con exito"})
                }
            });
        }          
        });
    },
    deleteInstrument: (req: Request, res: Response) => {
        console.log("asdads")
        let insId = req.params.id
        pool.getConnection((err: any, connection: any) => {
            if(err){
                console.log(err)
                res.send(err)
                return;
            }
            console.log('MySQL Connection: ', connection.threadId);
            connection.query('UPDATE instrumento SET activo = 0 WHERE id = ?', [insId], (err: any, results: any) => {
                if (err) {
                    res.json({message: 'Error al eliminar un instrumento'})
                }else {
                    res.json({message: 'Instrumento eliminado exitosamente'})
                }
            });
        })
    }
}
