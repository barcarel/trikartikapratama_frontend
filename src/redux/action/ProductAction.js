import Axios from 'axios'
import { API_URL } from '../../support/API_URL'
import Swal from "sweetalert2"

export const getProductDetail = (id) => {
    return (dispatch) => {
        Axios.get(API_URL + `/products/getoneproduct?id=${id}`)
            .then((res) => {
                dispatch({
                    type: 'GET_PRODUCTDETAIL_SUCCESS',
                    payload: res.data
                })
                console.log(res, 'sukses breh')
            })
            .catch((err) => {
                dispatch({ type: 'GET_PRODUCTDETAIL_FAIL' })
                console.log(err, 'masalah ni')
            })
    }
}