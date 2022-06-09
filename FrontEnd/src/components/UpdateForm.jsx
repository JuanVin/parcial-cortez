import { useNavigate, useParams, Navigate } from "react-router-dom"
import { useState, useEffect } from "react"
import apiFunctions from "./apiCalls";
function UpdateForm() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true)
    const [instrumento, setInstrumento] = useState('')
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [precio, setPrecio] = useState(0)

    let navigate = useNavigate()

    useEffect(() => {
        if (id !== undefined) {
            getInstrument()
        } else {
            setIsLoading(false)
        }
    }, [isLoading])

    const handleUpdate = async () => {
        let response
        if (id) {
            response = await apiFunctions.updateInstrument({ id: id, instrumento: instrumento, marca: marca, modelo: modelo, precio: precio, descripcion: descripcion })
        }
        else {
            response = await apiFunctions.newInstrument({ instrumento: instrumento, marca: marca, modelo: modelo, precio: precio, descripcion: descripcion, activo: 1 })
        }
        if (response.status === 200) {
            navigate(-1)
        }
    }
    const getInstrument = async () => {
        
        let response = await apiFunctions.getInstrumetById(id)
        setInstrumento(response.instrumento)
        setMarca(response.marca)
        setModelo(response.modelo)
        setPrecio(response.precio)
        setDescripcion(response.descripcion)
        setIsLoading(false)
    }

    if (isLoading) {
        return (
            <h1>Cargando ... </h1>
        )
    }
    return (
        <div className="mt-5">
            <h1>Actualizar instrumento</h1>
            <div class="form-group">
                <label htmlFor="instrumento" className="p-1">Instrumento</label>
                <input type="text" value={instrumento} onChange={e => setInstrumento(e.target.value)} className="form-control" id="instrumento" placeholder="Nuevo nombre"></input>
            </div>
            <div class="form-group">
                <label htmlFor="marca" className="p-1">Marca</label>
                <input type="text" value={marca} onChange={e => setMarca(e.target.value)} className="form-control" id="marca" placeholder="Marca"></input>
            </div>
            <div class="form-group">
                <label htmlFor="modelo" className="p-1">Modelo</label>
                <input type="text" value={modelo} onChange={e => setModelo(e.target.value)} className="form-control" id="modelo" placeholder="Modelo"></input>
            </div>
            <div class="form-group">
                <label htmlFor="precio" className="p-1">Precio</label>
                <input type="number" value={precio} onChange={e => setPrecio(e.target.value)} className="form-control" id="precio" placeholder="Modelo"></input>
            </div>
            <div class="form-group">
                <label for="descripcion">Descripción</label>
                <textarea class="form-control" value={descripcion} onChange={e => setDescripcion(e.target.value)} id="descripcion" rows="3"></textarea>
            </div>
            <div className="form-group mt-3">
                <button className="btn btn-success" onClick={handleUpdate}>{(id) ?
                    "Actualizar"
                    :
                    "Cargar"
                }</button>
                <button className="btn btn-primary" onClick={() => navigate(-1)}>Volver</button>
            </div>

        </div>
    )
}
export default UpdateForm