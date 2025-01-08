import { CALCULATE_CHANGE, RESET } from "../constant/action-type";



export const calculateChange = (amount) => ({
  type: CALCULATE_CHANGE,
  payload: amount,
});

export const resetChange = () => ({
  type: RESET,
});
