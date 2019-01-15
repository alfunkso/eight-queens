import React from 'react';
import PropTypes from 'prop-types';

const debug = require('debug')('alfunkso.net:Tile');

function Tile() {
    debug("Rendering...");
    return (
        <div>
            Hello world from Tile
        </div>
    );
}

Tile.propTypes = {
    color: PropTypes.string.isRequired,
    piece: PropTypes.string,
    pieceColor: PropTypes.string,
};

Tile.defaultProps = {
    piece: null,
    pieceColor: "white",
};

export default Tile;
