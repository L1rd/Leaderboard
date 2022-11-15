import { Reducer } from "redux";

interface BoardState {
   score: number,
}

const inititalState ={
   score:0,
} as BoardState

export const boardReducer: Reducer<BoardState> = (state: BoardState | undefined, action: any):any => {
	switch (action.type) {
		
		default:
			 break;
  }
}