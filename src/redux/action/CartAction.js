import Axios from "axios"
import { API_URL } from '../../support/API_URL'
import Swal from "sweetalert2"

export const getUserCart = (id) => {
    return (dispatch) => {
        var token = localStorage.getItem('token')
        Axios.get(API_URL + `/cart/getAllUserCart?id=${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                let totalCartPrice = 0
                res.data.map((val) => totalCartPrice += val.totalprice)
                res.data.totalPrice = totalCartPrice

                dispatch({
                    type: 'USER_ADDTOCART_SUCCESS',
                    payload: res.data
                })
            })
            .catch((err) => {
                // Swal.fire({
                //     icon: 'error',
                //     text: 'unable to get user cart'
                // })
            })
    }
}

export const addToCart = (iduser, idproduct, productqty, totalprice) => {
    return (dispatch) => {
        Axios.post(API_URL + `/cart/postUserCart`, {
            iduser,
            idproduct,
            productqty,
            totalprice
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
                    timer: '1300'

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

export const updateProductQty = (iduser, idproduct, totalqty, totalprice) => {
    console.log('totalprice action', totalprice)
    return (dispatch) => {
        Axios.post(API_URL + `/cart/updateProductQty`, {
            iduser,
            idproduct,
            totalqty,
            totalprice
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

export const deleteProductCart = (iduser, idproduct) => {
    return (dispatch) => {
        Axios.delete(API_URL + `/cart/deleteProductCart?iduser=${iduser}&idproduct=${idproduct}`)
            .then((res) => {
                Swal.fire({
                    icon: 'success',
                    text: 'item removed from cart',
                    showConfirmButton: false,
                    timer: '1000'
                })
            })
    }
}

export const postUserTransaction = (iduser, idproduct, fullname, phoneno, address, province, city, note, bank, totalprice, productqty) => {
    return (dispatch) => {
        // console.log(iduser, idproduct, fullname, phoneno, address, province, city, note, bank)
        Axios.post(API_URL + `/cart/postUserTransaction`, {
            iduser,
            idproduct,
            fullname,
            phoneno,
            address,
            province,
            city,
            note,
            bank,
            totalprice, 
            productqty
        })
            .then((res) => {
                var isSaved = 'true'
                res.data.isSaved = isSaved
                // console.log(res.data.isSaved)
                dispatch({
                    type: 'USER_TRANSACTION_SUCCESS',
                    payload: res.data
                })
            })
            .catch((err) => console.log(err))
    }
}

export const getUserTransaction = (iduser) => {
    // console.log(getUser)
    return(dispatch) => {
        Axios.get(API_URL + `/cart/getUserTransaction?iduser=${iduser}`)
        .then((res) => {
            dispatch({
                type: 'USER_TRANSACTION_SUCCESS',
                payload: res.data
            })
        })
    }
}

export const deleteUserTransaction = (iduser, idtransaction) => {
    return(dispatch) => {
        Axios.delete(API_URL + `/cart/deleteUserTransaction?iduser=${iduser}&idtransaction=${idtransaction}`)
        .then((res) => {
        })
    }
}