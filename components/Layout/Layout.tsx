import Navbar from '@components/Navbar/Navbar'
import React from 'react'

type Props = {
    children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className='container'>
            <Navbar />
            {children}
            <footer className='my-5 ml-7'>Made with 💗 by Sara Ramírez Andrade</footer>
        </div>
    )
}

export default Layout