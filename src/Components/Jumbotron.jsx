import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const Example = (props) => {
    return (
        <div>
            <Jumbotron className="jumbotron-landingpage">
                <Container style={{ marginTop: "13vh", backgroundColor: "#FFF", border: "1px solid black", opacity: "0.92", padding: "3%" }}>
                    <h1 className="display-4">PT TRI KARTIKA PRATAMA</h1>
                    <p className="lead">Your Reliable UPS Supplier in Indonesia</p>
                    <hr className="my-2" />
                    <p>From 1-800 kVA, PT Tri Kartika Pratama offers critically acclaimed UPS with the best quality of services.</p>
                    <p className="lead">
                        <Link to='/products'>
                            <button type="button" className="btn btn-danger">OUR PRODUCTS</button>
                        </Link>
                    </p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Example;