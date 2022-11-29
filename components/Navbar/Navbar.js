import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='my-5 ml-7'>
            <nav>
                <ul className='flex justify-center '>
                    <li className='mx-5'>
                        <Link href="/">Home</Link>
                    </li>
                    <li className='mx-5'>
                        <Link href="/about">About Us</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar