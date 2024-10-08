import React from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const coordinate = [34.997351457449504, 50.46462276362377];

const Map = () => {
	// markers
	const markers = [
		{
			geocode: [34.997351457449504, 50.46462276362377],
			popUp: "Sava Energy Factory",
		},
	];

	const customIcon = new Icon({
		iconUrl: "images/map/marker-icon.webp",
		iconSize: [38, 38], // standard size of the icon
	});

	return (
		<div className="flex h-96 w-full">
			<MapContainer
				className="h-full w-full z-0"
				center={coordinate}
				doubleClickZoom={false}
				scrollWheelZoom={false}
				touchZoom={false}
				dragging={false}
				zoom={13}
				zoomControl={false}
			>
				<TileLayer
					attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
					url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{markers.map((marker, index) => (
					<Marker
						key={index}
						position={marker.geocode}
						icon={customIcon}
					>
						<Popup>{marker.popUp}</Popup>
					</Marker>
				))}
			</MapContainer>
		</div>
	);
};

export default Map;
