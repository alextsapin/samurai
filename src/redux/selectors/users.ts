export const getAllUsersSL = (state: any) => {
    return state.users.userBox;
}

export const getUsersCountSL = (state: any) => {
    return state.users.usersCount;
}

export const getPageSizeSL = (state: any) => {
    return state.users.pageSize;
}

export const getСurrentPageSL = (state: any) => {
    return state.users.currentPage;
}

export const getPageArraySL = (state: any) => {
    return state.users.pageArray;
}

export const getFollowUsersSL = (state: any) => {
    return state.users.followUsers;
}