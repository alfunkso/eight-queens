import React from 'react';
import PropTypes from 'prop-types';
import Palette from './Palette';

const debug = require('debug')('alfunkso.net:Header');

function Header({label}) {
    debug("Rendering...");
    return (
        <th style={{ color: Palette.header.foreground, background: Palette.header.background }}>
            {label}
        </th>
    );
}

Header.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default Header;
