import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Tile from './Tile';
import {Collection} from 'immutable';
import './styles/Chessboard.css';

const debug = require('debug')('alfunkso.net:Chessboard');

function Chessboard({pieces}) {
    debug("Rendering...");

    let rows = [];

    rows.push(
        <tr key="r0">
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
        cells.push(<Header key={`ht${8-i}`} label={8-i} />);

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

        cells.push(<Header key={8-i} label={8-i} />);

        rows.push(<tr key={`r${i+1}`}>{cells}</tr>);
    }

    rows.push(
        <tr key="r9">
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

Chessboard.propTypes = {
    pieces: PropTypes.instanceOf(Collection).isRequired,
};

export default Chessboard;