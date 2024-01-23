import React from "react";
import { Link } from 'react-router-dom';

import '../css/nav.css';

export default class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand bg-dark navbar-dark navbar-container">
                <Link to={{pathname: '/'}}>
                    <h2 className="navbar-brand">Version Management</h2>
                </Link>
            </nav>
        )

    }
}