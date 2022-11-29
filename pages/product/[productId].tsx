import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from "next/image";

const ProductItem = () => {
    const {
        query: { productId }
    } = useRouter();


    const [product, setProduct] = useState<TProduct>()
    const [attributes, setAttributes] = useState({})

    useEffect(() => {
        window
            .fetch(`/api/avo/${productId}`)
            .then(response => response.json())
            .then((data) => {
                setProduct(data)
                setAttributes(data?.attributes)
            })
    }, [productId])

    return (
        <div className='lg:flex justify-center gap-10 '>
            <div className='flex-column shadow-lg p-8 rounded-xl m-5'>
                <Image src={product?.image} alt={product?.id} width={300} height={300} />
                <div key={product?.id}>{product?.name}</div>
                <div>Price: {product?.price}</div>
                <br />
                {attributes && Object.keys(attributes).map((key) => (
                    <>
                        <div className='font-bold my-1'>{key.charAt(0).toUpperCase() + key.slice(1)}: </div>
                        <div className='mb-5'>{attributes[key]}</div>
                   </>
                ))}
            </div>
        </div>
    );
};

export default ProductItem