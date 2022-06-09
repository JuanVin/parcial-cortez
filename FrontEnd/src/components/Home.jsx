
import {Col, Container, Row, Image } from 'react-bootstrap';
import { useEffect, useState } from "react";


async function Home() {

    const [isLoading, setIsLoading] = useState(true);
    const [detalleInstrumento, getInstrumento] = useState(null);

    useEffect(() => {
        getData()
    }, []);

    async function getData() {
        try {
            const response = await fetch('localhost:3000/instruments');
            if (response.ok) {
                getInstrumento(response.json())
                setIsLoading(false)
            } else {
                console.log('Respuesta de red OK pero respuesta de HTTP no OK');
            }
        } catch (error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message);
        }
    }

    function getPrice(type){
        if (type === "G"){
            return <p style={{color: "green"}}>Envío gratis a todo el país</p>
        }
        return <p style={{color: "orange"}}>Costo de envio interior de Argentina: ${type}</p>
    }
    return (
        <>
        <Container className='mt-5'>
            <div>
            {(await getData()).map((instrumento) => (
                <> 
                <div className="w-75 p-3">
                    <Row>
                        <Col sm={3}>     
                            <a href={`DetalleInstrumento/${instrumento.id}`}><Image src={process.env.PUBLIC_URL+"/img/"+instrumento.imagen} ></Image></a>
                        </Col>
                        <Col sm={9}>
                    
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
                   
                        </Col>        
                    </Row>     
                    <hr></hr>
                </div>       
                </>           
            ))}  
            </div>
            </Container>        
        </>
    );
}

export default Home;
