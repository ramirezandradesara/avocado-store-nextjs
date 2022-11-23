import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About Us</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar