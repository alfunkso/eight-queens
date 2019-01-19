import ThreatTypes from "./ThreatTypes";
import ThreatModel from './ThreatModel';

// eslint-disable-next-line no-unused-vars
const debug = require('debug')('alfunkso.net:PieceModel');

export default class PieceModel {
    constructor(kind, color, status, position) {
        this.kind = kind;
        this.color = color;
        this.status = status;
        this.position = position;
        this.threatsByType = {};
        this.buildThreatsByType();
    }

    getThreatenedBoardByType(threatType) {
        return new ThreatModel(this.position, threatType).threatenedBoard();
    }

    buildThreatsByType() {
        for (let i = 0; i < ThreatTypes.length; ++i) {
            this.threatsByType[ThreatTypes[i]] = this.getThreatenedBoardByType(ThreatTypes[i]);
        }
        debug(`Piece ${this.position.i},${this.position.j} threatening: ${this.allThreatsToString()}`);
    }

    move(newPos) {
        this.position = newPos;
        this.buildThreatsByType();
    }

    allThreatsToString() {
        let res = "\n";

        for ( let i = 0; i < 8; ++i ) {
            for ( let j = 0; j < 8; ++j ) {
                let threatened = false;
                for ( let t = 0; t < ThreatTypes.length; ++t ) {
                    threatened = threatened || this.threatsByType[ThreatTypes[t]][i][j];
                }
                res += `${threatened ? 1 : 0} `;
            }
            res += "\n";
        }

        return res;
    }
}