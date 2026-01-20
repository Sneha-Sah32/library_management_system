import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <div>
            <div className="container"> 
                <footer className={`${styles.footer} d-flex flex-wrap justify-content-between align-items-center py-3 border-top`}>
                     <p className="col-md-4 mb-0 text-body-secondary">© Official website of LIBRARYLYNX</p>
                         <ul className="nav col-md-4 justify-content-end">
                             <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
                               <li className="nav-item"><Link to="/pricing" className="nav-link px-2 text-body-secondary">Pricing</Link></li>
                                 <li className="nav-item"><Link to="/contact" className="nav-link px-2 text-body-secondary">Contact</Link></li> 
                                 </ul>
                              </footer> 
                              </div>
        </div>
    )
}
