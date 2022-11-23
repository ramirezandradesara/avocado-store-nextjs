import Navbar from 'components/Navbar/Navbar'
import React from 'react'

type Props = {
    children: React.ReactNode;
  };
  

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <footer>This is the footer</footer>
        </div>
    )
}

export default Layout