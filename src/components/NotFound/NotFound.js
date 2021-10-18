import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../Image/3804949.jpg'

const NotFound = () => {
    return (
        <div>
            <img className="w-50" src={notFound} alt="" /><br />
            <Link to="/">
            <button className="btn-danger m-3 p-2 rounded">Go Home</button>
            </Link>
        </div>
    );
};

export default NotFound;