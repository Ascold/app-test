export const albums = function(state: any = [], action) {
    switch (action.type) {
        case 'ADD_ALBUM':
            return action.payload;
        default:
            return state;
    }
};
