import { CALCULATE_CHANGE, RESET } from "./constant/action-type";

const denominations = [100, 50, 20, 10, 5, 1];


const initialState = {
  amount: 0,
  change: [],
};


export const changeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CALCULATE_CHANGE:
      let newAmount = action.payload;
      const change = denominations.map((denomination) => {
        const count = Math.floor(newAmount / denomination);
        newAmount %= denomination;
        return { denomination, count };
      });
      return { ...state, amount: action.payload, change };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
