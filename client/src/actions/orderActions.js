import axios from 'axios';
import { ORDER_FETCH } from "./types"

export const orderFetch = () => {
    return dispath => {
        axios.get("http://localhost:3001/orders").then(res => {
            dispath({type: ORDER_FETCH, payload: res.data})
        })
    }
}

export const orderDelete = id => {
    return dispath => {
        axios.delete("http://localhost:3001/orders/" + id).then(res => {
            axios.get("http://localhost:3001/orders").then(res => {
                dispath({type: ORDER_FETCH, payload: res.data})
            })
        })
    }
}

