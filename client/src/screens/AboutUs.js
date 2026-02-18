import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import styles from "./about.module.css";

export default function AboutUs() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <h1 className="display-4">About Us</h1>
          <p className="lead mt-3">
            We are committed to delivering the best solutions and creating meaningful impact.
          </p>
        </div>
      </div>

      {/* Mission / Vision Section */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="/images/mission.jpg"
              className="img-fluid rounded shadow-sm"
              alt="Our Mission"
            />
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide top-notch services that empower individuals and businesses to
              succeed. We focus on innovation, quality, and customer satisfaction in every project
              we take on.
            </p>
            <h2>Our Vision</h2>
            <p>
              To be a global leader in delivering creative solutions that make a positive difference
              in the world.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-5">Meet Our Team</h2>
          <div className="row">
            {/* Team Member 1 */}
            <div className="col-12 col-sm-6 col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt="Team Member"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Alice Johnson</h5>
                  <p className="card-text text-muted">CEO</p>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="col-12 col-sm-6 col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt="Team Member"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Bob Smith</h5>
                  <p className="card-text text-muted">CTO</p>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="col-12 col-sm-6 col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt="Team Member"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Carol Lee</h5>
                  <p className="card-text text-muted">Marketing Head</p>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="col-12 col-sm-6 col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt="Team Member"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">David Kim</h5>
                  <p className="card-text text-muted">Lead Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container text-center my-5">
        <h3>Want to work with us?</h3>
        <p>Join our team and help us create amazing experiences.</p>
        <button className="btn btn-primary btn-lg">Contact Us</button>
      </div>

      <Footer />
    </>
  );
}
