import React from 'react';
import './Footer.css';

const debug = require('debug')('alfunkso.net:Footer');

function Footer() {
    debug("Rendering...");
    return (
        <footer className="Footer">
            What is this? | Alfonso Cornejo 2019 | https://alfunkso.net
        </footer>
    );
}

export default Footer;