import * as ItemActionTypes from '../actiontypes/items';

export const addItem = content => {
    return {
        type: ItemActionTypes.ADD_ITEM,
        content
    };
};

export const moveItemUp = index => {
    return {
        type: ItemActionTypes.MOVE_ITEM_UP,
        index
    };
};

export const moveItemDown = index => {
    return {
        type: ItemActionTypes.MOVE_ITEM_DOWN,
        index
    };
};


export const removeItem = index => {
    return {
        type: ItemActionTypes.REMOVE_ITEM,
        index
    };
};

export const completeItem = (index, checked) => {
    return {
        type: ItemActionTypes.COMPLETE_ITEM,
        index,
        checked
    };
};