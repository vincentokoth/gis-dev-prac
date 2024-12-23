import React, { useState } from 'react';
import MapViewer from './components/mapviewer';
import GraphViewer from './components/graph';
import DateSelector from './components/selector';
import './App.css';

const App = () => {
  const [year, setYear] = useState(2024);
  const [month, setMonth] = useState(11);
  const [tenDays, setTenDays] = useState(21);

  return (
    <div className="app-container">
      <div className="sidebar">
        <h1>Drought Watch Visualization</h1>
        <DateSelector
          year={year}
          setYear={setYear}
          month={month}
          setMonth={setMonth}
          tenDays={tenDays}
          setTenDays={setTenDays}
        />
      </div>
      <div className="map-container">
        <MapViewer year={year} month={month} tenDays={tenDays} />
        <GraphViewer year={year} month={month} tenDays={tenDays} />
      </div>
    </div>
  );
};

export default App;
