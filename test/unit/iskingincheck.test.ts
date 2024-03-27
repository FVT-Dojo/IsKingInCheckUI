import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getIsKingInCheckStatus } from "../../src/isKingInCheckUI";
import { chessboardStub, isKingInCheckStub } from "../stub/stub";

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
      it("Determine the position of the king", () => {
        // assert that the king is on position E1
        const chessboard = chessboardStub;
        const output = [4][7];
        expect(getKingPosition(chessboard)).toEqual(output);
      });
    });
  });
});
