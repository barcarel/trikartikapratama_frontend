import Axios from "axios"
import { API_URL } from '../../support/API_URL'
import Swal from "sweetalert2"

export const getUserCart = (id) => {
    return (dispatch) => {
        Axios.get(API_URL + `/cart/getAllUserCart?id=${id}`)
            .then((res) => {
                dispatch({
                    type: 'USER_ADDTOCART_SUCCESS',
                    payload: res.data
                })
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    text: 'unable to get user cart'
                })
            })
    }
}

export const addToCart = (iduser, idproduct, productqty) => {
    return (dispatch) => {
        Axios.post(API_URL + `/cart/postUserCart`, {
            iduser,
            idproduct,
            productqty
        })
            .then((res) => {
                dispatch({
                    type: 'USER_ADDTOCART_SUCCESS',
                    payload: res.data
                })
                Swal.fire({
                    icon: 'success',
                    text: 'sucessfully added to cart',
                    showConfirmButton: false,
                    timer: '1500'

                })
            })
            .catch((err) => {
                console.log(err)
                Swal.fire({
                    icon: 'error',
                    text: 'unable to add to cart'
                })
            })
    }
}

export const updateProductQty = (iduser, idproduct, totalqty) => {
    return (dispatch) => {
        Axios.post(API_URL + `/cart/updateProductQty`, {
            iduser,
            idproduct,
            totalqty
        })
            .then((res) => {
                dispatch({
                    type: 'USER_ADDTOCART_SUCCESS',
                    payload: res.data
                })
                Swal.fire({
                    icon: 'success',
                    text: 'sucessfully updated cart',
                    showConfirmButton: false,
                    timer: '1500'

                })
            })
            .catch((err) => {
                console.log(err)
                Swal.fire({
                    icon: 'error',
                    text: 'unable to update product quantity'
                })
            })
    }
}

export const deleteUserCart = (iduser) => {
    return (dispatch) => {
        // console.log('iduser',iduser)
        Axios.delete(API_URL + `/cart/deleteUserCart?iduser=${iduser}`)
            .then((res) => {
                dispatch({
                    type: 'USER_EMPTYCART'
                })
            })
            .catch((err) => {
                console.log(err)
                Swal.fire({
                    icon: 'error',
                    text: 'unable to clear user cart'
                })
            })
    }
}