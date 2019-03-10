import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg';
import github from '../assets/images/github.png';

const Footer = (props) => (
    <footer id="footer">
        <section>
        <h2>Contact</h2>
            <dl className="alt">
                <dt>Email</dt>
                <dd><a href="#">mehvishs@sfu.ca</a></dd>
        </dl>
        </section>
        <p className="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>
)

export default Footer
