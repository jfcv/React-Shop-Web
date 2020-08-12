import React from 'react'
import { useAxiosGet } from '../hooks/HttpRequests'
import Loader from '../components/Loader'
import ProductCard from '../components/ProductCard'

function Home() {

    const url = `https://5f333dd9cfaf5a001646a8b7.mockapi.io/api/v1/products/`

    /* hook for processing the HTTP request using Axios */
    let products = useAxiosGet(url)

    /* page content */
    let content = null

    if (products.error) {
        content = <p>
            There was an error please refresh or try again later.
        </p>
    }

    if (products.loading) {
        content = 
            <div>
                <Loader />
            </div>
    }

    if (products.data) {
        content = 
        products.data.map((product) => 
            <div key={product.id}>
                <ProductCard product={product} />
            </div>  
        )
    }

    return(
        <div>
            <h1 className="font-bold text-2xl">
                Best Sellers
            </h1>
            {content}
        </div>       
    )
}

export default Home