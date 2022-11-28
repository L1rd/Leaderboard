import { LeaderBoardActions } from './actions';
import { ActionTypes } from './types';

const inititalState: object[] = [];

export const boardReducer = (state: object[], action: ActionTypes): object[] => {
	const { type, payload } = action;

	switch (type) {
		case LeaderBoardActions.SET_USER_NAME:
			return state;
		case LeaderBoardActions.SET_USER_SCORE:
			return state;
		default:
			return inititalState;
	}
};

export default boardReducer;
