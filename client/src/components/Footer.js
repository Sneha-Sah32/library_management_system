import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <div className="container"> 
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                     <p className="col-md-4 mb-0 text-body-secondary">© Official website of LIBRARYLYNX</p>
                      <Link to="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none" aria-label="Bootstrap">
                       <svg className="bi me-2" width="40" height="32" aria-hidden="true">
                       </svg>
                        </Link>
                         <ul className="nav col-md-4 justify-content-end">
                             <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
                              {/* <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Features</Link></li> */}
                               <li className="nav-item"><Link to="/pricing" className="nav-link px-2 text-body-secondary">Pricing</Link></li>
                                {/* <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">FAQs</Link></li> */}
                                 <li className="nav-item"><Link to="/contact" className="nav-link px-2 text-body-secondary">Contact</Link></li> 
                                 </ul>
                              </footer> 
                              </div>
        </div>
    )
}
