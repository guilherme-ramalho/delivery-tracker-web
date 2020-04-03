import React, { useState } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';

import { CustomMap } from './styles';

function Delivery({ google }) {
  const [coords, setCoords] = useState({
    lat: 59.95,
    lng: 30.33
  });

  return (
    <CustomMap google={google} zoom={11} center={coords} />
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDK_VSgLdJ6j7CFBBDdUaOLdQT9Il4oZRU',
})(Delivery);
