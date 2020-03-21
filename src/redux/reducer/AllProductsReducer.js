const INITIAL_STATE = {
    data: []
}

const AllProductsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_ALLPRODUCTS_SUCCESS':
            // console.log('cart reducer', action.payload)
            return {
                ...state, data: action.payload
            }
        case 'GET_ALL_PRODUCTS_FAIL':
            return INITIAL_STATE
        default:
            return state
    }
}
export default AllProductsReducer