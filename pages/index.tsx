import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { useRouter } from 'next/router';
import Link from 'next/link';

const Home = () => {
  const router = useRouter()
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then(response => response.json())
      .then(({ data, length }) => {
        setProductList(data)
      })

  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold text-center"> Welcome to Avo Store! </h1>
      {productList?.map((product) => (
        <Link href={`/product/${product.id}`}>
          <div className='lg:flex justify-center gap-10' key={product?.id}>
            <div className='flex-column shadow-lg p-8 rounded-xl m-5'>
              <Image
                src={product.image}
                alt={product.id}
                width={300}
                height={300}
                priority={product.image === "/images/maluma.jpg"} />
              <div >{product.name}</div>
              <div>Price: {product?.price}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Home