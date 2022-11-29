import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { useRouter } from 'next/router';

//va a suceder en el servidor
export const getServerSideProps = async () => {
 // Only absolute URLs are supported --> const response = await fetch('/api/avo') ✖️
  // const response = await fetch('/api/avo')
  const response = await fetch('https://avocado-store-nextjs.vercel.app/api/avo')
  const { data: productListProps }: TAPIAvoResponse = await response.json() // hacemos rename

  return {
    props: {
      productListProps
    }
  }
}

const Home = ({ productListProps }: { productListProps: TProduct[] }) => {

  const router = useRouter()

  // const [productList, setProductList] = useState<TProduct[]>([])

  // useEffect(() => {
  //   window
  //   fetch('/api/avo')
  //     .then(response => response.json())
  //     .then(({ data, length }) => {
  //       setProductList(data)
  //     })

  // }, [])

  function navigateProductDetails(id: string) {
    router.push(`/product/${id}`)
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center"> Welcome to Avo Store! </h1>
      {productListProps?.map((product) => (

        <div className='lg:flex justify-center gap-10'>
          <div className='flex-column shadow-lg p-8 rounded-xl m-5' onClick={() => navigateProductDetails(product.id)}>
            <Image src={product.image} alt={product.id} width={300} height={300} />
            <div key={product.id}>{product.name}</div>
            <div>Price: {product?.price}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home