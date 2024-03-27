## Title: Viewing the Chessboard in "Is the King in Check"

## Description:
As a user, I want to see a chessboard with a king and a rook placed on it when I start the game through the console, so that I can instantly determine whether the king is in check.

## Acceptance Criteria FE:

    Upon starting the game from the console, a chessboard should be displayed on the UI.
    The chessboard should contain only two pieces: a king and a rook.
    The positions of the king and the rook are fixed and known (e.g., king at E1, rook at A5).
    A label should be displayed stating whether the king is in check based on the positions of the pieces.
    The UI should be simple and minimalistic, with clear visibility of the chess pieces and the status label.

## Gherkin Scenario:

### Scenario: Displaying the initial chessboard with fixed piece positions

    Given the backend responds with a chessboard with a rook on A5 and the king on E4
    When the user starts the game from the console
    Then the user sees a message "The king is on E1."
    And the user sees a message "A rook is on A5."
    And the user sees a message "Status: King is not in check."



## UI Sketch:
    The king is on E1.
    A rook is on A5.
    Status: King is not in check.