const INITIAL_STATE = {
    data: []
}

const AllUpsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_UPS_SUCCESS':
            // console.log('all products reducer', action.payload)
            return {
                ...state, data: action.payload
            }
        case 'GET_UPS_FAIL':
            return INITIAL_STATE
        default:
            return state
    }
}
export default AllUpsReducer