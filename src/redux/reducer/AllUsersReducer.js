const INITIAL_STATE = {
    data: []
}

const AllUsersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_ALLUSER_SUCCESS':
            // console.log('cart reducer', action.payload)
            return {
                ...state, data: action.payload
            }
        case 'GET_ALLUSER_FAIL':
            return INITIAL_STATE
        default:
            return state
    }
}
export default AllUsersReducer