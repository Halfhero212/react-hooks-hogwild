// HogTiles.js
import React from 'react';
import HogTile from './HogTile';
// HogTiles.js or wherever you're rendering the individual hog tiles

function HogTiles({ hogs }) {
    return (
      <div className="ui grid container">
        {hogs.map(hog => (
          <div key={hog.name} className="ui eight wide column">
            <div className="ui card">
              <div className="image">
                <img src={hog.image} alt={hog.name} />
              </div>
              <div className="content">
                <a className="header">{hog.name}</a>
                <div className="meta">
                  <span className="date">{hog.specialty}</span>
                </div>
                <div className="description">
                  Greased: {hog.greased ? "Yes" : "No"}
                </div>
              </div>
              <div className="extra content">
                <a>
                  <i className="trophy icon"></i>
                  Highest medal achieved: {hog["highest medal achieved"]}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  

export default HogTiles;
