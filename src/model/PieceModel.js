import ThreatTypes from "./ThreatTypes";
import ThreatModel from './ThreatModel';

export default class PieceModel {
    constructor(kind, color, status, position) {
        this.kind = kind;
        this.color = color;
        this.status = status;
        this.position = position;
        this.threatsByType = {};

        for (let i = 0; i < ThreatTypes.length; ++i) {
            this.threatsByType[ThreatTypes[i]] = this.getThreatenedBoardByType(ThreatTypes[i]);
        }
    }

    getThreatenedBoardByType(threatType) {
        return new ThreatModel(this.position, threatType).threatenedBoard();
    }
}