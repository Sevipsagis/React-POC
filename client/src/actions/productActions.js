import axios from 'axios';
import { PRODUCTS_FETCH, PRODUCT_FETCH, PRODUCT_CREATE, PRODUCT_UPDATE } from "./types"

export const productsFetch = () => {
    return dispath => {
        axios.get("http://localhost:3001/products").then(res => {
            dispath({ type: PRODUCTS_FETCH, payload: res.data })
        })
    }
}

export const productFetch = (id) => {
    return dispath => {
        axios.get("http://localhost:3001/products/" + id).then(res => {
            dispath({ type: PRODUCT_FETCH, payload: res.data })
        })
    }
}

export const productCreate = (values) => {
    return dispath => {
        axios.post("http://localhost:3001/products", values).then(res => {
            dispath({ type: PRODUCT_CREATE, payload: res.data })
        })
    }
}

export const productUpdate = (id, values) => {
    return dispath => {
        axios.put("http://localhost:3001/products/" + id, values).then(res => {
            dispath({ type: PRODUCT_UPDATE, payload: res.data })
        })
    }
}

export const productDelete = id => {
    return dispath => {
        axios.delete("http://localhost:3001/products/" + id).then(res => {
            axios.get("http://localhost:3001/products").then(res => {
                dispath({ type: PRODUCTS_FETCH, payload: res.data })
            })
        })
    }
}