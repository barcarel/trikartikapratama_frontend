const INITIAL_STATE = {
    id: 0,
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    phoneno: '',
    company: '',
    role: '',
    status: '',
    token: ''
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            console.log('reducer',action.payload)
            return {
                ...state, ...action.payload
            }
        case 'USER_FULLPROFILE':
            console.log('reducer',action.payload)
            return {
                ...state, ...action.payload
            }
        case 'LOGOUT':
            return INITIAL_STATE
        default:
            return state
    }
}
export default authReducer