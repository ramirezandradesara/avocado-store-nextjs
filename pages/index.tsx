import React, { useEffect, useState } from 'react'

const Home = () => {

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
      <h1 className="text-3xl font-bold underline">Hola Platzi! </h1>
      {productList?.map((product) => (
        <div className='lg:flex gap-10'>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
            <img src={product.image} alt={product.id} />
            <div key={product.id}>{product.name}</div>
            <div>Price: {product?.price}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home