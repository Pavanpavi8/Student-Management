import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"
const Navbar = () => {
  return (
    <>
    <div className='navigationbar'>
    <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQm89ELodmh-KGMBR3Al0J-KxZuKHvHcmUjQ&usqp=CAU" alt="" />
    </div>
    <div className='menu'>
        <ul>
        <li>
            <Link to={"/"}>Home</Link>
        </li>
        <li>
            <Link to={"/login"}>Login</Link>
        </li>
        <li>
            <Link to={"/signup"}>Signup</Link>
        </li>
        </ul>
    </div>
    </div>
    </>
  )
}

export default Navbar
