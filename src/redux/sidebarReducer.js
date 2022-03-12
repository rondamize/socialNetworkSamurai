let initialState = {
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
};

const sidebarReducer = (state = initialState, action) => {
    return state;
};

export default sidebarReducer;