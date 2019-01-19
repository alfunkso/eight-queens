import BoardModel from './BoardModel';
import FrameModel from "./FrameModel";
import PieceModel from "./PieceModel";
import PosModel from "./PosModel";
import ThreatTypes from "./ThreatTypes";
import * as PieceStatuses from './PieceStatuses';

// eslint-disable-next-line no-unused-vars
const debug = require('debug')('alfunkso.net:Solution');

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
    const lastPos = lastPiece.position;

    if ( lastPiece.status === PieceStatuses.IDLE ) {
        const newPos = new PosModel(7, lastPos.j+1);
        if ( newPos.isWithinBoard() ) {
            const newPiece = new PieceModel("queen", "white", PieceStatuses.MOVING, newPos);
            const newBoard = prevBoard.addPiece(newPiece);
            return new FrameModel(newBoard, findThreat(newBoard, newPos), newPiece);
        } else {
            return new FrameModel(prevBoard, null, null);
        }
    } else if ( lastPiece.status === PieceStatuses.MOVING ) {
        if ( lastThreat == null ) {
            lastPiece.status = PieceStatuses.IDLE;
            return new FrameModel(prevBoard, null, lastPiece);
        } else {
            return advancePiece(prevBoard, lastPiece.position.j, lastThreat);
        }
    } else if ( lastPiece.status === PieceStatuses.REMOVING ) {
        let board = prevBoard.removePiece(lastPos);
        return advancePiece(board, lastPos.j - 1, lastThreat);
    }

}

function advancePiece(board, j, lastThreat) {
    const newPiece = board.movePiece(j, new PosModel(-1, 0));
    if ( newPiece !== false ) {
        newPiece.status = PieceStatuses.MOVING;
        return new FrameModel(board, findThreat(board, newPiece.position), newPiece);
    } else {
        const toRemove = board.findPieceAt(j);
        toRemove.status = PieceStatuses.REMOVING;
        return new FrameModel(board, lastThreat, toRemove);
    }
}

function findThreat(board, pos) {
    debug(`findThreat for ${pos.i},${pos.j}`);
    for ( let j = pos.j-1; j >= 0; --j ) {
        const cdt = board.findPieceAt(j);

        debug(`candidate piece at ${j}: ${cdt}`);

        for ( let t = 0; t < ThreatTypes.length; ++t ) {
            if (cdt.threatsByType[ThreatTypes[t]][pos.i][pos.j]) {
                debug("threat found", cdt.threatsByType[ThreatTypes[t]]);
                return cdt.threatsByType[ThreatTypes[t]];
            }
        }
    }

    return null;
}
