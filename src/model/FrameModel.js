export default class FrameModel {
    constructor(board, threat, lastPiece) {
        this.board = board;
        this.threat = threat;
        this.lastPiece = lastPiece;
    }

    isFinished() {
        return this.lastPiece != null && this.lastPiece.position.isLastColumn();
    }
}