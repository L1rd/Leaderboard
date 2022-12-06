import { LeaderBoardActions } from './actions';

interface ISetUserName {
	type: typeof LeaderBoardActions.SET_USER_INFO;
	payload: any;
}

interface IEditUserInfo {
	type: typeof LeaderBoardActions.EDIT_USER_INFO;
	payload: any;
}

export type ActionTypes = IEditUserInfo | ISetUserName;
