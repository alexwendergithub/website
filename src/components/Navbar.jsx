import React from 'react'
import './Navbar.css'

const Navbar = ()=>{
    return(
        <>
            <header className="header">
                <a href="/" className="logo">Logo</a>
                <nav className='navbar'>
                    <a href="/">Home</a>
                    <a href="/mangas">Mangas</a>
                    <a href="/chess">Chess</a>
                    <a href="/profile">Profile</a>
                </nav>
            </header>
            <div className="margin"></div>
        </>
    )

}

export default Navbar