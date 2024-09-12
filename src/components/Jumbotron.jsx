import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../css/Jumbotron.css';

const Jumbotron = () => {
    return (
        <div className="jumbotron text-center">
            <div className="text-center" style={{ margin: '20px auto' }}>
                <Image
                    src="./images/VernonNew.svg" // Make sure the path is correct
                    alt="Vernon Travel Basketball Logo"
                    fluid // This makes the image responsive
                    style={{ width: '300px', height: 'auto', margin: '0 auto' }} // Adjust the width and center the logo
                />
                <div className="button-group d-flex flex-column flex-md-row justify-content-center" style={{ marginTop: '20px' }}>
                    <Link className="btn btn-primary btn-lg mb-3 mb-md-0 mx-md-2" to="/about" role="button">
                        Learn more
                    </Link>
                    <Link className="btn btn-primary btn-lg mb-3 mb-md-0 mx-md-2" to="/contact" role="button">
                        Contact
                    </Link>
                    <Link className="btn btn-primary btn-lg mb-3 mb-md-0 mx-md-2" to="/register" role="button">
                        Register
                    </Link>
                </div>
            </div>
            <p className="lead">Vernon Travel Basketball is a youth basketball program in the town of Vernon, Connecticut.</p>
            <hr className="my-4" />
            <p>Tryouts and other information can be found here on our website as well as our Facebook page.</p>
        </div>
    );
};

export default Jumbotron;
