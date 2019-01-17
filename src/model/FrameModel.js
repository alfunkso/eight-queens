import {IDLE} from './PieceStatuses'

export default class FrameModel {
    constructor(board, threat, lastPiece) {
        this.board = board;
        this.threat = threat;
        this.lastPiece = lastPiece;
    }

    isFinished() {
        return this.lastPiece != null
            && this.threat == null
            && this.lastPiece.position.isLastColumn()
            && this.lastPiece.status === IDLE
        ;
    }
}