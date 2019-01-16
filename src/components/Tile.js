import React from 'react';
import PropTypes from 'prop-types';
import Palette from './Palette';
import Piece from './Piece';
import PieceModel from '../model/PieceModel';

const debug = require('debug')('alfunkso.net:Tile');

function Tile({color, highlighted, piece}) {
    debug("Rendering...");
    return (
        <td
            className="Tile"
            style={{backgroundColor: Palette.tile[color][highlighted ? "highlight" : "main"] }}
        >
            { piece != null && <Piece piece={piece} /> }
        </td>
    );
}

Tile.propTypes = {
    color: PropTypes.string.isRequired,
    highlighted: PropTypes.bool,
    piece: PropTypes.instanceOf(PieceModel),
};

Tile.defaultProps = {
    highlighted: false,
    piece: null,
};

export default Tile;
