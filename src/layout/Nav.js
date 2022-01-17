import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="Nav bg-dark p-2">
            <ul className="m-0 text-white list-unstyled d-flex flex-nowrap align-items-center ps-5">
                <li className="p-2"><Link className="text-decoration-none" to='/'>Home</Link></li>
                <li className="p-2"><Link className="text-decoration-none" to='/suppliers/create'>Suppliers</Link></li>
                <li className="p-2"><Link className="text-decoration-none" to='/products'>Products</Link></li>
                <li className="p-2"><Link className="text-decoration-none" to='/login'>Login</Link></li>
            </ul>
        </nav>
    )
}

export default Nav
