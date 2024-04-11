import React, { useState } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = ({ google, lat, lon }) => {
    const [selectedPlace, setSelectedPlace] = useState(null);

    const onMarkerClick = (props, marker, e) => {
        setSelectedPlace(props);
    };

    const onInfoWindowClose = () => {
        setSelectedPlace(null);
    };

    const style = {
        width: '100%',
        height: '100%'
    }

    return (
        <Map
            google={google}
            style={style}
            disableDefaultUI={true}
            initialCenter={{
                lat: lat,
                lng: lon
            }}
            zoom={15}
        >
            <Marker onClick={onMarkerClick} name={'Current location'} />

            <InfoWindow onClose={onInfoWindowClose}>
                <div>
                    <h1>{selectedPlace && selectedPlace.name}</h1>
                </div>
            </InfoWindow>
        </Map>
    );
};

export default GoogleApiWrapper({
    apiKey: (process.env.GOOGLE_API_KEY_GOES_HERE)
})(MapContainer);
