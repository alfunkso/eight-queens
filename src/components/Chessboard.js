import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Tile from './Tile';
import '../styles/Chessboard.css';

const debug = require('debug')('alfunkso.net:Chessboard');

function Chessboard({pieces}) {
    debug("Rendering...");

    let rows = [];

    rows.push(
        <tr key="r0">
            <Header label="" />
            <Header label="A (0)" />
            <Header label="B (1)" />
            <Header label="C (2)" />
            <Header label="D (3)" />
            <Header label="E (4)" />
            <Header label="F (5)" />
            <Header label="G (6)" />
            <Header label="H (7)" />
            <Header label="" />
        </tr>
    );

    for ( let i = 0; i < 8; ++i ) {
        let cells = [];
        cells.push(<Header key={`ht${8-i}`} label={`${8-i} (${i})`} />);

        for ( let j = 0; j < 8; ++j ) {
            cells.push(
                <Tile
                    key={`t${i}${j}`}
                    color={(i+j)%2 === 0 ? "white" : "black"}
                    piece={pieces.getIn([i,j])}
                    highlighted={i===1 || j === 3}
                />
                );
        }

        cells.push(<Header key={8-i} label={`${8-i} (${i})`} />);

        rows.push(<tr key={`r${i+1}`}>{cells}</tr>);
    }

    rows.push(
        <tr key="r9">
            <Header label="" />
            <Header label="A (0)" />
            <Header label="B (1)" />
            <Header label="C (2)" />
            <Header label="D (3)" />
            <Header label="E (4)" />
            <Header label="F (5)" />
            <Header label="G (6)" />
            <Header label="H (7)" />
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

Chessboard.propTypes = {
    pieces: PropTypes.array.isRequired,
};

export default Chessboard;