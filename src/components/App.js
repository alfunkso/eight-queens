import React from 'react';
import Chessboard from './Chessboard'
import Footer from './Footer';
import Options from './Options';
import * as Solution from '../model/Solution';
import '../styles/App.css';

const debug = require('debug')('alfunkso.net:App');

class App extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            currentFrame: Solution.example(),
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
        this.setState({
            solving: true,
            currentFrame: Solution.initial(),
        });
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
                    <Chessboard pieces={this.state.currentFrame.board} />
                </div>
                <Footer />
            </div>
        );
    }
}

App.propTypes = {};

export default App;
