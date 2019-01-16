import React from 'react';
import './styles/Footer.css';

class Footer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { showPopup: false };

        this.handleShowPopup = this.handleShowPopup.bind(this);
    }
    
    handleShowPopup() {
        this.setState(prevState => ({showPopup: !prevState.showPopup}));
    }

    render() {
        return (
            <footer className="Footer">
                {
                    this.state.showPopup &&
                    <div className="Popup">
                        <h2>The 8 Queens Puzzle</h2>
                        <p>
                            The eight queens puzzle is the problem of placing eight chess queens on an 8×8 chessboard so that no two queens threaten each other. Thus, a solution requires that no two queens share the same row, column, or diagonal.
                        </p>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://en.wikipedia.org/wiki/Eight_queens_puzzle"
                        >
                            Wikipedia Article
                        </a>
                    </div>
                }
                <span>
                    <button
                        className="PopupButton"
                        onClick={this.handleShowPopup}
                    >
                        What is this?
                    </button>
                </span>
                <span>|</span>
                <span>Alfonso Cornejo 2019</span>
                <span>|</span>
                <span>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://alfunkso.net"
                    >
                        https://alfunkso.net
                    </a>
                </span>
            </footer>
        );
    }
}

export default Footer;