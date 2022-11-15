import { createStore } from "redux";
import { boardReducer } from "../board-service/reducer";

export const store = createStore(boardReducer);