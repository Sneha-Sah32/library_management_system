import React from 'react'
import styles from "./Bodyout.module.css";
import { Link } from 'react-router-dom';

export default function Bodyout() {
  return (
    <div className={`${styles.Bodyout}`}>
      <h1>"Smart Management for Smart Libraries"</h1>
      <h2>Your Digital Library Assistant.</h2>
      <p>LIBRARYLYNX is a fully featured, scalable library management system. Our library management service caters to libraries, schools, organizations, and home catalogs.</p>
      <div id="carouselExample" className="carousel slide" style={{objectFit:"contain !important",}}>
  <div className="carousel-inner" style={{height:"500px"}}>
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/opengraph/1x1.png?mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-w=64&mark-align=top%2Cleft&mark-pad=50&h=630&w=1200&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1579370318443-8da816457e3d%3Fcrop%3Dfaces%252Cedges%26h%3D630%26w%3D1200%26blend%3D000000%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fw%253D750%2526h%253D84%2526txt%253Dlibrary%252Bbooks%2526txt-pad%253D80%2526txt-align%253Dmiddle%25252Cleft%2526txt-color%253D%252523000000%2526txt-size%253D40%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8NHx8bGlicmFyeSUyMGJvb2tzfGVufDB8fHx8MTc2OTg2ODczOHww%26ixlib%3Drb-4.1.0&blend-w=1&auto=format&fit=crop&q=60" className="d-block w-100 position-absolute z-n1" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1661967927929-97141651900f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8" className="d-block w-100 position-absolute z-n1" alt="..."/>
    </div>
    {/* <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div> */}
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
      <Link type='button' className='btn btn-outline-primary my-3' to="/start">Get Started</Link>
    </div>
  )
}
