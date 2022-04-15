const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    totalUsersCount: 0,
    usersPerPage: 10,
    currentPage: 1
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
        default:
            return state;
    };
};

export default usersReducer;

export const toggleFollowActionCreator = (userId) => ({type: TOGGLE_FOLLOW, userId: userId});

export const setUsersActionCreator = (users) => ({type: SET_USERS, users: users});

export const setCurrentPageCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setTotalUsersCountCreator = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount: totalCount})