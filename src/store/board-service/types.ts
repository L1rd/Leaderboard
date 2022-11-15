import { LeaderBoardActions } from './actions';

interface ISetUserName {
	type: typeof LeaderBoardActions.SET_USER_NAME;
	payload: undefined;
}

interface ISetUserScore {
	type: typeof LeaderBoardActions.SET_USER_SCORE;
	payload: undefined;
}

export type ActionTypes = ISetUserScore | ISetUserName;
