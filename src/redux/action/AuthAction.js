import Axios from "axios"
import { API_URL } from '../../support/API_URL'
import Swal from "sweetalert2"

export const login = (username, password) => {
    console.log(`ACTION: username: ${username} and password: ${password}`)
    return (dispatch) => {
        Axios.post(API_URL + `/user/login`, {
            username,
            password
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
                    text: 'wrong username/password'
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