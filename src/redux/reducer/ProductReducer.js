const INITIAL_STATE = {
    id: 0,
    name: '',
    description: '',
    categoryid: 0,
    specification: '',
    imagepath: '',
    pdf: '',
    status: ''
}

const ProductReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_PRODUCTDETAIL_SUCCESS':
            console.log('reducer get product by id',action.payload)
            return {
                ...state, ...action.payload
            }
        case 'GET_PRODUCTDETAIL_FAIL':
            return INITIAL_STATE
        default:
            return state
    }
}
export default ProductReducer