import React from 'react';
import PropTypes from 'prop-types';
import Palette from './Palette';
import './Tile.css'

const debug = require('debug')('alfunkso.net:Tile');

function Tile({color, highlighted, piece, pieceColor, pieceStatus}) {
    debug("Rendering...");
    return (
        <td
            className="Tile"
            style={{backgroundColor: Palette.tile[color][highlighted ? "highlight" : "main"] }}
        >
            {
                piece != null &&
                <span style={{color: Palette.piece[pieceColor][pieceStatus]}}>
                    {piece}
                </span>
            }

        </td>
    );
}

Tile.propTypes = {
    color: PropTypes.string.isRequired,
    highlighted: PropTypes.bool,
    piece: PropTypes.string,
    pieceColor: PropTypes.string,
    pieceStatus: PropTypes.string,
};

Tile.defaultProps = {
    highlighted: false,
    piece: null,
    pieceColor: "white",
    pieceStatus: "idle"
};

export default Tile;
