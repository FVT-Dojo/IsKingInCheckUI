import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {
  convertToChessCoordinates,
  getIsKingInCheckStatus,
  getPiecePosition,
} from "../../src/isKingInCheckUI";
import {
  emptyChessboardStub,
  chessboardStubKingE1,
  isKingInCheckStub,
  chessboardStubKingA8,
} from "../stub/stub";

const axiosMock = new MockAdapter(axios);

describe("This is the unit test suite for our IsKingInCheck functionality. Here you will find all your itty gritty details on how it works", () => {
  describe("The first step is to perform a GET call to our good friend, the back-end", () => {
    it("When the backend responds successfully, this should be handled.", async () => {
      axiosMock
        .onGet("http://localhost:5000/mcoen93ns/IsKingInCheck/1.0.0/game")
        .reply(200, isKingInCheckStub);
      const response = await getIsKingInCheckStatus();

      expect(response).toEqual(isKingInCheckStub);
    });
    it("An error should also be handled.", async () => {
      axiosMock
        .onGet("http://localhost:5000/mcoen93ns/IsKingInCheck/1.0.0/game")
        .reply(500);

      await expect(getIsKingInCheckStatus()).rejects.toThrow(
        "Request failed with status code 500"
      );
    });
    describe("When a response has been received, determine the position of the chesspieces", () => {
      describe("Determine the position of a piece in coordinates", () => {
        describe("when the king is on position", () => {
          it("E1", () => {
            const chessboard = chessboardStubKingE1;
            const output = [4, 7];
            expect(getPiecePosition(chessboard, "K")).toEqual(output);
          });
          it("A8", () => {
            const chessboard = chessboardStubKingA8;
            const output = [0, 0];
            expect(getPiecePosition(chessboard, "K")).toEqual(output);
          });
          it("No king", () => {
            const chessboard = emptyChessboardStub;
            const output = undefined;
            expect(getPiecePosition(chessboard, "K")).toEqual(output);
          });
        });
        describe("when the rook is on position", () => {
          it("A5", () => {
            const chessboard = chessboardStubKingE1;
            const output = [0, 3];
            expect(getPiecePosition(chessboard, "R")).toEqual(output);
          });
          it("H7", () => {
            const chessboard = chessboardStubKingA8;
            const output = [7, 1];
            expect(getPiecePosition(chessboard, "R")).toEqual(output);
          });
          it("No rook", () => {
            const chessboard = emptyChessboardStub;
            const output = undefined;
            expect(getPiecePosition(chessboard, "R")).toEqual(output);
          });
        });
      });
      describe("Now we need to convert these coordinates to chess coordinates", () => {
        it("(4,7) => E1", () => {
          const input = [4, 7] as [number, number];
          const output = "E1";
          expect(convertToChessCoordinates(input)).toEqual(output);
        });
        it("(0,0) => A8", () => {
          const input = [0, 0] as [number, number];
          const output = "A8";
          expect(convertToChessCoordinates(input)).toEqual(output);
        });
      });
    });
  });
});
