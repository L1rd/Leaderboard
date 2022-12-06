export enum LeaderBoardActions {
	SET_USER_INFO = 'SET_USER_INFO',
	EDIT_USER_INFO = 'EDIT_USER_INFO',
}

export const setUserInfo = (payload: any) => ({
	type: LeaderBoardActions.SET_USER_INFO,
	payload,
});

export const editUserInfo = (payload: any) => ({
	type: LeaderBoardActions.EDIT_USER_INFO,
	payload,
});
