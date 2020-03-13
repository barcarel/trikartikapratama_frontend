import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class ModalPage extends Component {
    state = {
        modal: false
    }

    toggle = () => {
        // let modalNumber = 'modal' + nr
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <MDBBtn color="primary" onClick={this.toggle}>Add product</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle} centered backdrop={false} size="lg" style={{overflow: "auto"}}>
                    <MDBModalHeader toggle={this.toggle}>Add product</MDBModalHeader>
                    <MDBModalBody>
                        <form>
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" id="name" />
                            </div>
                            <div class="form-group">
                                <label for="description">Description</label>
                                <textarea class="form-control" id="description" rows="14" />
                            </div>
                            <div class="form-group">
                                <label>Specification</label>
                                <br />
                                <button type="button">upload</button>
                            </div>
                            <div class="form-group">
                                <label>Image</label>
                                <br />
                                <button type="button">upload</button>
                            </div>
                            <div class="form-group">
                                <label>PDF</label>
                                <br />
                                <button type="button">upload</button>
                            </div>
                        </form>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                        <MDBBtn color="primary">Save changes</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </div>
        );
    }
}

export default ModalPage;