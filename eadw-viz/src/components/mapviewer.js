import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import { fromLonLat } from 'ol/proj';

const MapViewer = ({ year, month, tenDays }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Generate WMS URL
    const wmsUrl = `https://droughtwatch.icpac.net/mapserver/?LAYERS=dekadal_cdi_chirps&FORMAT=image/png&TRANSPARENT=TRUE&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG:4326&BBOX=-180,-90,180,90&WIDTH=256&HEIGHT=256&STYLES=&SELECTED_YEAR=${year}&SELECTED_DMONTH=${month}&SELECTED_TENDAYS=${tenDays}`;

    // Create WMS layer
    const wmsLayer = new TileLayer({
      source: new TileWMS({
        url: wmsUrl,
        params: {
          LAYERS: 'dekadal_cdi_chirps',
          TILED: true,
        },
        serverType: 'geoserver',
      }),
    });

    // Initialize the map
    const map = new Map({
      target: mapRef.current,
      layers: [wmsLayer],
      view: new View({
        center: fromLonLat([37, 0]), // Center over East Africa
        zoom: 5,
      }),
    });

    // Cleanup map on component unmount
    return () => {
      map.setTarget(null);
    };
  }, [year, month, tenDays]);

  return <div ref={mapRef} style={{ height: '500px', width: '100%' }} />;
};

export default MapViewer;