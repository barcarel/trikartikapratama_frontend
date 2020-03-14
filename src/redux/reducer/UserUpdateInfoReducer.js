const INITIAL_STATE = {
    id: 0,
    firstname: '',
    lastname: '',
    company: ''
}

const UserUpdateInfoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USER_UPDATEINFO_SUCCESS':
            console.log('reducer bro',action.payload)
            return {
                ...state, ...action.payload
            }
        case 'USER_UPDATEINFO_FAIL':
            return INITIAL_STATE
        default:
            return state
    }
}
export default UserUpdateInfoReducer