import Axios from "axios"
import { API_URL } from '../../support/API_URL'
import Swal from "sweetalert2"

export const login = (username, password, role) => {
    // console.log(`ACTION: username: ${username} and password: ${password} and role: ${role}`)
    return (dispatch) => {
        Axios.post(API_URL + `/user/login`, {
            username,
            password,
            role
        })
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                dispatch({
                    type: 'LOGIN',
                    payload: res.data
                })
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    text: 'invalid username or password'
                })
                dispatch({
                    type: 'LOGOUT'
                })
            })
    }
}

export const logout = () => {
    console.log('KELUAR BRO')
    return (dispatch) => {
        dispatch({ type: 'USER_EMPTYCART' })
        localStorage.removeItem('token')
        dispatch({ type: 'LOGOUT' })
    }
}

export const keepLogin = () => { //one function that executes two diff reducers
    return (dispatch) => {
        const token = localStorage.getItem('token')
        console.log(token)
        if (token) {
            const headers = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
            Axios.post(API_URL + `/user/keepLogin`, {}, headers)
                .then((res) => {
                    localStorage.setItem('token', res.data.token) //data from userController API
                    dispatch({
                        type: 'LOGIN',
                        payload: res.data
                    })
                })
                .catch((err) => {
                    dispatch({
                        type: 'LOGOUT'
                    })
                })
        }
    }
}

export const register = (username, password, role) => {
    return (dispatch) => {
        Axios.post(API_URL + `/user/userRegister`, {
            username,
            password,
            role
        })
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                dispatch({
                    type: 'LOGIN',
                    payload: res.data
                })
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    text: 'invalid username or password'
                })
                dispatch({
                    type: 'LOGOUT'
                })
            })
    }
}

export const userUpdateDetail = (id, firstname, lastname, phoneno, company) => {
    // console.log(id, firstname, lastname, company)
    return (dispatch) => {
        Axios.post(API_URL + `/user/userupdatedetail`, {
            id,
            firstname,
            lastname,
            phoneno,
            company
        })
            .then((res) => {
                localStorage.setItem('token', res.data)
                dispatch({
                    type: 'USER_FULLPROFILE',
                    payload: res.data
                })
                Swal.fire({
                    icon: 'success',
                    text: 'succesfully updated information'
                })
            })
            .catch((err) => {
                // console.log(err)
                Swal.fire({
                    icon: 'error',
                    text: 'error updating information'
                })
                dispatch({ type: 'USER_UPDATEINFO_FAIL' })
            })
    }
}

export const changePassword = (id, oldpassword, newpassword, confirmnewpassword) => {
    return (dispatch) => {
        Axios.put(API_URL + `/user/userchangepassword?id=${id}`, {
            id,
            oldpassword,
            newpassword,
            confirmnewpassword
        })
            .then((res) => {
                if (res.data == 'wrongpassword') {
                    Swal.fire({
                        icon: 'error',
                        text: 'incorrect old password. Please try again.'
                    })
                } else {
                    dispatch({
                        type: 'USER_CHANGEPASSWORD_SUCCESS',
                        payload: res.data
                    })
                    Swal.fire({
                        icon: 'success',
                        text: 'password changed!'
                    })
                }
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    text: 'error change password'
                })
                dispatch({ type: 'USER_CHANGEPASSWORD_FAIL' })
            })
    }
}

export const getAllUsers = (role) => {
    return (dispatch) => {
        Axios.get(API_URL + `/user/getallusers?role=${role}`)
            .then((res) => {
                // console.log(res.data)
                dispatch({
                    type: 'GET_ALLUSER_SUCCESS',
                    payload: res.data
                })
            })
            .catch((err) => {
                dispatch({ type: 'GET_ALLUSER_FAIL' })
            })
    }
}