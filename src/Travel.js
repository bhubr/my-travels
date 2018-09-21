import React, { Component } from 'react';

const Travel = ({ destination, country, photo, distance }) => (
  <figure>
    <img src={photo} alt={destination} />
    <figcaption>
      <blockquote>{destination}, {country}</blockquote>
      <cite>{distance} km</cite>
    </figcaption>
  </figure>
);

export default Travel;
