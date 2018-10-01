import React from 'react';
import Travel from './Travel';

const TravelList = function() {
  return (
    <div className="row">
      <Travel
        destination="Macchu Picchu"
        country="Pérou"
        photo="https://images.national-tours.fr/(Image)-image-Perou-Machu-Picchu-71-fo_105089842-09032017.jpg"
        distance="10047" />
      <Travel
        destination="Taj Mahal"
        country="Inde"
        photo="https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-0-20151104113424.jpg"
        distance="6762" />
    </div>
  )
}

export default TravelList;
