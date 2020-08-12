import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import { useAxiosGet } from '../hooks/HttpRequests'

function Product() {

    const {id} = useParams()
    const url = `https://5f333dd9cfaf5a001646a8b7.mockapi.io/api/v1/products/${id}`

    /* hook for processing the HTTP request using Axios */
    let product = useAxiosGet(url)

    /* page content */
    let content = null

    if (product.error) {
        content = <p>
            There was an error please refresh or try again later.
        </p>
    }

    if (product.loading) {
        content = 
            <div>
                <Loader />
            </div>
    }

    if(product.data) {
        content = 
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {product.data.name}
                </h1>
                <div>
                    <img src={product.data.image} alt={product.data.name} />
                </div>
                <div className="font-bold text-xl mb-3">
                    $ {product.data.price}
                </div>
                <div>
                    {product.data.description}
                </div>
            </div>       
    }

    return(
        <div>
            {content}
        </div>       
    )

}

export default Product