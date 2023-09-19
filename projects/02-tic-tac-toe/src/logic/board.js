import { COMBOWINNER } from "../constants";

export const checkWinnerFrom = (boardToCheck) => {
  for (const combo of COMBOWINNER) {
    const [a, b, c] = combo;

    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
};

export const checkEndGameFrom = (boardToCheck) => {
  return boardToCheck.every((square) => square !== null);
};
