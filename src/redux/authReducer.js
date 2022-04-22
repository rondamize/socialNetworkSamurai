import {AuthorisationApi} from "../api/api";

const SET_AUTHORISED_USER_DATA = 'SET_AUTHORISED_USER_DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuthorised: false,
    isFetching: false
};

//в качестве state передаем dialogsPage
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHORISED_USER_DATA: {
            return {
                ...state,
                isAuthorised: true,
                ...action.authUserData
            }
        }
        default:
            return state;
    };
};

export default authReducer;

export const setAuthorisedUserData = (id, login, email) => ({type: SET_AUTHORISED_USER_DATA, authUserData: {id, login, email}});

export const authorisationThunkCreator = () => {
    return (dispatch) => {
        AuthorisationApi.Auth()
            .then(data => {
                if (data.resultCode == 0) {
                    let {id, login, email} = data.data;
                    dispatch(setAuthorisedUserData(id, login, email));
                }
            })
    }
}