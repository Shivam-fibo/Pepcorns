import React from 'react'
import "./Navbar.css"
import logo from "../Navbar/logo.png"

const Navbar = () => {
  return (
    <div className='navabar'>
      <div className="container">
        <div className="logo">
            <img src={logo} width= {100} height={25} alt="" />
        </div>
        <div className="middle_part">
            <nav>
                <ul>
                  <button className='btn_list'> <li>Startups</li></button>
                  <button className='btn_list'> <li>Raise Funding</li></button>
                  <button className='btn_list'> <li>Learn</li></button>
                </ul>
            </nav>
        </div>
        <div className="right_part">
            <button className="login">Login</button>
            <button className="login">SignUp</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
