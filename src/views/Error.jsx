import React from 'react'
import { MenuItemLink } from '../components/Navbar/NavBarElements'


import '../../src/general.css'
const Error = () => {
    return (
        <>
        <div style={{
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems:'center',
            height: '90vh',
           

        }}>
            <h1>Error</h1>
            <MenuItemLink to='/home'>Volver al Home</MenuItemLink> 
        </div>

            </>
    )
}

export default Error
