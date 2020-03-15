const INITIAL_STATE = {
    id: 0,
    oldpassword: '',
    newpassword: '',
    confirmnewpassword: ''
}

const UserChangePasswordReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USER_CHANGEPASSWORD_SUCCESS':
            console.log('reducer bro',action.payload)
            return {
                ...state, ...action.payload
            }
        case 'USER_CHANGEPASSWORD_FAIL':
            return INITIAL_STATE
        default:
            return state
    }
}
export default UserChangePasswordReducer