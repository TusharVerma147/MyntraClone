import React from 'react';
import { View, Text, } from 'react-native';
import AppWrapper from '../../components/appWrapper';
import AppHeader from '../../components/appHeader';
import { Icons } from '../../assets';
import { colors } from '../../theme';
import { vh } from '../../theme/dimensions';
import CustomButton from '../../components/customButton';
import ProgressIndicator from '../../components/progressIndicator';
import LocationModal from '../../components/locationModal';

import { useLocation } from '../../custom/location';
import styles from './styles';

const Address = ({ navigation }: any) => {
  const {
    address,
    setAddress,
    currentLocationAddress,
    nearbyPlaces,
    showNearbyPlaces,
    setShowNearbyPlaces,
    fetchNearbyPlaces,
  } = useLocation();

  const handlePlaceSelect = (place: string) => {
    setAddress(place);
    setShowNearbyPlaces(false);
  };

  const handlePlaceOrder = () => {
    navigation.navigate('OrderConfirmation');
  };

  return (
    <AppWrapper>
      <AppHeader
        title="SELECT ADDRESS"
        backicon={Icons.back}
        backColor={colors.charcol}
        backHeight={19}
        backWidth={19}
        marginLeft={vh(10)}
        titleSize={vh(15)}
      />
      <ProgressIndicator currentStep={2} totalSteps={3} />

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

      <LocationModal
        visible={showNearbyPlaces}
        currentLocationAddress={currentLocationAddress}
        nearbyPlaces={nearbyPlaces}
        onSelectPlace={handlePlaceSelect}
        onClose={() => setShowNearbyPlaces(false)}
      />

      <View style={styles.addressview}>
        <Text style={styles.addressSelectText}>Selected Address:</Text>
        <Text style={styles.addressText}>{address || 'No Address Selected'}</Text>
      </View>

      <View style={styles.addressview}>
        <Text style={styles.addressSelectText}>Delivery Estimates</Text>
        <Text style={styles.addressText}>Estimated Delivery within 7-10 days</Text>
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

