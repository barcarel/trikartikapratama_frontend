import { combineReducers } from 'redux'
import  authReducer from './AuthReducer'
import UserUpdateInfoReducer from './UserUpdateInfoReducer'
import UserChangePasswordReducer from './UserChangePasswordReducer'

export default combineReducers({
    user: authReducer,
    userupdateinfo: UserUpdateInfoReducer ,
    userchangepassword: UserChangePasswordReducer
})