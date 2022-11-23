import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
    const {
        query: { productId }
    } = useRouter();

    const [product, setProduct] = useState<TProduct>()
    console.log("🚀 ~ file: [productId].tsx ~ line 10 ~ ProductItem ~ product", product.id)

    useEffect(() => {
        window
            .fetch(`/api/avo/${productId}`)
            .then(response => response.json())
            .then( (data ) => {
                setProduct(data)
              })

    }, [])

    return (
        <>
            <div>
                Esta es la página del producto: {productId}
            </div>
            <div>Product: {product.name}</div>
        </>
    )
};

export default ProductItem