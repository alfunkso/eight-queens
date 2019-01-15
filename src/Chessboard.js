import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Tile from './Tile';
import './Chessboard.css';

const debug = require('debug')('alfunkso.net:Chessboard');

function Chessboard() {
    debug("Rendering...");

    let rows = [];

    rows.push(
        <tr>
            <Header label="" />
            <Header label="A" />
            <Header label="B" />
            <Header label="C" />
            <Header label="D" />
            <Header label="E" />
            <Header label="F" />
            <Header label="G" />
            <Header label="H" />
            <Header label="" />
        </tr>
    );

    for ( let i = 0; i < 8; ++i ) {
        let cells = [];
        cells.push(<Header label={8-i} />);

        for ( let j = 0; j < 8; ++j ) {
            cells.push(
                <Tile
                    color={(i+j)%2 === 0 ? "white" : "black"}
                />
                );
        }

        cells.push(<Header label={8-i} />);

        rows.push(<tr>{cells}</tr>);
    }

    rows.push(
        <tr>
            <Header label="" />
            <Header label="A" />
            <Header label="B" />
            <Header label="C" />
            <Header label="D" />
            <Header label="E" />
            <Header label="F" />
            <Header label="G" />
            <Header label="H" />
            <Header label="" />
        </tr>
    );

    return (
        <table className="Chessboard">
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}

Chessboard.propTypes = {};

Chessboard.defaultProps = {};

export default Chessboard;