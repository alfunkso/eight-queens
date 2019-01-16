import React from 'react';
import PropTypes from 'prop-types';
import './styles/Options.css';

const debug = require('debug')('alfunkso.net:Options');

function Options({delay, onStart, onDelayChange}) {
    debug("Rendering...");
    return (
        <div className="Options">
            <button id="start">Start</button>
            <div className="DelayControl">
                <label htmlFor="delay">Delay: {delay}ms</label>
                <input
                    id="delay"
                    type="range"
                    step={10}
                    min={0}
                    max={2000}
                    value={delay}
                />
            </div>
        </div>
    );
}

Options.propTypes = {
    delay: PropTypes.number.isRequired,
    onStart: PropTypes.func,
    onDelayChang: PropTypes.func,
};

Options.defaultProps = {};

export default Options;