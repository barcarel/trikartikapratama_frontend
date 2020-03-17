const INITIAL_STATE = {
    data: []
}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USER_ADDTOCART_SUCCESS':
            // console.log('cart reducer', action.payload)
            return {
                ...state, data: action.payload
            }
        case 'USER_CHECKOUT':
            return INITIAL_STATE
        default:
            return state
    }
}
export default CartReducer