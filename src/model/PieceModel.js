import * as ThreatTypes from "./ThreatTypes";
import ThreatModel from './ThreatModel';

export default class PieceModel {
    constructor(kind, color, status, position) {
        this.kind = kind;
        this.color = color;
        this.status = status;
        this.position = position;
        this.threatsByType = {
            [ThreatTypes.NS]: this.getThreatenedBoardByType(ThreatTypes.NS),
            [ThreatTypes.EW]: this.getThreatenedBoardByType(ThreatTypes.EW),
            [ThreatTypes.NWSE]: this.getThreatenedBoardByType(ThreatTypes.NWSE),
            [ThreatTypes.NESW]: this.getThreatenedBoardByType(ThreatTypes.NESW),
        };
    }

    getThreatenedBoardByType(threatType) {
        return new ThreatModel(this.position, threatType).threatenedBoard();
    }
}