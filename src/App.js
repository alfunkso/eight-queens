import React from 'react';
import Chessboard from './Chessboard'
import Footer from './Footer';
import PieceModel from './PieceModel';
import './App.css';

const debug = require('debug')('alfunkso.net:App');

class App extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            pieces: [
                [null, null, null, null, null, new PieceModel("queen", "white", "idle", {i:0,j:5}), null, null,],
                [null, null, null, new PieceModel("queen", "white", "moving", {i:1,j:3}), null, null, null, null,],
                [null, null, null, null, null, null, new PieceModel("queen", "white", "removing", {i:2,j:6}), null,],
                [new PieceModel("queen", "white", "removing", {i:3,j:0}), null, null, null, null, null, null, null,],
                [null, null, null, null, null, null, null, new PieceModel("queen", "white", "idle", {i:4,j:7}),],
                [null, new PieceModel("queen", "white", "idle", {i:5,j:1}), null, null, null, null, null, null,],
                [null, null, null, null, new PieceModel("queen", "white", "idle", {i:6,j:4}), null, null, null,],
                [null, null, new PieceModel("queen", "white", "idle", {i:7,j:2}), null, null, null, null, null,],
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
