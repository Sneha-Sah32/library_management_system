import React from 'react'
import styles from "./Bodyout.module.css";
import { Link } from 'react-router-dom';


export default function Bodyout() {
  return (
    <div className={`${styles.Bodyout}`}>
      {/* <h1>"Smart Management for Smart Libraries"</h1>
      <h2>Your Digital Library Assistant.</h2>
      <p>LIBRARYLYNX is a fully featured, scalable library management system. Our library management service caters to libraries, schools, organizations, and home catalogs.</p> */}
      <div id="carouselExample" className="carousel slide" style={{objectFit:"contain !important",}}>
  <div className="carousel-inner" style={{height:"500px"}}>
    <div className="carousel-item active">
      <img src="/images/crousel3.jpg" className="d-block w-100 position-absolute z-n1" alt="..." style={{objectFit:"cover", height:"100vh", width:"100vw"}}/>
      <div className={`${styles.writing}`}>
      <h1>Discover new worlds</h1>
      <p>Dive into captivating stories. Immerse yourself in a world of imagination and wonders.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/images/crousel6.jpg" className="d-block w-100 position-absolute z-n1" alt="..." style={{objectFit:"cover", height:"100vh", width:"100vw"}}/>
      <div className={`${styles.writing}`}>
      <h1>Escape through pages</h1>
      <p>Explore the vast realms of human wisdom and understanding through the pages of books.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<br /><br />
      <Link type='button' className='btn btn-outline-primary my-3' to="/start">Get Started</Link>
    </div>
  )
}
