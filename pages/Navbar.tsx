import React, { useState } from "react";
import {GiHamburgerMenu} from 'react-icons/gi'
import {Link} from 'react-scroll'



const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };
    return (
            <div className="navbar">
                <div className="navbar__logo">
                    logo
                </div>
                {menuOpen ? (
                    <div className="navbar__active">
                        <Link className="navbar__linkItem" to='#home' smooth={true} duration={1000}>Home</Link>
                        <Link className="navbar__linkItem" to='#contacts' smooth={true} duration={1000}>Contact</Link>
                        <Link className="navbar__linkItem" to='#about' smooth={true} duration={1000}>About</Link>
                    </div> 
                ) : (
                    <div className='navbar__links'>
                        <Link className="navbar__linkItem" to='home' smooth={true} duration={1000}>Home</Link>
                        <Link className="navbar__linkItem" to='contacts' smooth={true} duration={1000}>Contact</Link>
                        <Link className="navbar__linkItem" to='about' smooth={true} duration={1000}>About</Link>
                    </div>
                )}
                <div className="navbar__hamburger">
                    <GiHamburgerMenu onClick={menuToggleHandler}/>
                </div>
            </div>               
    )
}

export default Navbar;
