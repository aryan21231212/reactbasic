import React from 'react'
import brand from '/public/images/brand_logo.png'

const Nav = () => {
  return (
    <nav className='p-3 d-flex align-items-center justify-content-around'>
        <div>
            <img id='nike' className='' src= {brand} alt="logo" />
        </div>
        <div id='content' className='d-flex gap-3'>
            <h4>Menu</h4>
            <h4>Location</h4>
            <h4>About</h4>
            <h4>Contact</h4>
        </div>
        <div>
            <button>Login</button>
        </div>
    </nav>
  )
}

export default Nav


