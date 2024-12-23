import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GraphViewer = ({ year, month, tenDays }) => {
  const [graphUrl, setGraphUrl] = useState('');

  useEffect(() => {
    const fetchGraph = async () => {
      try {
        const response = await axios.get(
          `https://droughtwatch.icpac.net/eadw-api/visualization-graphs/some-endpoint?year=${year}&month=${month}&tenDays=${tenDays}`
        );
        setGraphUrl(response.data.graphUrl); 
      } catch (error) {
        console.error('Error fetching graph:', error);
      }
    };
    fetchGraph();
  }, [year, month, tenDays]);

  return (
    <div>
      {graphUrl ? (
        <img src={graphUrl} alt="Graph" style={{ maxWidth: '100%' }} />
      ) : (
        <p>Loading graph...</p>
      )}
    </div>
  );
};

export default GraphViewer;