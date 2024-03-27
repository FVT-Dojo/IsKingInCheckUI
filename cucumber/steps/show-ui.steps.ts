// eslint-disable-next-line import/no-extraneous-dependencies
import { loadFeature, defineFeature } from "jest-cucumber";
import { startGame } from "../../src/isKingInCheckUI";

const feature = loadFeature("./cucumber/features/show-ui.feature");

const consoleSpy = jest.spyOn(global.console, "log");

defineFeature(feature, (test) => {
  test("Displaying the initial chessboard with fixed piece positions", ({
    given,
    when,
    then,
    and,
  }) => {
    given(
      "the backend responds with a chessboard with a rook on A5 and the king on E1",
      () => {
        // jest.mockSomething();
      }
    );

    when("the user starts the game from the console", () => {
      startGame();
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
