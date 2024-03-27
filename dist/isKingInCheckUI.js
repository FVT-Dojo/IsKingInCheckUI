"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startGame = exports.convertToChessCoordinates = exports.getPiecePosition = exports.getIsKingInCheckStatus = void 0;
const axios_1 = __importDefault(require("axios"));
async function getIsKingInCheckStatus() {
    const response = await axios_1.default.get("http://localhost:5000/mcoen93ns/IsKingInCheck/1.0.0/game");
    return response.data;
}
exports.getIsKingInCheckStatus = getIsKingInCheckStatus;
function getPiecePosition(chessboard, piece) {
    for (let rowIndex = 0; rowIndex < chessboard.length; rowIndex += 1) {
        const row = chessboard[rowIndex];
        for (let columnIndex = 0; columnIndex < chessboard.length; columnIndex += 1) {
            if (row[columnIndex] === piece)
                return [columnIndex, rowIndex];
        }
    }
    return undefined;
}
exports.getPiecePosition = getPiecePosition;
function convertToChessCoordinates([column, row]) {
    const chessLetter = ["A", "B", "C", "D", "E", "F", "G", "H"][column];
    const chessRow = 8 - row;
    return chessLetter + chessRow;
}
exports.convertToChessCoordinates = convertToChessCoordinates;
async function startGame() {
    const response = await getIsKingInCheckStatus();
    const kingPosition = getPiecePosition(response.chessboard, "K");
    if (kingPosition !== undefined) {
        const kingChessPosition = convertToChessCoordinates(kingPosition);
        console.log(`The king is on ${kingChessPosition}.`);
    }
    const rookPosition = getPiecePosition(response.chessboard, "R");
    if (rookPosition !== undefined) {
        const rookChessPosition = convertToChessCoordinates(rookPosition);
        console.log(`A rook is on ${rookChessPosition}.`);
    }
    console.log("Status: King is not in check.");
}
exports.startGame = startGame;
