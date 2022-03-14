import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./header.css"
class Header extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand ms-3 text-white" to="/"><span className="text-warning">e</span>Grocery</Link>
                        <button className="navbar-toggler btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon btn-light"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="d-flex ms-auto">
                                <button className="btn me-1" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-user"></i></button>
                                <button className="btn ms-1" type="submit"><i className="fas fa-shopping-cart"></i></button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}


export default Header;