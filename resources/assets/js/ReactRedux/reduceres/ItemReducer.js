const Item = {
    add_menu_toggle:false,
    search: '',
    data : {
        item:{}
    }
};
const ItemReducer = (state = Item, action) =>{
    switch (action.type) {
        case "ViewItemsData":
              state = {
                ...state,
                data: {
                    item: action.payload
                }
            };
            break;
        case "SEARCHITEM":
              state = {
                ...state,
                search: action.payload
            };
            break;
    }

    return state;
};

export default ItemReducer;
