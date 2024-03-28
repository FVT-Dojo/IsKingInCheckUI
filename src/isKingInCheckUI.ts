import axios from "axios";

export async function getIsKingInCheckStatus() {
  const response = await axios.get("http://localhost:5000/game");
  return response.data;
}

export function getPiecePosition(
  chessboard: string[][],
  piece: string
): [number, number] | undefined {
  for (let rowIndex = 0; rowIndex < chessboard.length; rowIndex += 1) {
    const row = chessboard[rowIndex];
    for (
      let columnIndex = 0;
      columnIndex < chessboard.length;
      columnIndex += 1
    ) {
      if (row[columnIndex] === piece) return [columnIndex, rowIndex];
    }
  }
  return undefined;
}

export function convertToChessCoordinates([column, row]: [number, number]) {
  const chessLetter = ["A", "B", "C", "D", "E", "F", "G", "H"][column];
  const chessRow = 8 - row;

  return chessLetter + chessRow;
}

export async function startGame() {
  const response = await getIsKingInCheckStatus();
  const kingPosition = getPiecePosition(
    response.chessboardStatus.chessboard,
    "K"
  );
  if (kingPosition !== undefined) {
    const kingChessPosition = convertToChessCoordinates(kingPosition);
    console.log(`The king is on ${kingChessPosition}.`);
  }

  const rookPosition = getPiecePosition(
    response.chessboardStatus.chessboard,
    "R"
  );
  if (rookPosition !== undefined) {
    const rookChessPosition = convertToChessCoordinates(rookPosition);
    console.log(`A rook is on ${rookChessPosition}.`);
  }

  console.log("Status: King is not in check.");
}
