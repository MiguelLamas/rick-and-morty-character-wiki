import React from 'react';
import FilterBTN from '../FilterBTN';

const Species = () => {
  let species = [
    "Human",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Cronenberg",
    "Planet",
  ];

  return (
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Species
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      {species.map((items, index) => (
            <FilterBTN key={index} name="species" index={index} items={items} />
          ))};
      </div>
    </div>
  </div>
  )
}

export default Species