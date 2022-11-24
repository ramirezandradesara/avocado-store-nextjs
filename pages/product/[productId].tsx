import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
    const {
        query: { productId }
    } = useRouter();
    console.log(productId);
    

    const [product, setProduct] = useState<TProduct>()

    useEffect(() => {
        window
            .fetch(`/api/avo/${productId}`)
            .then(response => response.json())
            .then((data) => {
                setProduct(data)
            })

    }, [productId])

    return (
        <>
            <div>
                Esta es la página del producto: {product?.id}
            </div>
            <div>Product: {product?.name}</div>
        </>
    )
};

export default ProductItem