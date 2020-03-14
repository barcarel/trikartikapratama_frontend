import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminNavbar from '../Components/AdminNavbar'
// import AdminModal from '../Components/AdminModal'
import Axios from 'axios';
import Swal from 'sweetalert2';
import { API_URL } from '../support/API_URL'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBInput } from "mdbreact";
import AddIcon from '@material-ui/icons/Add';


class AdminHomepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isEdit: false,

            uploadSecificationFileName: 'choose file',
            addSpecificationFileName: ' Specification Image',
            addSpecificationFile: undefined,

            uploadPdfFileName: 'choose file',
            addPdfFileName: 'PDF',
            addPdfFile: undefined,

            uploadFileName: 'choose file',
            addImageFileName: 'Product Image',
            addImageFile: undefined,

            editImageFileName: 'select file',
            editPdfFileName: 'select file',
            editSpecificationFileName: 'select image',
            editImageFile: undefined,
            editPdfFile: undefined,
            editSpecificationFile: undefined,
        }
    }

    componentDidMount() {
        this.getProducts()
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

    onBtnAddPdfFile = (e) => { //upload pdf
        console.log('pdf', e.target.files[0])
        if (e.target.files[0]) {
            this.setState({ addPdfFileName: e.target.files[0].name, addPdfFile: e.target.files[0] })
        } else {
            this.setState({ addPdfFileName: 'select pdf', addPdfFile: undefined })
        }
    }

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

    getProducts = () => {
        Axios.get(API_URL + '/products/getAllProducts')
            .then((res) => {
                this.setState({ data: res.data })
            })
            .catch((err) => console.log(err))
    }

    addProduct = () => {
        let { addImageFile, addPdfFile, addSpecificationFile } = this.state;

        var name = this.refs.newName.value
        var description = this.refs.newDescription.value
        var categoryid = this.state.addTypeId

        if (addPdfFile && addImageFile && addSpecificationFile) {
            let formData = new FormData()
            let obj = {
                name: name,
                description: description,
                categoryid: categoryid
            }
            formData.append('data', JSON.stringify(obj)) //dijadiin JSON
            formData.append('image', addImageFile)
            formData.append('pdf', addPdfFile)
            formData.append('specification', addSpecificationFile)
            console.log(formData)
            Axios.post(API_URL + '/products/postProduct', formData)
                .then((res) => {
                    console.log(res.data)
                    this.setState({ addImageFileName: 'select image', addImageFile: undefined, addPdfFileName: 'select pdf', addPdfFile: undefined, addSpecificationFileName: 'Select Image', addSpecificationFile: undefined })
                    window.location.reload()
                    // Swal.fire({
                    //     icon: 'succes',
                    //     text: 'sucessfully added a product'
                    // })
                    this.getProducts()
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'error',
                text: 'please fill in all the fields.',
                timer: '5000'
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

    editTypeDropdown = () => {
        return (
            <select
                className="form-control form-control-sm"
                value={this.state.editTypeId}
                onChange={this.onChangeEditSelectType}
            >
                <option value={0}>type</option>
                <option value={1}>UPS</option>
                <option value={2}>Battery</option>
            </select>
        )
    }

    editProduct = (id) => {
        this.setState({ selectedId: id })
    }

    cancelEdit = () => {
        this.setState({ selectedId: null, editImageFileName: 'Select Image', editImageFile: undefined, editPdfFileName: 'Select PDF' })
    }
    
    submitEdit = (id) => {
        
        let { editImageFile, editPdfFile, editSpecificationFile } = this.state
        let obj = {}
        let formData = new FormData()
        
        if (this.refs.editName.value == '' || this.state.editTypeId == undefined || this.refs.editDescription.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'error',
                text: 'please fill in all the fields.',
                timer: '5000'
            })
        } 
        else if (editImageFile || editPdfFile || editSpecificationFile) { //kalo ada foto baru
            obj = {
                name: this.refs.editName.value,
                description: this.refs.editDescription.value,
                categoryid: this.state.editTypeId,
            }
            console.log(editImageFile)
            console.log(editPdfFile)
            console.log(editSpecificationFile)
            formData.append('image', editImageFile)
            formData.append('pdf', editPdfFile)
            formData.append('specification', editSpecificationFile)
        } 
        else { //kalo ga ad foto baru
            obj = {
                name: this.refs.editName.value,
                description: this.refs.editDescription.value,
                categoryid: this.state.editTypeId,
            }
        }
        console.log(obj)
        formData.append('data', JSON.stringify(obj))
        console.log(formData)
        Axios.post(API_URL + `/products/editProduct?id=${id}`, formData)
            .then((res) => {
                this.setState({ editImageFileName: 'Select Image', editImageFile: undefined, selectedId: null })
                this.getProducts()
            })
            .catch((err) => { console.log(err) })

        //TODO: Tanya baron kenapa ga langsung update di web nya
        // var name = this.refs.name.value
        // var description = this.refs.description.value
        // // console.log(name)
        // // console.log(description)
        // // var specification = this.refs.specification.value
        // // var imagepath = this.refs.imagepath.value
        // // var pdf = this.refs.pdf.value

        // if (this.refs.type.value == 'UPS') {
        //     var categoryid = 1
        // } else {
        //     var categoryid = 2
        // }

        // var objEdit = {
        //     name: name,
        //     description: description,
        //     specification: "asu",
        //     imagepath: "asu",
        //     pdf: "asu",
        //     categoryid: categoryid,
        //     status: "show"
        // }

        // if (name && description) {
        //     try {
        //         console.log("Edit")
        //         Axios.post(API_URL + `/products/editProduct?id=${id}`, objEdit)
        //             .then((res) => {
        //                 console.log(res.data)
        //                 this.getProducts()
        //                 this.setState({ selectedId: null })
        //             }).catch((err) => console.log(err))
        //     } catch (err) {
        //         console.log(err)
        //     }
        // }
    }

    deleteProduct = (id, imagepath, pdf, specification) => {
        console.log(id + imagepath + pdf + specification)
        Axios.delete(API_URL + `/products/deleteProduct?id=${id}&imagepath=${imagepath}&pdf=${pdf}&specification=${specification}`)
            .then((res) => {
                this.getProducts()
            })
            .catch((err) => console.log(err))
    }

    renderData = () => {
        return this.state.data.map((val, index) => {
            if (this.state.selectedId === val.id) {
                return (
                    <tr key={val.id}>
                        <td>{index + 1}</td>
                        <td><input type="text" ref="editName" defaultValue={val.name} style={{ width: "15vh" }} onChange={this.isEdit} /></td>
                        <td>
                            {this.editTypeDropdown()}
                        </td>
                        <td><input type="text" ref="editDescription" defaultValue={val.description} style={{ width: "20vh" }} /></td>
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
                            <form>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="customFileEdit" onChange={this.onBtnEditPdfFile} />
                                    <label class="custom-file-label" for="customFileEdit">{this.state.editPdfFileName}</label>
                                </div>
                            </form>
                            <p>{val.pdf}</p>
                        </td>
                        <td>
                            <button type="button" class="btn btn-primary" onClick={this.cancelEdit}>cancel</button>
                            &nbsp;
                        <button type="button" class="btn btn-success" onClick={() => this.submitEdit(val.id)}>submit</button>
                        </td>
                    </tr>
                )
            } else {
                return (
                    <tr key={val.id}>
                        <td>{index + 1}</td>
                        <td>{val.name}</td>
                        <td>
                            {val.categoryid == 1
                                ?
                                "UPS"
                                :
                                "Battery"
                            }
                        </td>
                        <td>{val.description}</td>
                        <td>
                            <img src={API_URL + val.specification} alt="specimage" style={{ width: "30vh" }} />
                        </td>
                        <td>
                            <img src={API_URL + val.imagepath} alt="productimage" style={{ width: "30vh" }} />
                        </td>
                        <td>{val.pdf}</td>
                        <td>
                            <button type="button" class="btn btn-primary" onClick={() => this.editProduct(val.id)}>edit</button>
                            &nbsp;
                        <button type="button" class="btn btn-danger" onClick={() => this.deleteProduct(val.id, val.imagepath, val.pdf, val.specification)}>delete</button>
                        </td>
                    </tr>
                )

            }
        })
    }
    render() {
        return (
            <div>
                <AdminNavbar />
                <div className="m-5">
                    <h1>Products</h1>
                    <br />
                    <div className="body">
                        {/* <div id="ups" className="text-center" style={{ backgroundColor: "black", color: "white", fontSize: "3vh" }}>
                            UPS
                        </div> */}
                        <table class="table table-striped">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Type</th>
                                    <th scope="col" style={{ width: "15%" }}>Description</th>
                                    <th scope="col">Specification</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">PDF</th>
                                    <th scope="col" style={{ width: "14%" }}>action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderData()}
                            </tbody>
                            <tfoot style={{ backgroundColor: "rgba(52, 52, 52, 0.4)" }}>
                                <tr>
                                    <td>
                                        <AddIcon style={{ color: '#fff', fontSize: '30px' }} /></td>
                                    <td style={{ width: '13vh' }}><input type="text" className="form-control" ref="newName" /></td>
                                    <td style={{ width: '10vh' }}>
                                        {/* <input type="text" className="form-control" ref="newType" /> */}
                                        {/* TODO: CHANGE INTO DROPDOWN */}
                                        {this.addTypeDropdown()}
                                        {/* <div class="dropdown">
                                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Dropdown button
                                                </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div> */}
                                    </td>
                                    <td><input type="text" className="form-control" ref="newDescription" /></td>
                                    <td style={{ maxWidth: "100vh" }}>
                                        {/* specification */}
                                        <form>
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" id="customFile" onChange={this.onBtnAddSpecificationFile} />
                                                <label class="custom-file-label" for="customFile">{this.state.addSpecificationFileName}</label>
                                            </div>
                                        </form>
                                        <img src="https://carolinadojo.com/wp-content/uploads/2017/04/default-image.jpg" alt="preview" id="specpreview" className="img-fluid p-3" style={{ maxWidth: "100%" }} />
                                    </td>
                                    <td style={{ maxWidth: "100vh" }}>
                                        {/* image */}
                                        <form>
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" id="customFile" onChange={this.onBtnAddImageFile} />
                                                <label class="custom-file-label" for="customFile">{this.state.addImageFileName}</label>
                                            </div>
                                        </form>
                                        <img src="https://carolinadojo.com/wp-content/uploads/2017/04/default-image.jpg" alt="preview" id="imgpreview" className="img-fluid p-3" style={{ maxWidth: "100%" }} />
                                    </td>
                                    <td>
                                        {/* pdf */}
                                        <form>
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" id="customFile" onChange={this.onBtnAddPdfFile} />
                                                <label class="custom-file-label" for="customFile" value={this.state.uploadPdfFileName}>{this.state.addPdfFileName}</label>
                                            </div>
                                        </form>
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-success" onClick={this.addProduct}>submit</button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>

                    </div>
                </div>
            </div>
        );
    }
}

export default AdminHomepage;