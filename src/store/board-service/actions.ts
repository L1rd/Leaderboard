export enum LeaderBoardActions {
	SET_USER_NAME = 'SET_USER_NAME',
	SET_USER_SCORE = 'SET_USER_SCORE',
}

export const setUserName = (payload: string) => ({
	type: LeaderBoardActions.SET_USER_NAME,
	payload,
});

export const setUserScore = (payload: number) => ({
	type: LeaderBoardActions.SET_USER_SCORE,
	payload,
});
