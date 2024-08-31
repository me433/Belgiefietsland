import { Marker, Popup, TileLayer } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer';
import "leaflet/dist/leaflet.css";
import './Map.css'

type coords = [number, number];

const positions: {position: coords, popup: string}[] = [{position: [50.9, 4.7], popup: "popup text"}]
const leuven: coords = [50.88, 4.705]

const Map = () => {
  return (
    <MapContainer center={leuven} zoom={13} scrollWheelZoom={true}>
<TileLayer
attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
{positions.map(marker => (
  <Marker position={marker.position}>
    <Popup>
      {marker.popup}
    </Popup>
  </Marker>
))}
</MapContainer>
  )
}

export default Map