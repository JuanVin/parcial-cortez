import { Col, Row, Image } from 'react-bootstrap';
import {useState} from "react"
import { useNavigate  } from "react-router-dom"
import apiFunctions from './apiCalls';

function ItemList({ instrumentos }) {
    const [_instrumentos, setInstrumentos] = useState(instrumentos)
    console.log(instrumentos)
    let navigate  = useNavigate()
    let instrumentList = []
    function getPrice(type) {
        if (type === "G") {
            return <p style={{ color: "green" }}><Image src={process.env.PUBLIC_URL + "/img/" + "camion.png"}></Image> Envío gratis a todo el país</p>
        }
        return <p style={{ color: "orange" }}>Costo de envio interior de Argentina: {type}</p>
    }

    async function deleteInstrument(id, index) {
        let response = await apiFunctions.deleteInstrumentById(id)
        if(response.status === 200){
            instrumentos.splice(index,1)
            setInstrumentos(instrumentos)
        }
    }
    const handleRedirect = (id) => {
        navigate(`/actualizar/${id}`)
    }
    _instrumentos.map((instrumento, index) => {
        instrumentList.push(
            <>
                <Row>
                    <Col sm={3} style={{ display: "flex", justifyContent: "center" }}>
                        <a href={`lista/${instrumento.id}`}><Image src={process.env.PUBLIC_URL + "/img/" + instrumento.imagen}></Image></a>
                    </Col>
                    <Col sm={9} >
                        <h4>
                            {instrumento.instrumento}
                        </h4>

                        <h3>
                            $ {instrumento.precio}
                        </h3>
                        {getPrice(instrumento.costoEnvio)}
                        <p>
                            {instrumento.cantidadVendida} Vendidos
                        </p>

                        <button className='btn btn-success float-right' onClick={() => handleRedirect(instrumento.id)}>Modificar</button>
                        <button className='btn btn-warning float-right' onClick={() => deleteInstrument(instrumento.id, index)}>Eliminar</button>
                    </Col>
                </Row>
                <hr></hr>

            </>
        )
    })

    return (
        <div className="p-3 mt-5" style={{ borderRadius: "5px", border: "1px solid #e5e5e5", backgroundColor: "white", width: "70%" }}>
            {instrumentList}
        </div>
    )
}

export default ItemList