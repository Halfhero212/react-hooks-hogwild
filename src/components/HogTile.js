// HogTile.js
import React, { useState } from 'react';

function HogTile({ hog }) {
  const [detailsVisible, setDetailsVisible] = useState(false);

  return (
    <div className="ui eight wide column">
      <div onClick={() => setDetailsVisible(!detailsVisible)}>
        <h3>{hog.name}</h3>
        <img src={hog.image} alt={hog.name} />
        {detailsVisible && (
          <div>
            <p>Specialty: {hog.specialty}</p>
            <p>Weight: {hog.weight}</p>
            <p>Greased: {hog.greased ? 'Yes' : 'No'}</p>
            <p>Highest Medal Achieved: {hog['highest medal achieved']}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HogTile;
