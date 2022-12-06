import { LeaderBoardActions } from './actions';
import { ActionTypes } from './types';

const inititalState: any[] = [];

export const boardReducer = (state: any[], action: ActionTypes): any[] => {
	const { type, payload } = action;

	switch (type) {
		case LeaderBoardActions.SET_USER_INFO:
			state.push(payload);
			return [...state];
		case LeaderBoardActions.EDIT_USER_INFO: {
			const currentUser = state.find(item => item.id === payload.id);
			currentUser.name = payload.name;
			currentUser.score = payload.score;
			return state.map(user => {
				if (user.id === currentUser.id) {
					return currentUser;
				}
				return user;
			});
		}
		default:
			return inititalState;
	}
};

export default boardReducer;
