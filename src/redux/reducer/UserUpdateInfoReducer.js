const INITIAL_STATE = {
    id: 0,
    firstname: '',
    lastname: '',
    phoneno: '',
    company: ''
}

const UserUpdateInfoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USER_UPDATEINFO_SUCCESS':
            console.log('reducer bro',action.payload)
            return {
                ...state, ...action.payload[0]
            }
        case 'USER_UPDATEINFO_FAIL':
            return INITIAL_STATE
        default:
            return state
    }
}
export default UserUpdateInfoReducer