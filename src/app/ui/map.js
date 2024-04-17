
"use client";

import { MapContainer, Marker, TileLayer, Tooltip, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import React from 'react';

export default function MyMap (){
   

  return (
    
    <MapContainer center={[-6.37295776627039, 106.80433677027877]} zoom={13} style={{ height: '400px', width:'400px' }}>
      <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[-6.37295776627039, 106.80433677027877]}>
          <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
      </Marker>
  </MapContainer>
  )
}