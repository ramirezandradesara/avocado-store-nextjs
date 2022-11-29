import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from "next/image";
import { GetStaticProps, GetStaticPaths } from 'next';

// getStatictPaths: función obligatoria para que next sepa que paginas van a ser estáticas.
// la función permite saber cuántas paginas hay
export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch('https://avocado-store-nextjs.vercel.app/api/avo')
    const { data }: TAPIAvoResponse = await response.json()

    const paths = data.map(({ id }) => ({
        params: {
            id
        }
    }));

    return {
        paths: paths,
        fallback: false // cualquier pagina que no se especifique en los paths va a arrojar un 404
    }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id as string
    const response = await fetch(`https://avocado-store-nextjs.vercel.app/api/avo/${id}`)
    const product: TProduct = await response.json()

    return {
        props: {
            product
        }
    }
};

const ProductItem = ({ product }: { product: TProduct }) => {
    return (
        <div className='lg:flex justify-center gap-10 '>
            <div className='flex-column shadow-lg p-8 rounded-xl m-5'>
                <Image src={product?.image} alt={product?.id} width={300} height={300} />
                <div key={product?.id} className='text-2xl my-2 font-bold'>{product?.name}</div>
                <div>Price: {product?.price}</div>
                <br />
                {product?.attributes && Object.keys(product?.attributes).map((key) => (
                    <>
                        <div className='font-bold my-1 first-letter:uppercase'>{key}:</div>
                        <div className='mb-5'>{product?.attributes[key]}</div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default ProductItem