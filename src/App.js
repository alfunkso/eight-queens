import React from 'react';
import Chessboard from './Chessboard'
import Footer from './Footer';
import Piece from './Piece';
import './App.css';

const debug = require('debug')('alfunkso.net:App');

class App extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            pieces: [
                [null, null, null, null, null, new Piece("queen", "black", "idle", {}), null, null,],
                [null, null, null, new Piece("queen", "black", "idle", {}), null, null, null, null,],
                [null, null, null, null, null, null, new Piece("queen", "black", "idle", {}), null,],
                [new Piece("queen", "black", "idle", {}), null, null, null, null, null, null, null,],
                [null, null, null, null, null, null, null, new Piece("queen", "black", "idle", {}),],
                [null, new Piece("queen", "black", "idle", {}), null, null, null, null, null, null,],
                [null, null, null, null, new Piece("queen", "black", "idle", {}), null, null, null,],
                [null, null, new Piece("queen", "black", "idle", {}), null, null, null, null, null,],
            ],
        };
    }

    render() {
        debug("Rendering...");
        return (
            <div className="App">
                <header className="AppHeader">
                    The 8 Queens Puzzle
                </header>
                <div className="BoardContainer">
                    <Chessboard pieces={this.state.pieces} />
                </div>
                <Footer />
            </div>
        );
    }
}

App.propTypes = {};

export default App;
