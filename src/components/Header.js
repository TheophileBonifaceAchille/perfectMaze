import React from 'react'
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
        <header className="bg-danger d-flex flex-row text-white p-5 shadow">
            <NavLink to="/" className=""> Home </NavLink>
            <h1 className="text-center">Perfect Maze</h1>
        </header>
        </>
    )}

export default Header;