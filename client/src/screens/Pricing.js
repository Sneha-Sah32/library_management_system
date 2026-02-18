

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from "./pricing.module.css";

export default function Pricing() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Pricing</h1>
        <p className="lead">Compare and explore our plans below.</p>
      </div>

      {/* Pricing Cards */}
      <div className="container my-5">
        <div className="row">
          {/* Free Plan */}
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-header text-center">
                <h4 className="my-0 font-weight-normal">Free</h4>
              </div>
              <div className="card-body d-flex flex-column">
                <h1 className="card-title pricing-card-title text-center">
                  $0 <small className="text-muted">/ mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4 text-center">
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" className="btn btn-lg btn-outline-primary mt-auto">
                  Sign up for free
                </button>
              </div>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-primary">
              <div className="card-header text-center">
                <h4 className="my-0 font-weight-normal">Pro</h4>
              </div>
              <div className="card-body d-flex flex-column">
                <h1 className="card-title pricing-card-title text-center">
                  $15 <small className="text-muted">/ mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4 text-center">
                  <li>20 users included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" className="btn btn-lg btn-primary mt-auto">
                  Get started
                </button>
              </div>
            </div>
          </div>

          {/* Ultimate Plan */}
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-header text-center">
                <h4 className="my-0 font-weight-normal">Ultimate</h4>
              </div>
              <div className="card-body d-flex flex-column">
                <h1 className="card-title pricing-card-title text-center">
                  $29 <small className="text-muted">/ mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4 text-center">
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" className="btn btn-lg btn-primary mt-auto">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
