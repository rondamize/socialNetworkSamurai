import {UsersApi} from "../api/api";

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const MANAGE_FOLLOW_BUTTON = 'MANAGE_FOLLOW_BUTTON';

let initialState = {
    users: [],
    totalUsersCount: 0,
    usersPerPage: 5,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [23551, 23550]
};

//в качестве state передаем dialogsPage
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    return u;
                })};

        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }

        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }

        }
        case MANAGE_FOLLOW_BUTTON: {
            return {
                ...state,
                followingInProgress: action.isInProgress
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id != action.id)

            }

        }
        default:
            return state;
    };
};

export default usersReducer;

export const toggleFollow = (userId) => ({type: TOGGLE_FOLLOW, userId: userId});

export const setUsers = (users) => ({type: SET_USERS, users: users});

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})

export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount: totalCount})

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching})

export const manageFollowButton = (id, isInProgress) => ({type: MANAGE_FOLLOW_BUTTON, isInProgress: isInProgress, id:id})

export const getUsersThunkCreator = (currentPage, usersPerPage) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        UsersApi.getUsers(currentPage, usersPerPage)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            })
    }
}

export const unfollowThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(manageFollowButton(id, true));
        UsersApi.unfollowUser(id)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(toggleFollow(id));
                }
                dispatch(manageFollowButton(id, false));
            })
    }
}

export const followThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(manageFollowButton(id, true));
        UsersApi.followUser(id)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(toggleFollow(id));
                }
                dispatch(manageFollowButton(id, false));
            })
    }
}