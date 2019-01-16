import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Options.css';

const debug = require('debug')('alfunkso.net:Options');

function Options({solving, delay, onStart, onDelayChange}) {
    debug("Rendering...");
    return (
        <div className="Options">
            <button
                id="start"
                onClick={onStart}
                disabled={solving}
            >
                {solving ? "Solving..." : "Start"}
            </button>
            <div className="DelayControl">
                <label htmlFor="delay">Delay: {delay}ms</label>
                <input
                    id="delay"
                    type="range"
                    step={10}
                    min={0}
                    max={2000}
                    value={delay}
                    onChange={onDelayChange}
                />
            </div>
        </div>
    );
}

Options.propTypes = {
    solving: PropTypes.bool,
    delay: PropTypes.number.isRequired,
    onStart: PropTypes.func.isRequired,
    onDelayChange: PropTypes.func.isRequired,
};

Options.defaultProps = {
    solving: false,
};

export default Options;