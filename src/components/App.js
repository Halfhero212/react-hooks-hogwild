// App.js
import React, { useState } from 'react';
import Nav from './Nav';
import hogs from '../porkers_data';
import HogTiles from './HogTiles';

function App() {
  const [greasedFilter, setGreasedFilter] = useState(false);
  const [sortType, setSortType] = useState('name');

  const filteredHogs = hogs
    .filter(hog => (greasedFilter ? hog.greased : true))
    .sort((a, b) => {
      if (sortType === 'name') {
        return a.name.localeCompare(b.name);
      } else {
        return a.weight - b.weight;
      }
    });

  return (
    <div className="App">
      <Nav />
      <HogTiles hogs={filteredHogs} />
    </div>
  );
}

export default App;
