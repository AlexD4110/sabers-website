import React from 'react';
import '../css/Jumbotron.css';
import { Image } from 'react-bootstrap';
const Jumbotron = () => {
    return (
        <div className="jumbotron text-center">
            <div className="text-center my-4">
                <Image
                src="./images/Vernon.svg" // Update this path to the actual logo file path
                alt="Vernon Travel Basketball Logo"
                fluid // This makes the image responsive
                style={{ width: '300px', height: 'auto' }} // Adjust the width for banner-like appearance
                />
            </div>
            <p className="lead">Vernon Travel Basketball is a youth basketball program in the town of Vernon, Connecticut.</p>
            <hr className="my-4" />
            <p>Tryouts and other information can be found here on our website as well as our Facebook page.</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="../about" role="button">Learn more</a>
            </p>
        </div>
    );
};

export default Jumbotron;
