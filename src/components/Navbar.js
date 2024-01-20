import React from 'react'

function Navbar() {
  return (
    <>
            <nav class="navbar background">
                <ul class="nav-list">
                    
                    <div class="logo">
                    <li>
                        <a href="/"> A.Westerberg Art & Photography</a>
                    </li>
                    </div> 
                    <div className="menu">
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/blog">Blog</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                    </div>
                </ul>
            </nav>
    </>
  )
}

export default Navbar
