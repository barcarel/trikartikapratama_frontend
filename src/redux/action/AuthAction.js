import Axios from "axios"
import { API_URL } from '../../support/API_URL'
import Swal from "sweetalert2"

export const login = (username, password, role) => {
    console.log(`ACTION: username: ${username} and password: ${password} and role: ${role}`)
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

export const userUpdateDetail = (id, firstname, lastname, company) => {
    // console.log(id, firstname, lastname, company)
    return (dispatch) => {
        Axios.post(API_URL + `/user/userupdatedetail`, {
            id,
            firstname,
            lastname,
            company
        })
            .then((res) => {
                console.log('MASUK PAK EKO')
                dispatch({
                    type: 'USER_UPDATEINFO_SUCCESS',
                    payload: res.data
                })
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    text: 'error updating information'
                })
                dispatch({ type: 'USER_UPDATEINFO_FAIL' })
            })
    }
}