import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    Modal,
    TouchableWithoutFeedback,
    Platform,
  } from 'react-native';
  import React, { useState, useEffect } from 'react';
  import AppWrapper from '../../components/appWrapper';
  import AppHeader from '../../components/appHeader';
  import { Icons } from '../../assets';
  import { colors } from '../../theme';
  import { vh } from '../../theme/dimensions';
  import Geolocation from '@react-native-community/geolocation';
  import key from '../../api/api';
  import axios from 'axios';
  import CustomButton from '../../components/customButton';
  import styles from './styles';
  import ProgressIndicator from '../../components/progressIndicator';
  import NearbyPlacesModal from './nearbyPlacesModal';
  
  interface UserLocation {
    latitude: number;
    longitude: number;
  }
  
  const Address = ({ navigation }: any) => {
    const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
    const [address, setAddress] = useState<string>('');
    const [currentLocationAddress, setCurrentLocationAddress] = useState<string>('');
    const [nearbyPlaces, setNearbyPlaces] = useState<any[]>([]);
    const [showNearbyPlaces, setShowNearbyPlaces] = useState<boolean>(false);
    const [currentStep, setCurrentStep] = useState<number>(2);
  
    Geolocation.setRNConfiguration({
      skipPermissionRequests: false,
      authorizationLevel: 'always',
    });
  
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
  
    const fetchAddressFromCoordinates = async (
      latitude: number,
      longitude: number,
    ) => {
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
  
    const handlePlaceSelect = (place: string) => {
      setAddress(place);
      setShowNearbyPlaces(false);
      setCurrentStep(3); 
    };
  
    const handlePlaceOrder = () => {
      navigation.navigate('OrderConfirmation');
    };
  
    return (
      <AppWrapper >
        <AppHeader
          title="SELECT ADDRESS"
          backicon={Icons.back}
          backColor={colors.charcol}
          backHeight={19}
          backWidth={19}
          marginLeft={vh(10)}
          titleSize={vh(15)}
          backgroundColor={Platform.OS === 'android' ? colors.white : 'none'}
        />
        <ProgressIndicator currentStep={currentStep} totalSteps={3} /> 
        
        <CustomButton
          title="ADD NEW ADDRESS"
          borderWidth={1}
          borderColor={colors.charcol}
          borderRadius={5}
          backgroundColor={colors.white}
          onPress={fetchNearbyPlaces}
          style={styles.buttonaddress}
          textStyle={styles.buttonaddressText}
        />
        
        {showNearbyPlaces && (
          <Modal
            transparent={true}
            animationType="fade"
            visible={showNearbyPlaces}>
            <TouchableWithoutFeedback onPress={() => setShowNearbyPlaces(false)}>
              <View style={styles.modalOverlay}>
                <View style={styles.nearbyPlacesContainer}>
                  <FlatList
                    data={nearbyPlaces}
                    keyExtractor={item => item.place_id}
                    ListHeaderComponent={
                      <TouchableOpacity
                        style={styles.listheader}
                        onPress={() => {
                          setAddress(currentLocationAddress);
                          setShowNearbyPlaces(false);
                          setCurrentStep(3); 
                        }}>
                        <Image source={Icons.coordinate} style={styles.clock} />
                        <Text style={styles.nearbyPlaceText}>
                          Current Location:{' '}
                          {currentLocationAddress || 'Fetching...'}
                        </Text>
                      </TouchableOpacity>
                    }
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={styles.nearbyPlaceItem}
                        onPress={() => handlePlaceSelect(item.name)}>
                        <Text style={styles.nearbyPlaceText}>{item.name}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        )}
        
        <View style={styles.addressview}>
          <Text style={styles.addressSelectText}>Selected Address:</Text>
          <Text style={styles.addressText}>
            {address || 'No Address Selected'}
          </Text>
        </View>
        
        <View style={styles.addressview}>
          <Text style={styles.addressSelectText}>Delivery Estimates</Text>
          <Text style={styles.addressText}>
            Estimated Delivery within 7-10 days
          </Text>
        </View>
  
        <CustomButton
          title="Payment"
          onPress={handlePlaceOrder}
          backgroundColor={colors.zeptored}
          textColor={colors.white}
          textStyle={styles.buttontext}
          borderRadius={5}
          style={styles.button}
        />
      </AppWrapper>
    );
  };
  
  export default Address;
  
