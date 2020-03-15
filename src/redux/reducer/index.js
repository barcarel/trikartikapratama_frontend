import { combineReducers } from 'redux'
import  authReducer from './AuthReducer'
import UserUpdateInfoReducer from './UserUpdateInfoReducer'
import UserChangePasswordReducer from './UserChangePasswordReducer'
import ProductReducer from './ProductReducer'

export default combineReducers({
    user: authReducer,
    userupdateinfo: UserUpdateInfoReducer ,
    userchangepassword: UserChangePasswordReducer,
    product: ProductReducer
})