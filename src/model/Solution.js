import {fromJS} from 'immutable';
import FrameModel from "./FrameModel";
import PieceModel from "./PieceModel";
import PosModel from "./PosModel";
import ThreatTypes from "./ThreatTypes";
import * as PieceStatuses from './PieceStatuses';

export function example() {
    return new FrameModel(
        fromJS([
            [null, null, null, null, null, new PieceModel("queen", "white", "idle", new PosModel(0,5)), null, null,],
            [null, null, null, new PieceModel("queen", "white", "moving", new PosModel(1,3)), null, null, null, null,],
            [null, null, null, null, null, null, new PieceModel("queen", "white", "removing", new PosModel(2,6)), null,],
            [new PieceModel("queen", "white", "removing", new PosModel(3,0)), null, null, null, null, null, null, null,],
            [null, null, null, null, null, null, null, new PieceModel("queen", "white", "idle", new PosModel(4,7)),],
            [null, new PieceModel("queen", "white", "idle", new PosModel(5,1)), null, null, null, null, null, null,],
            [null, null, null, null, new PieceModel("queen", "white", "idle", new PosModel(6,4)), null, null, null,],
            [null, null, new PieceModel("queen", "white", "idle", new PosModel(7,2)), null, null, null, null, null,],
        ]),
        null,
        null,
    );
}

export function initial() {
    const initialPiece = new PieceModel("queen", "white", "moving", new PosModel(7,0));

    return new FrameModel(
        fromJS([
            [null, null, null, null, null, null, null, null,],
            [null, null, null, null, null, null, null, null,],
            [null, null, null, null, null, null, null, null,],
            [null, null, null, null, null, null, null, null,],
            [null, null, null, null, null, null, null, null,],
            [null, null, null, null, null, null, null, null,],
            [null, null, null, null, null, null, null, null,],
            [initialPiece, null, null, null, null, null, null, null,],
        ]),
        null,
        initialPiece,
    );
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
        let board = removePiece(prevBoard, lastPiece.position);
        board = advancePieceAt(board, lastPiece.position.j - 1);
        // TODO: Get reference of moved piece and find threats
    }

}

function findThreat(board, pos) {
    for ( let j = pos.j-1; j >= 0; --j ) {
        const cdt = findPieceIn(board, j);

        for ( let t = 0; t < ThreatTypes.length; ++t ) {
            if (cdt.threatsByType[ThreatTypes[t]][pos.i][pos.j]) {
                return cdt.threatsByType[ThreatTypes[t]];
            }
        }
    }

    return null;
}

function advancePieceAt(board, j) {
    const pieceToMove = findPieceIn(board, j);
    const lastPos = pieceToMove.position;
    const nextPos = lastPos.add(new PosModel(0,-1));
    if ( nextPos.isWithinBoard() ) {
        let nextBoard = addPiece(board, nextPos, new PieceModel("queen", "white", PieceStatuses.MOVING, nextPos));
        return removePiece(nextBoard, lastPos);
    } else {
        pieceToMove.status = PieceStatuses.REMOVING;
        return board;
    }
}

function removePiece(board, pos) {
    return board.deleteIn([pos.i, pos.j]);
}

function addPiece(board, pos, piece) {
    return board.setIn([pos.i, pos.j], piece);
}

function findPrevPiece(board, lastPiece) {
    return findPieceIn(board, lastPiece.position.j - 1);
}

function findPieceIn(board, j) {
    for ( let i = 0; i < 8; ++i ) {
        const cdt = board.getIn([i, j]);
        if ( cdt != null ) { return cdt; }
    }

    throw new Error("Can't find pieve at j: " + j);
}