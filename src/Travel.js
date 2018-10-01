import React from 'react';

const Travel = ({ destination, country, photo, distance }) => (
  <div className="col-lg-4 col-md-6 col-sm-12">
    <div className="card">
      <img className="card-img-top" src={photo} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{destination}, {country}</h5>
        <p className="card-text">{destination}, {country}</p>
        <a href="#" className="btn btn-primary">{distance} km</a>
      </div>
    </div>
  </div>
);

export default Travel;
