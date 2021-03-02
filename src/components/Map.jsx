 import React,{useState} from 'react'
// import { Map, GoogleApiWrapper } from "google-maps-react";
// import "../App.css";

// import { render } from "@testing-library/react"

// const Maps = (props) => {
//     useEffect(()=>{
//         console.log(props)
//     },[])
//     const mapStyles = {
//         width:'634px',height:'519px',
//         borderRadius: "0px 0px 36px 0px",
//         opacity: 1,
//         marginTop: "-276px",
//         marginLeft: "668px"

//     }
//     return (
      
//         <Map
//           google={props.google}
//           zoom={8}
//           style={mapStyles}
//           initialCenter={{ lat: 47.444, lng: -122.176}}
//         />
    
//     )
// }
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyCooit3zslIZZ6SYNfFqmSwRo7cCC4l6-k",
// })(Maps)



// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 import mapboxgl from "mapbox-gl/dist/mapbox-gl.js"

// mapboxgl.accessToken = 'pk.eyJ1IjoiaGFyc2hhMjU1NCIsImEiOiJja2xya3J6bzUwZGdzMnhtcHpsNGZsNHcxIn0.rr9OQIVsPHKHMrXeF8XjFw';
// var Maps = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/streets-v11'
// });

// export default Maps




// import React, { useRef, useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
// import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// import MapboxWorker from 'worker-loader/mapbox-gl/dist/mapbox-gl-csp-worker';

// mapboxgl.workerClass = MapboxWorker;
// mapboxgl.accessToken = 'pk.eyJ1IjoiaGFyc2hhMjU1NCIsImEiOiJja2xya3J6bzUwZGdzMnhtcHpsNGZsNHcxIn0.rr9OQIVsPHKHMrXeF8XjFw';

// const Map = () => {
//   const mapContainer = useRef();
//   const [lng, setLng] = useState(-70.9);
//   const [lat, setLat] = useState(42.35);
//   const [zoom, setZoom] = useState(9);

//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [lng, lat],
//       zoom: zoom
//     });

//     map.on('move', () => {
//       setLng(map.getCenter().lng.toFixed(4));
//       setLat(map.getCenter().lat.toFixed(4));
//       setZoom(map.getZoom().toFixed(2));
//     });

//     return () => map.remove();
//   }, []);

//   return (
//     <div>
//       <div className="sidebar">
//         Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
//       </div>
//       <div className="map-container" ref={mapContainer} />
//     </div>
//   );
// };

//  export default Map

//  ReactDOM.render(<Map />, document.getElementById('map'));

const Map = () => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiaGFyc2hhMjU1NCIsImEiOiJja2xya3J6bzUwZGdzMnhtcHpsNGZsNHcxIn0.rr9OQIVsPHKHMrXeF8XjFw';

  
        var map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11'
        });
  return(
    <div></div>
  )
}
 export default Map
