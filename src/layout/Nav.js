import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from '../auth0/components/logoutButton'
import LoginButton from '../auth0/components/loginButton'

const Nav = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <nav className="Nav bg-dark p-2">
            <ul className="m-0 text-white list-unstyled d-flex flex-nowrap align-items-center ps-5">
                <li className="p-2"><Link className="text-decoration-none" to='/'>Home</Link></li>
                <li className="p-2"><Link className="text-decoration-none" to='/suppliers/create'>Suppliers</Link></li>
                <li className="p-2"><Link className="text-decoration-none" to='/products'>Products</Link></li>
                <li className="p-2"><Link className="text-decoration-none" to='/profile'>profile</Link></li>
                <div>{isAuthenticated ? <LogoutButton/> : <LoginButton/>}</div>
            </ul>
        </nav>
    )
}



export default Nav
