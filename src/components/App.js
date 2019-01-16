import React from 'react';
import Chessboard from './Chessboard'
import Footer from './Footer';
import PieceModel from '../model/PieceModel';
import Pos from '../model/PosModel';
import Options from './Options';
import '../styles/App.css';

const debug = require('debug')('alfunkso.net:App');

class App extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            pieces: [
                [null, null, null, null, null, new PieceModel("queen", "white", "idle", new Pos(0,5)), null, null,],
                [null, null, null, new PieceModel("queen", "white", "moving", new Pos(1,3)), null, null, null, null,],
                [null, null, null, null, null, null, new PieceModel("queen", "white", "removing", new Pos(2,6)), null,],
                [new PieceModel("queen", "white", "removing", new Pos(3,0)), null, null, null, null, null, null, null,],
                [null, null, null, null, null, null, null, new PieceModel("queen", "white", "idle", new Pos(4,7)),],
                [null, new PieceModel("queen", "white", "idle", new Pos(5,1)), null, null, null, null, null, null,],
                [null, null, null, null, new PieceModel("queen", "white", "idle", new Pos(6,4)), null, null, null,],
                [null, null, new PieceModel("queen", "white", "idle", new Pos(7,2)), null, null, null, null, null,],
            ],
            delay: 200,
            solving: false,
        };

        this.handleStart = this.handleStart.bind(this);
        this.handleDelayChange = this.handleDelayChange.bind(this);
    }
    
    handleDelayChange(event) {
        this.setState({delay: event.target.value});
    }

    handleStart() {
        debug("Start");
        this.setState({solving: true});
    }

    render() {
        debug("Rendering...");
        return (
            <div className="App">
                <div className="OptionsContainer">
                    <Options
                        solving={this.state.solving}
                        delay={this.state.delay}
                        onStart={this.handleStart}
                        onDelayChange={this.handleDelayChange}
                    />
                </div>
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
