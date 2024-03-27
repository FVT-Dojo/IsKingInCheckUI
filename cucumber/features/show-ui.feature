Feature: Show UI

Scenario: Displaying the initial chessboard with fixed piece positions

    Given the backend responds with a chessboard with a rook on A5 and the king on E1
    When the user starts the game from the console
    Then the user sees a message "The king is on E1."
    And the user sees a message "A rook is on A5."
    And the user sees a message "Status: King is not in check."