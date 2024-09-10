import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../css/Jumbotron.css';

const Jumbotron = () => {
    return (
        <div className="jumbotron text-center">
            <div className="text-center my-4">
                <Image
                    src="./images/Vernon.svg" // Make sure the path is correct
                    alt="Vernon Travel Basketball Logo"
                    fluid // This makes the image responsive
                    style={{ width: '300px', height: 'auto' }} // Adjust the width for banner-like appearance
                />
            </div>
            <p className="lead">Vernon Travel Basketball is a youth basketball program in the town of Vernon, Connecticut.</p>
            <hr className="my-4" />
            <p>Tryouts and other information can be found here on our website as well as our Facebook page.</p>
            <p className="lead">
                <Link className="btn btn-primary btn-lg" to="/about" role="button">
                    Learn more
                </Link> {/* Use Link from react-router-dom */}
            </p>
        </div>
    );
};

export default Jumbotron;