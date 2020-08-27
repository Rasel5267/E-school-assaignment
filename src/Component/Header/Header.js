import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    return (
        <div class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <div class="navbar-brand"><h2>E-School</h2></div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                    <div className="cart d-flex justify-content-center">
                        <div className="btn btn-outline-success">Sign in</div>
                    </div>
            </div>
        </div>
    );
};

export default Header;