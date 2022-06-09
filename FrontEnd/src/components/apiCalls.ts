import Instrumento from "../models/instrumentos"

let apiFunctions = {
    getInstruments: async () => {
        let url: string = "http://localhost:3000/instruments",
            options: object = {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                mode: 'cors'
            },
            response: any

        try {
            response = await fetch(url, options)
            response = await response.json()
        } catch (e) {
            console.log(e)
        }
        return response as Instrumento[]
    },
    getInstrumetById: async (id: string) => {
        let url: string = `http://localhost:3000/instruments/${id}`,
            options: object = {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                mode: 'cors'
            },
            response: any
        try {
            response = await fetch(url, options)
            response = await response.json()
        } catch (e) {
            console.log(e)
        }
        return response as Instrumento
    },
    deleteInstrumentById: async (id: string) => {
        let status: number = 0;
        let url: string = `http://localhost:3000/deleteInstrument/${id}`,
            options: object = {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                mode: 'cors'
            },
            response: any
        try {
            response = await fetch(url, options)
            status = response.status
            response = await response.json()
        } catch (e) {
            console.log(e)
        }
        return { response: response, status: status }
    },
    updateInstrument: async (body: Object) => {
        let status: number = 0;
        let url: string = `http://localhost:3000/updateInstrument`,
            options: object = {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(body),
                mode: 'cors'
            },
            response: any
        try {
            response = await fetch(url, options)
            status = response.status
            response = await response.json()
        } catch (e) {
            console.log(e)
        }
        return { response: response, status: status }
    },
    newInstrument: async (body: Object) => {
        let status: number = 0;
        let url: string = `http://localhost:3000/createInstrument`,
            options: object = {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(body),
                mode: 'cors'
            },
            response: any
        try {
            response = await fetch(url, options)
            status = response.status
            response = await response.json()
        } catch (e) {
            console.log(e)
        }
        return { response: response, status: status }
    }
}


export default apiFunctions