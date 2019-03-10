import React from 'react'

import cat from '../assets/images/cat.jpg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={cat} alt="" /></span>
        <h1>Mehvish Saleem</h1>
        <p>Data Scientist, Self-proclaimed photographer.</p>
    </header>
)

export default Header
