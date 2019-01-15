import React from 'react';
import PropTypes from 'prop-types';
import Palette from './Palette';
import Piece from './Piece';
import './Tile.css'

const debug = require('debug')('alfunkso.net:Tile');

function Tile({color, highlighted, piece}) {
    debug("Rendering...");
    return (
        <td
            className="Tile"
            style={{backgroundColor: Palette.tile[color][highlighted ? "highlight" : "main"] }}
        >
            {
                piece != null &&
                <span style={{color: Palette.piece[piece.color][piece.status]}}>
                    {piece.kind}
                </span>
            }

        </td>
    );
}

Tile.propTypes = {
    color: PropTypes.string.isRequired,
    highlighted: PropTypes.bool,
    piece: PropTypes.instanceOf(Piece),
};

Tile.defaultProps = {
    highlighted: false,
    piece: null,
};

export default Tile;
