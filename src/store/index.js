import {legacy_createStore as createStore} from "redux";
import { changeReducer } from "./reducer";

export const store = createStore(changeReducer);


export default store;
