import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import apiFunctions from "./apiCalls";
import DetailList from "./DetailList";
import Instrumento from "../models/instrumentos";

function InstrumentDetail() {

    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [detalleInstrumento, setDetalleInstrumento] = useState<Instrumento>();

    useEffect(() => {
        getFetchData()
    }, [isLoading]);

    let getFetchData = async () => {
        let fetchData: Instrumento = await apiFunctions.getInstrumetById(String(id))
        console.log(fetchData)
        setDetalleInstrumento(fetchData)
        setIsLoading(false)
    }

    if (isLoading) {
        return (

            <div className="container" style={{ display: "flex", justifyContent: "center" }}>
                <h1>Loading...</h1>
            </div>

        );
    }
    if (!isLoading) console.log(detalleInstrumento)
    return (
        <>

            <div className="container" style={{ display: "flex", justifyContent: "center" }}>
                <DetailList data={detalleInstrumento}></DetailList>
            </div>

        </>
    )
}

export default InstrumentDetail