import React from 'react'
import logo from  "./todo.png"


const Header = () => {
    return (
        <header className="header">
          <nav>
          <div className="heading">
          <h1>To-Do list</h1>
          </div>
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
          </nav>
        </header>
    )
}

export default Header
