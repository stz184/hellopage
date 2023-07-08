import { useState, useSyncExternalStore } from "react";
import { useLocalStorageState } from "./useLocalStorageState";

type Coordinates = {
    latitude: number;
    longitude: number;
}

type LocationPermission = 'granted' | 'denied' | null;

type GeoLocation = {
    location: Coordinates | null;
    locationPermission: LocationPermission;
}

const initialValue: GeoLocation = { location: null, locationPermission: null };

const getSubscribe = (location: GeoLocation, setLocation: (x: GeoLocation) => void): void => {
    if (location?.locationPermission === null) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                // If the user grants permission, store their location in the userLocation variable
                const userLocation = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };
                // Save the user's location in localStorage
                setLocation({ location: userLocation, locationPermission: 'granted' });
            },
            function (error) {
                // If the user denies permission, store null in the userLocation variable
                const userLocation = null;
                // Save the user's location in localStorage
                setLocation({ location: userLocation, locationPermission: 'denied' });
            }
        );
    }
}

const useLocation = () => {
    const [location, setLocation] = useLocalStorageState('geoLocation', initialValue);
    getSubscribe(location as GeoLocation, setLocation);
    return location;
};


export default useLocation;

