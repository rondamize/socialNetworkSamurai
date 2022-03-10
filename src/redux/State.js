// import {rerenderEntireTree} from "./Render";

let store = {
    _state : {
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Rondo Rondo'},
                {id: 2, name: 'Дмитрий Сидоров'},
                {id: 3, name: 'Катя Герасимова'},
                {id: 4, name: 'Катерина Панкина'},
                {id: 5, name: 'Александр Котик'},
                {id: 6, name: 'Владимир Степанов'}
            ],
            messages: [
                {id: 1, text: 'Hey, how is your front-end'},
                {id: 2, text: 'I love you so much!'},
                {id: 3, text: 'You are the best girl in the world bro'},
                {id: 4, text: 'Haven\'t heard from you for so long'},
            ]
        },

        profilePage: {
            posts: [
                {id:1, text:'The 7th episode was for sure the best one in whole season 2!!', likesCount: 30},
                {id:3, text:'Looking forward to see Euphoria s2e7', likesCount: 16},
                {id:2, text:'Hey friend, I\'m here!', likesCount: 15},
                {id:4, text:'Lalalal', likesCount: 15}
            ],
            newPostText: "Hello world!"
        },

        sideBar: {
            friends: [
                {
                    id: 1,
                    name: "Дмитрий",
                    img: "https://cdn.shopify.com/s/files/1/1656/5327/products/Siser_Permanent_Vinyl_Easy_PSV_Blue_Skies_1024x1024.jpg?v=1533831771"
                },
                {
                    id: 2,
                    name: 'Катя',
                    img: 'https://cdn.shopify.com/s/files/1/1656/5327/products/Siser_Permanent_Vinyl_Easy_PSV_Blue_Skies_1024x1024.jpg?v=1533831771'
                },
                {
                    id: 3,
                    name: 'Александр',
                    img: 'https://cdn.shopify.com/s/files/1/1656/5327/products/Siser_Permanent_Vinyl_Easy_PSV_Blue_Skies_1024x1024.jpg?v=1533831771'
                },
                {
                    id: 4,
                    name: 'Владимир',
                    img: 'https://cdn.shopify.com/s/files/1/1656/5327/products/Siser_Permanent_Vinyl_Easy_PSV_Blue_Skies_1024x1024.jpg?v=1533831771'
                }
            ]
        }
    },
    _callSubscriber(state)  {
        alert('State changed!');
    },
    get state() {
       return this._state;
    },
    dispatch(action) {
        if (action.type === 'ADD_POST') {
            let newPost = {
                id: 5,
                text: action.postMessage,
                likesCount: 0
            };
            console.log(this);
            this.state.profilePage.posts.push(newPost);
            this._callSubscriber(store);
        } else if (action.type === 'UPDATE_POST_TEXT') {
            this.state.profilePage.newPostText = action.newText;
            this._callSubscriber(store);
        };
    },
    // addPost(postMessage) {
    //     let newPost = {
    //         id: 5,
    //         text: postMessage,
    //         likesCount: 0
    //     };
    //     console.log(this);
    //     this.state.profilePage.posts.push(newPost);
    //     this._callSubscriber(store);
    // },
    // updatePostText(newText) {
    //     this.state.profilePage.newPostText = newText;
    //     this._callSubscriber(store);
    // },
    subscribe(observer) {
        this._callSubscriber = observer;
    }

};

export default store;
window.store = store.store;
// let rerenderEntireTree = (state) => {
//     alert('State changed!');
// };
//
// let state = {
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: 'Rondo Rondo'},
//             {id: 2, name: 'Дмитрий Сидоров'},
//             {id: 3, name: 'Катя Герасимова'},
//             {id: 4, name: 'Катерина Панкина'},
//             {id: 5, name: 'Александр Котик'},
//             {id: 6, name: 'Владимир Степанов'}
//         ],
//         messages: [
//             {id: 1, text: 'Hey, how is your front-end'},
//             {id: 2, text: 'I love you so much!'},
//             {id: 3, text: 'You are the best girl in the world bro'},
//             {id: 4, text: 'Haven\'t heard from you for so long'},
//         ]
//     },
//
//     profilePage: {
//         posts: [
//             {id:1, text:'The 7th episode was for sure the best one in whole season 2!!', likesCount: 30},
//             {id:3, text:'Looking forward to see Euphoria s2e7', likesCount: 16},
//             {id:2, text:'Hey friend, I\'m here!', likesCount: 15},
//             {id:4, text:'Lalalal', likesCount: 15}
//         ],
//         newPostText: "Hello world!"
//     },
//
//     sideBar: {
//         friends: [
//             {
//                 id: 1,
//                 name: "Дмитрий",
//                 img: "https://cdn.shopify.com/s/files/1/1656/5327/products/Siser_Permanent_Vinyl_Easy_PSV_Blue_Skies_1024x1024.jpg?v=1533831771"
//             },
//             {
//                 id: 2,
//                 name: 'Катя',
//                 img: 'https://cdn.shopify.com/s/files/1/1656/5327/products/Siser_Permanent_Vinyl_Easy_PSV_Blue_Skies_1024x1024.jpg?v=1533831771'
//             },
//             {
//                 id: 3,
//                 name: 'Александр',
//                 img: 'https://cdn.shopify.com/s/files/1/1656/5327/products/Siser_Permanent_Vinyl_Easy_PSV_Blue_Skies_1024x1024.jpg?v=1533831771'
//             },
//             {
//                 id: 4,
//                 name: 'Владимир',
//                 img: 'https://cdn.shopify.com/s/files/1/1656/5327/products/Siser_Permanent_Vinyl_Easy_PSV_Blue_Skies_1024x1024.jpg?v=1533831771'
//             }
//         ]
//     }
// };
//
// export default state;
//
// window.state = state;
//
// export const addPost = (postMessage) => {
//     let newPost = {
//         id: 5,
//         text: postMessage,
//         likesCount: 0
//     };
//
//     state.profilePage.posts.push(newPost);
//     rerenderEntireTree(state);
// };
//
// export const updatePostText = (newText) => {
//     state.profilePage.newPostText = newText;
//     // rerenderEntireTree(state);
//     rerenderEntireTree(state);
// };
//
// export const subscribe = (observer) => {
//     rerenderEntireTree = observer;
// };