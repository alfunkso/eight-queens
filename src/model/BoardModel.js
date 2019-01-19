import {fromJS} from 'immutable';
import PieceModel from "./PieceModel";
import PosModel from "./PosModel";

// eslint-disable-next-line no-unused-vars
const debug = require('debug')('alfunkso.net:BoardModel');

export default class BoardModel {
    constructor() {
        this.matrix = fromJS(
            Array(8).fill(
                Array(8).fill(
                    null
                )
            )
        );
        this.pieces = Array(8);
    }

    setupExample() {
        const toAdd = [
            new PieceModel("queen", "white", "idle", new PosModel(0,5)),
            new PieceModel("queen", "white", "idle", new PosModel(1,3)),
            new PieceModel("queen", "white", "idle", new PosModel(2,6)),
            new PieceModel("queen", "white", "idle", new PosModel(3,0)),
            new PieceModel("queen", "white", "idle", new PosModel(4,7)),
            new PieceModel("queen", "white", "idle", new PosModel(5,1)),
            new PieceModel("queen", "white", "idle", new PosModel(6,4)),
            new PieceModel("queen", "white", "idle", new PosModel(7,2)),
        ];

        for ( let i = 0; i < toAdd.length; ++i ) {
            this.addPiece(toAdd[i]);
        }

        return this;
    }

    movePiece(j, delta) {
        const toMove = this.findPieceAt(j);
        const newPos = toMove.position.add(delta);

        if ( newPos.isWithinBoard() ) {
            this.removePiece(toMove.position);
            toMove.move(newPos);
            this.addPiece(toMove);

            return toMove;
        } else {
            return false;
        }
    }

    removePiece(pos) {
        debug(`removePiece at ${pos.i},${pos.j}`);
        this.pieces[pos.j] = null;
        this.matrix = this.matrix.deleteIn([pos.i, pos.j]);
        debug(`pieces: `, this.pieces);

        return this;
    }

    addPiece(piece, pos = piece.position) {
        debug(`addPiece at ${pos.i},${pos.j}: ${piece.status}`);
        this.pieces[pos.j] = piece;
        this.matrix = this.matrix.setIn([pos.i, pos.j], piece);
        debug(`pieces: `, this.pieces);

        return this;
    }

    findPieceAt(j) {
        return this.pieces[j];
    }



}