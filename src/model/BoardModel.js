import {fromJS} from 'immutable';
import PieceModel from "./PieceModel";
import PosModel from "./PosModel";

export default class BoardModel {
    constructor() {
        this.matrix = fromJS(
            Array(8).fill(
                Array(8).fill(
                    null
                )
            )
        );
        this.pieces = [];
    }

    setupExample() {
        const toAdd = [
            new PieceModel("queen", "white", "idle", new PosModel(0,5)),
            new PieceModel("queen", "white", "moving", new PosModel(1,3)),
            new PieceModel("queen", "white", "removing", new PosModel(2,6)),
            new PieceModel("queen", "white", "removing", new PosModel(3,0)),
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

        this.removePiece(toMove.position);
        toMove.position = newPos;
        this.addPiece(toMove);

        return toMove;
    }

    removePiece(pos) {
        this.pieces = this.pieces.splice(pos.j, 1);
        this.matrix = this.matrix.deleteIn([pos.i, pos.j]);

        return this;
    }

    addPiece(piece, pos = piece.position) {
        this.pieces = this.pieces.splice(pos.j, 0, piece);
        this.matrix = this.matrix.setIn([pos.i, pos.j], piece);

        return this;
    }

    findPieceAt(j) {
        return this.pieces[j];
    }



}