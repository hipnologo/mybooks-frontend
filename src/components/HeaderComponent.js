import React from 'react'

const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div>
                    <a href = "localhost:8080" className='navbar-brand'>
                        MyBooks Management System
                    </a>
                </div>
            </nav>
        </header>

    </div>
  )
}

export default HeaderComponent