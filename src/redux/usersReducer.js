const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, photoUrl: 'https://ae01.alicdn.com/kf/HTB1ktC6RXXXXXcFXXXXq6xXFXXX4/Diamond-embroidery-cat-Animals-Diamond-Mosaic-Embroidery-Ribbons-Mosaic-Pictures-DIY-5d-The-Diamod-Mosaica-Bead.jpg',
            followed: false, name: 'Ivan', status: 'Wanna hang out?', location: {country: 'Belarus', city: 'Minsk'}},
        {id: 2, photoUrl: 'https://kartinkin.net/uploads/posts/2022-02/1644919517_17-kartinkin-net-p-sobachki-kartinki-17.jpg',
            followed: true, name: 'Michail', status: 'Remember me?', location: {country: 'Ukraine', city: 'Kyiv'}},
        {id: 3, photoUrl: 'https://funik.ru/wp-content/uploads/2018/12/5401765deadc827f3822.jpg',
            followed: true, name: 'Maxim', status: 'I love dogs', location: {country: 'Georgia', city: 'Tbilisi'}},
        {id: 4, photoUrl: 'https://funart.pro/uploads/posts/2021-07/1627174872_4-funart-pro-p-godovalii-medvezhonok-zhivotnie-krasivo-fo-4.jpg',
            followed: false, name: 'Eugenia', status: 'I wanna die', location: {country: 'Poland', city: 'Warsaw'}},
    ]
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
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    };
};

export default usersReducer;

export const toggleFollowActionCreator = (userId) => ({type: TOGGLE_FOLLOW, userId: userId});

export const setUsersActionCreator = (users) => ({type: SET_USERS, users: users});