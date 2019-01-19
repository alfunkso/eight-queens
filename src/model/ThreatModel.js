import PosModel from "./PosModel";
import * as ThreatTypes from "./ThreatTypes";

// eslint-disable-next-line no-unused-vars
const debug = require('debug')('alfunkso.net:ThreatModel');

export default class ThreatModel {
    constructor(position, type) {
        this.position = position;
        this.type = type;
    }

    threatenedBoard() {
        let result = Array(8);
        for ( let i = 0; i < 8; ++i ) {
            result[i] = Array(8).fill(false);
        }

        const [dir1, dir2] = ThreatModel.threatDirections(this.type);

        for ( let cdt = this.position; cdt.isWithinBoard(); cdt = cdt.add(dir1) ) {
            result[cdt.i][cdt.j] = true;
        }

        for ( let cdt = this.position; cdt.isWithinBoard(); cdt = cdt.add(dir2) ) {
            result[cdt.i][cdt.j] = true;
        }

        return result;
    }

    isThreatened(i, j) {
        return this.threatenedBoard()[i][j];
    }

    static threatDirections(threatType) {
        switch (threatType) {
            case ThreatTypes.NS:
                return [new PosModel(1,0), new PosModel(-1,0)];
            case ThreatTypes.EW:
                return [new PosModel(0,1), new PosModel(0,-1)];
            case ThreatTypes.NWSE:
                return [new PosModel(-1,-1), new PosModel(1,1)];
            case ThreatTypes.NESW:
                return [new PosModel(-1,1), new PosModel(1,-1)];
            default:
                throw new Error("Unknown threatType: " + threatType);
        }
    }

    static toString(threatenedBoard) {
        let res = "\n";

        for ( let i = 0; i < 8; ++i ) {
            for ( let j = 0; j < 8; ++j ) {
                res += `${threatenedBoard[i][j] ? 1 : 0} `;
            }
            res += "\n";
        }

        return res += "\n";
    }
}