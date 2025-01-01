import { useState, useEffect } from 'react';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import key from '../api/api';

interface UserLocation {
  latitude: number;
  longitude: number;
}

export const useLocation = () => {
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [address, setAddress] = useState<string>('');
  const [currentLocationAddress, setCurrentLocationAddress] = useState<string>('');
  const [nearbyPlaces, setNearbyPlaces] = useState<any[]>([]);
  const [showNearbyPlaces, setShowNearbyPlaces] = useState<boolean>(false);

  useEffect(() => {
    Geolocation.requestAuthorization();
    getCurrentLocation();
  }, []);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      async position => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
        await fetchAddressFromCoordinates(latitude, longitude);
      },
      error => console.error(error),
      { enableHighAccuracy: true, timeout: 60000, maximumAge: 10000 },
    );
  };

  const fetchAddressFromCoordinates = async (latitude: number, longitude: number) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${key}`,
      );
      const address = response.data.results[0]?.formatted_address;
      setCurrentLocationAddress(address || 'Address not found');
    } catch (error) {
      console.error('Error fetching address:', error);
    }
  };

  const fetchNearbyPlaces = async () => {
    if (!userLocation) return;
    const { latitude, longitude } = userLocation;

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1000&key=${key}`,
      );
      setNearbyPlaces(response.data.results);
      setShowNearbyPlaces(true);
    } catch (error) {
      console.error('Error fetching nearby places:', error);
    }
  };

  return {
    address,
    setAddress,
    currentLocationAddress,
    nearbyPlaces,
    showNearbyPlaces,
    setShowNearbyPlaces,
    fetchNearbyPlaces,
  };
};
