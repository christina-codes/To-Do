import * as ItemActionTypes from '../actiontypes/items';

const initState = {
    items: [
        {
            content: 'Grocery shopping',
            checked: false
        },
        {
            content: 'Fold the laundry',
            checked: true
        }
    ]
}

export default function ItemReducer(state=initState, action) {

    switch(action.type) {
        case ItemActionTypes.ADD_ITEM: {
            const addItemList = [...state.items, {
                content: action.content,
                checked: false
            }];
            return {
                items: addItemList
            }
        }

        case ItemActionTypes.MOVE_ITEM_UP: {
            const currentItem = state.items[action.index];
            const newIndex = action.index - 1;
            const upList = state.items.filter((item, index) => {
                return index != action.index;
            });
            upList.splice(newIndex, 0, currentItem)
            return {
                ...state,
                items: upList
            };
        }

        case ItemActionTypes.MOVE_ITEM_DOWN: {
            const currentItem = state.items[action.index];
            const newIndex = action.index + 1;
            const downList = state.items.filter((item, index) => {
                return index != action.index;
            });
            downList.splice(newIndex, 0, currentItem)
            return {
                ...state,
                items: downList
            };
        }

        case ItemActionTypes.REMOVE_ITEM: {
            const filteredList = state.items.filter((item, index) => {
                return index != action.index;
            })
            return {
                ...state,
                items: filteredList
            };
        }

        case ItemActionTypes.COMPLETE_ITEM: {
            const updateItemList = state.items.map((item, index) => {
                if (index === action.index) {
                    return {
                        ...item,
                        checked: !state.items[index].checked
                    };
                }
                return item;
            });
            return {
                ...state,
                items: updateItemList
            };
        }
            

        default:
            return state;
    }
}