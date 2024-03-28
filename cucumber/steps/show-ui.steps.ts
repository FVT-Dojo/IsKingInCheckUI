// eslint-disable-next-line import/no-extraneous-dependencies
import { loadFeature, defineFeature } from "jest-cucumber";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { startGame } from "../../src/isKingInCheckUI";
import { isKingInCheckStub } from "../../test/stub/stub";

const feature = loadFeature("./cucumber/features/show-ui.feature");

const consoleSpy = jest.spyOn(console, "log").mockImplementation();
const axiosMock = new MockAdapter(axios);

defineFeature(feature, async (test) => {
  test("Displaying the initial chessboard with fixed piece positions", async ({
    given,
    when,
    then,
    and,
  }) => {
    given(
      "the backend responds with a chessboard with a rook on A5 and the king on E1",
      () => {
        axiosMock
          .onGet("http://localhost:5000/game")
          .reply(200, isKingInCheckStub);
      }
    );

    when("the user starts the game from the console", async () => {
      await startGame();
    });

    then(/^the user sees a message "(.*)"$/, (message) => {
      expect(consoleSpy).toHaveBeenCalledWith(message);
    });

    and(/^the user sees a message "(.*)"$/, (message) => {
      expect(consoleSpy).toHaveBeenCalledWith(message);
    });

    and(/^the user sees a message "(.*)"$/, (message) => {
      expect(consoleSpy).toHaveBeenCalledWith(message);
    });
  });
});
