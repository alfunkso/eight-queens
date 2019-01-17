import BoardModel from './BoardModel';
import FrameModel from "./FrameModel";
import PieceModel from "./PieceModel";
import PosModel from "./PosModel";
import ThreatTypes from "./ThreatTypes";
import * as PieceStatuses from './PieceStatuses';

export function example() {
    return new FrameModel(new BoardModel().setupExample(), null, null);
}

export function initial() {
    const initialPiece = new PieceModel("queen", "white", "moving", new PosModel(7,0));
    return new FrameModel(new BoardModel().addPiece(initialPiece), null, initialPiece);
}

export function nextFrame(prevFrame) {
    if ( prevFrame == null || !(prevFrame instanceof FrameModel) ) {
        throw new Error("prevFrame must be a not null instance of a FrameModel");
    }

    if ( prevFrame.isFinished() ) {
        throw new Error("The solution has already finished solving");
    }

    const prevBoard = prevFrame.board;
    const lastPiece = prevFrame.lastPiece;
    const lastThreat = prevFrame.threat;

    if ( lastPiece.status === PieceStatuses.IDLE ) {
        // TODO
    } else if ( lastPiece.status === PieceStatuses.MOVING ) {
        // TODO
    } else if ( lastPiece.status === PieceStatuses.REMOVING ) {
        const lastPos = lastPiece.position;
        let board = prevBoard.removePiece(lastPos);
        const newPiece = board.movePiece(lastPos.j-1, new PosModel(-1,0));
        newPiece.status = PieceStatuses.MOVING;
        const threat = findThreat(board, newPiece.position);
        return new FrameModel(board, threat, newPiece);
    }

}

function findThreat(board, pos) {
    for ( let j = pos.j-1; j >= 0; --j ) {
        const cdt = board.findPieceAt(j);

        for ( let t = 0; t < ThreatTypes.length; ++t ) {
            if (cdt.threatsByType[ThreatTypes[t]][pos.i][pos.j]) {
                return cdt.threatsByType[ThreatTypes[t]];
            }
        }
    }

    return null;
}
