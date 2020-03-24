import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import AdminNavbar from '../Components/AdminNavbar'
import Axios from 'axios';
import Swal from 'sweetalert2';
import { getAllProducts } from '../redux/action'
import { API_URL } from '../support/API_URL'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBRow, MDBCol, MDBInput, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter } from "mdbreact";
import AddIcon from '@material-ui/icons/Add';


class AdminHomepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            datalimit: [],
            isEdit: false,
            modal: false,

            uploadSecificationFileName: 'choose file',
            addSpecificationFileName: ' Specification Image',
            addSpecificationFile: undefined,

            // uploadPdfFileName: 'choose file',
            // addPdfFileName: 'PDF',
            // addPdfFile: undefined,

            uploadFileName: 'choose file',
            addImageFileName: 'Product Image',
            addImageFile: undefined,

            editImageFileName: 'choose image',
            // editPdfFileName: 'select file',
            editSpecificationFileName: 'select image',
            editImageFile: undefined,
            // editPdfFile: undefined,
            editSpecificationFile: undefined,
        }
    }

    componentDidMount() {
        this.props.getAllProducts()
        this.getProductsLimit(0)
        // console.log(this.state.datalimit)
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal })
    }

    getProductsLimit = (datalimit) => {
        console.log('datalimit', datalimit)
        Axios.get(API_URL + `/products/getProductLimit?datalimit=${datalimit}`)
            .then((res) => {
                this.setState({ datalimit: res.data })
            })
            .catch((err) => console.log(err))
    }

    onBtnAddSpecificationFile = (e) => { //upload specification
        console.log('specification', e.target.files[0])
        if (e.target.files[0]) {
            this.setState({ addSpecificationFileName: e.target.files[0].name, addSpecificationFile: e.target.files[0] })
            var preview = document.getElementById('specpreview')
            preview.src = URL.createObjectURL(e.target.files[0])
        } else {
            this.setState({ addSpecificationFileName: 'Select Image', addSpecificationFile: undefined })
        }
    }

    onBtnAddImageFile = (e) => { //upload product image
        console.log('gambar', e.target.files[0])
        if (e.target.files[0]) {
            this.setState({ addImageFileName: e.target.files[0].name, addImageFile: e.target.files[0] })
            var preview = document.getElementById('imgpreview')
            preview.src = URL.createObjectURL(e.target.files[0])
        } else {
            this.setState({ addImageFileName: 'Select Image', addImageFile: undefined })
        }
    }

    // onBtnAddPdfFile = (e) => { //upload pdf
    //     console.log('pdf', e.target.files[0])
    //     if (e.target.files[0]) {
    //         this.setState({ addPdfFileName: e.target.files[0].name, addPdfFile: e.target.files[0] })
    //     } else {
    //         this.setState({ addPdfFileName: 'select pdf', addPdfFile: undefined })
    //     }
    // }

    onBtnEditPdfFile = (e) => {
        if (e.target.files[0]) {
            this.setState({ editPdfFileName: e.target.files[0].name, editPdfFile: e.target.files[0] })
        } else {
            this.setState({ editPdfFileName: 'Select pdf', editPdfFile: undefined })
        }
    }

    onBtnEditSpecificationFile = (e) => {
        console.log('gambar', e.target.files[0])
        if (e.target.files[0]) {
            this.setState({ editSpecificationFileName: e.target.files[0].name, editSpecificationFile: e.target.files[0] })
            var preview = document.getElementById('specedit')
            preview.src = URL.createObjectURL(e.target.files[0])
        } else {
            this.setState({ editSpecificationFileName: 'Select Image', editSpecificationFile: undefined })
        }
    }

    onBtnEditImageFile = (e) => {
        console.log('gambar', e.target.files[0])
        if (e.target.files[0]) {
            this.setState({ editImageFileName: e.target.files[0].name, editImageFile: e.target.files[0] })
            var preview = document.getElementById('imgedit')
            preview.src = URL.createObjectURL(e.target.files[0])
        } else {
            this.setState({ editImageFileName: 'Select Image', editImageFile: undefined })
        }
    }




    isEdit = (e) => {
        this.setState({ isEdit: true })
    }

    addProduct = () => {
        let { addImageFile, addSpecificationFile } = this.state;

        var name = this.newName.value
        var description = this.newDescription.value
        var categoryid = this.state.addTypeId
        var price = this.newPrice.value

        if (name && description && categoryid && price && addImageFile && addSpecificationFile) {
            let formData = new FormData()
            let obj = {
                name: name,
                description: description,
                categoryid: categoryid,
                price: price
            }
            formData.append('data', JSON.stringify(obj)) //dijadiin JSON
            formData.append('image', addImageFile)
            formData.append('specification', addSpecificationFile)
            // console.log(formData)
            Axios.post(API_URL + '/products/postProduct', formData)
                .then((res) => {
                    console.log(res.data)
                    this.setState({ addImageFileName: 'select image', addImageFile: undefined, addSpecificationFileName: 'Select Image', addSpecificationFile: undefined })
                    Swal.fire({
                        icon: 'success',
                        text: 'sucessfully added a product.',
                        showConfirmButton: false
                    })
                    window.location.reload()
                    this.getProducts()
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            Swal.fire({
                icon: 'error',
                text: 'please fill in all the fields.',
                timer: '3000'
            })
        }
    }

    onChangeEditSelectType = (e) => {
        console.log(parseInt(e.target.value))
        this.setState({ editTypeId: parseInt(e.target.value) })
    }

    onChangeSelectType = (e) => {
        this.setState({ addTypeId: parseInt(e.target.value) })
    }

    addTypeDropdown = () => {
        return (
            <select
                className="form-control form-control-sm"
                value={this.state.addTypeId}
                onChange={this.onChangeSelectType}
            >
                <option value={0}>type</option>
                <option value={1}>UPS</option>
                <option value={2}>Battery</option>
            </select>
        )
    }

    editTypeDropdown = (categoryid) => {
        return (
            <select
                className="form-control form-control-sm"
                value={this.state.editTypeId}
                onChange={this.onChangeEditSelectType}
            >
                {/* <option value={0}>{catid}</option> */}
                {categoryid == 1
                    ?
                    <>
                        <option value={1}>UPS</option>
                        <option value={2}>Battery</option>
                    </>
                    :
                    <>
                        <option value={2}>Battery</option>
                        <option value={1}>UPS</option>
                    </>
                }
            </select>
        )
    }

    editProduct = (id) => {
        this.setState({ selectedId: id })
    }

    cancelEdit = () => {
        this.setState({ selectedId: null, editImageFileName: 'Select Image', editImageFile: undefined })
    }

    submitEdit = (id) => {

        Swal.fire({
            title: 'submit changes?',
            icon: 'info',
            text: 'are you sure you want to make changes to this product?',
            showCancelButton: true,
            cancelButtonText: 'no',
            confirmButtonText: 'yes',
        }).then((result) => {
            if (result.value) {
                let { editImageFile, editSpecificationFile } = this.state
                let obj = {}
                let formData = new FormData()

                if (this.refs.editName.value == '' && this.state.editTypeId == undefined && this.refs.editDescription.value == '') {
                    Swal.fire({
                        icon: 'error',
                        title: 'error',
                        text: 'please fill in all the fields.',
                        timer: '5000'
                    })
                } else if (editImageFile && editSpecificationFile) {
                    obj = {
                        name: this.refs.editName.value,
                        description: this.refs.editDescription.value,
                        categoryid: this.state.editTypeId,
                        price: this.refs.editPrice.value
                    }
                    formData.append('specification', editSpecificationFile)
                    formData.append('image', editImageFile)
                }
                else if (editImageFile) { //kalo ada foto baru
                    obj = {
                        name: this.refs.editName.value,
                        description: this.refs.editDescription.value,
                        categoryid: this.state.editTypeId,
                        price: this.refs.editPrice.value
                    }
                    formData.append('image', editImageFile)
                } else if (editSpecificationFile) {
                    obj = {
                        name: this.refs.editName.value,
                        description: this.refs.editDescription.value,
                        categoryid: this.state.editTypeId,
                        price: this.refs.editPrice.value
                    }
                    formData.append('specification', editSpecificationFile)
                }
                else { //kalo ga ad foto baru
                    obj = {
                        name: this.refs.editName.value,
                        description: this.refs.editDescription.value,
                        categoryid: this.state.editTypeId,
                        price: this.refs.editPrice.value
                    }
                }
                // console.log(obj)
                formData.append('data', JSON.stringify(obj))
                // console.log(formData)
                Axios.post(API_URL + `/products/editProduct?id=${id}`, formData)
                    .then((res) => {
                        this.setState({ editImageFileName: 'Select Image', editImageFile: undefined, selectedId: null })
                        Swal.fire({
                            icon: 'success',
                            text: 'Product changes saved.'
                        })
                        window.location.reload()
                    })
                    .catch((err) => { console.log(err) })
            }
        })

    }

    deleteProduct = (id, imagepath, specification) => {
        // console.log(id + imagepath + pdf + specification)
        Swal.fire({
            title: 'delete product?',
            icon: 'error',
            text: 'are you sure you want to delete this product?',
            showCancelButton: true,
            cancelButtonText: 'no',
            confirmButtonText: 'yes, delete',
            confirmButtonColor: '#D32F2F'
        }).then((result) => {
            if (result.value) {
                Axios.delete(API_URL + `/products/deleteProduct?id=${id}&imagepath=${imagepath}&specification=${specification}`)
                    .then((res) => {
                        Swal.fire({
                            icon: 'success',
                            text: 'product deleted',
                            showConfirmButton: false
                        })
                        window.location.reload()
                    })
                    .catch((err) => console.log(err))
            }
        })
    }

    renderData = () => {
        return this.state.datalimit.map((val, index) => {
            if (this.state.selectedId === val.id) {
                return (
                    <tr key={val.id}>
                        {/* <td>{index + 1}</td> */}
                        <td>
                            <textarea type="text" ref="editName" defaultValue={val.name} onChange={this.isEdit} />
                            {this.editTypeDropdown(val.categoryid)}
                        </td>
                        <td style={{ width: "25%" }}><textarea style={{ width: '100%' }} rows="20" type="text" ref="editDescription" defaultValue={val.description} /></td>
                        <td>
                            <form>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="customFileEdit" onChange={this.onBtnEditSpecificationFile} />
                                    <label class="custom-file-label" for="customFileEdit">{this.state.editSpecificationFileName}</label>
                                </div>
                            </form>
                            <img className="p-3" src={API_URL + val.specification} id="specedit" alt="specimg" style={{ width: "30vh" }} />
                        </td>
                        <td>
                            <form>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="customFileEdit" onChange={this.onBtnEditImageFile} />
                                    <label class="custom-file-label" for="customFileEdit">{this.state.editImageFileName}</label>
                                </div>
                            </form>
                            <img className="p-3" src={API_URL + val.imagepath} id="imgedit" alt="productimg" style={{ width: "30vh" }} />
                        </td>
                        <td>
                            <input type="number" className="form-control" ref="editPrice" defaultValue={val.price} />
                        </td>
                        <td>
                            <MDBBtn outline color="stylish-color-dark" onClick={this.cancelEdit}>cancel</MDBBtn>
                            &nbsp;
                        <button type="button" class="btn btn-success" onClick={() => this.submitEdit(val.id)}>submit</button>
                        </td>
                    </tr>
                )
            } else {
                return (
                    <tr key={val.id}>
                        {/* <td className="text-center">{index + 1}</td> */}
                        <td style={{ width: "16vh" }} className="text-center">{val.name} <br /><p className="font-weight-bold">
                            {val.categoryid == 1
                                ?
                                "UPS"
                                :
                                "Battery"} </p></td>
                        <td style={{ width: "100%", textAlign: 'justify', display: '-webkit-box', WebkitLineClamp: '4', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{val.description}</td>
                        <td className="text-center">
                            <img src={API_URL + val.specification} alt="specimage" style={{ width: "20vh" }} />
                        </td>
                        <td className="text-center">
                            <img src={API_URL + val.imagepath} alt="productimage" style={{ width: "20vh" }} />
                        </td>
                        <td className="text-center">Rp {parseInt(val.price).toLocaleString()}</td>
                        <td className="text-center">
                            <button type="button" class="btn btn-primary" onClick={() => this.editProduct(val.id)}>edit</button>
                            &nbsp;
                        <button type="button" class="btn btn-danger" onClick={() => this.deleteProduct(val.id, val.imagepath, val.pdf, val.specification)}>delete</button>
                        </td>
                    </tr>
                )

            }
        })
    }

    generatePageBtn = () => {
        var length = Math.ceil(this.props.data.length / 3)
        var array = []
        var counter = 0

        for (var i = 0; i < length; i++) {
            array.push({ i, counter })
            counter = counter + 3
        }

        // console.log(array)

        return array.map((val, id) => {
            return (
                <MDBBtn outline color="black" onClick={() => this.getProductsLimit(val.counter)} >{id + 1}</MDBBtn>
            )
        })
    }
    render() {
        return (
            <div className="body">
                <AdminNavbar />
                <div className="ml-5 mr-5 mb-5 mt-4">
                    <div>
                        <div className="text-center">
                            <h3>Products <span className="mr-5 mb-2 float-right"><MDBBtn size="sm" color="green darken-1" onClick={this.toggle} ><AddIcon /> </MDBBtn></span> </h3>
                        </div>
                    </div>
                    <br />
                    <div className="body">
                        <table class="table table-striped">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col" className="text-center">Name</th>
                                    <th scope="col" className="text-center" style={{ width: "15%" }}>Description</th>
                                    <th scope="col" className="text-center">Specification</th>
                                    <th scope="col" className="text-center">Image</th>
                                    <th scope="col" className="text-center">Price</th>
                                    <th scope="col" className="text-center" style={{ width: "14%" }}>action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderData()}
                            </tbody>
                        </table>
                        <div className="text-center" style={{ marginBottom: '-3vh' }}>
                            {this.generatePageBtn()}
                        </div>
                    </div>
                </div>
                <MDBModal size="lg" isOpen={this.state.modal} centered>
                    <MDBModalHeader toggle={this.toggle}>Add Product</MDBModalHeader>
                    <MDBModalBody>
                        <MDBRow>
                            <MDBCol className="pl-3 pr-3">
                                <form>
                                    <div className="grey-text">
                                        <MDBInput label="Name" group type="text" inputRef={(newName) => this.newName = newName} />
                                        <MDBInput label="Price" group type="number" inputRef={(newPrice) => this.newPrice = newPrice} />
                                        {this.addTypeDropdown()}
                                        <MDBInput type="textarea" label="Description" inputRef={(newDescription) => this.newDescription = newDescription} rows="3" />
                                        <div className="row">
                                            <div className="col-6">
                                                <form>
                                                    <div class="custom-file">
                                                        <input type="file" class="custom-file-input" id="customFile" onChange={this.onBtnAddSpecificationFile} />
                                                        <label class="custom-file-label" for="customFile">{this.state.addSpecificationFileName}</label>
                                                    </div>
                                                </form>
                                                <img width="100%" src="https://carolinadojo.com/wp-content/uploads/2017/04/default-image.jpg" alt="preview" id="specpreview" className="img-fluid p-3" />
                                            </div>
                                            <div className="col-6">
                                                <form>
                                                    <div class="custom-file">
                                                        <input type="file" class="custom-file-input" id="customFile" onChange={this.onBtnAddImageFile} />
                                                        <label class="custom-file-label" for="customFile">{this.state.addImageFileName}</label>
                                                    </div>
                                                </form>
                                                <img width="100%" src="https://carolinadojo.com/wp-content/uploads/2017/04/default-image.jpg" alt="preview" id="imgpreview" className="img-fluid p-3" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </MDBCol>
                        </MDBRow>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="green darken-4" onClick={this.addProduct}>ADD PRODUCT</MDBBtn>
                        <MDBBtn color="" onClick={this.toggle}>CANCEL</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </div>
        );
    }
}

const mapStateToProps = ({ allproducts }) => {
    return {
        ...allproducts
    }
}

export default connect(mapStateToProps, { getAllProducts })(AdminHomepage);