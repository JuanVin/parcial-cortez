
import { useEffect, useState } from "react";
import apiFunctions from './apiCalls';
import ItemList from './ItemList';
import Instrumento from "../models/instrumentos";


function InstrumentList() {

    const [isLoading, setIsLoading] = useState(true);
    const [instrumentos, setInstrumento] = useState<Instrumento[]>([]);

    useEffect(() => {
        getFetchData()
    }, [isLoading]);

    let getFetchData = async () => {
        let fetchData: Instrumento[] = await apiFunctions.getInstruments()
        setIsLoading(false)
        setInstrumento(fetchData)
    }
    if (isLoading) {
        return (
            <>

                <h1>Loading...</h1>

            </>
        );
    }
    return (
        <>
            <ItemList instrumentos={instrumentos}></ItemList>
        </>
    );
}

export default InstrumentList;
