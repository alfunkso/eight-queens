import FrameModel from "./FrameModel";
import PieceModel from "./PieceModel";
import PosModel from "./PosModel";
import * as PieceStatuses from './PieceStatuses';

export function initial() {
    const initialPiece = new PieceModel("queen", "white", "moving", new PosModel(7,0));

    return new FrameModel(
        [
            [null, null, null, null, null, null, null, null,],
            [null, null, null, null, null, null, null, null,],
            [null, null, null, null, null, null, null, null,],
            [null, null, null, null, null, null, null, null,],
            [null, null, null, null, null, null, null, null,],
            [null, null, null, null, null, null, null, null,],
            [null, null, null, null, null, null, null, null,],
            [initialPiece, null, null, null, null, null, null, null,],
        ],
        null,
        initialPiece,
    );
}

/**
 * Finds the next frame in the solution.
 * @param prevFrame {FrameModel} The previous frame to consider for solving.
 */
export function nextFrame(prevFrame) {
    if ( prevFrame == null || !(prevFrame instanceof FrameModel) ) {
        throw new Error("prevFrame must be a not null instance of a FrameModel");
    }

    if ( prevFrame.isFinished() ) {
        throw new Error("The solution has already finished solving");
    }

    const lastPiece = prevFrame.lastPiece;

    if ( lastPiece.status === PieceStatuses.IDLE ) {
        // TODO
    } else if ( lastPiece.status === PieceStatuses.MOVING ) {
        // TODO
    } else if ( lastPiece.status === PieceStatuses.REMOVING ) {
        // TODO
    }

    return prevFrame;
}

/**
 * @param board {Array<Array<PieceModel>>}
 * @param pos {PosModel}
 * @returns {Array<Array<PieceModel>>} The board modified inplace
 */
function removePiece(board, pos) {
    board[pos.i][pos.j] = null;
    return board;
}