const INITIAL_STATE = {
    data: []
}

const TransactionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USER_TRANSACTION_SUCCESS':
            return {
                ...state, data: action.payload
            }
        case 'USER_TRANSACTION_FAIL':
            return INITIAL_STATE
        default:
            return state
    }
}
export default TransactionReducer