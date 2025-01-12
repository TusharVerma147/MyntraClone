import React, { useState } from 'react';
import { View, Text } from 'react-native';
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
import RazorpayCheckout from 'react-native-razorpay';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-simple-toast';
import {handleRemoveFromBag } from '../../utils/common';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Geolocation from '@react-native-community/geolocation';

const Address = ({ navigation, route }: any) => {
  const {
    address,
    setAddress,
    currentLocationAddress,
    nearbyPlaces,
    showNearbyPlaces,
    setShowNearbyPlaces,
    fetchNearbyPlaces,
  } = useLocation();

  const { totalAmount, selectedItems } = route.params;  
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const dispatch = useDispatch();

  const handlePlaceSelect = (place: string) => {
    setAddress(place);
    setShowNearbyPlaces(false);
  };

  const handlePlaceOrder = () => {
    if (!address) {
      Toast.show('Please Select the address', Toast.SHORT)
      return;
    }
    handlePayment();
  };
  
  

  const handlePayment = () => {
    setIsProcessingPayment(true);

    const razorpayKeyId = 'rzp_test_GnpMgYfbVsmYuV'; 
    const options = {
      description: 'Payment for your order',
      image: 'https://i.imgur.com/3g7nmJC.jpg',
      currency: 'INR',
      key: razorpayKeyId,
      amount: totalAmount * 100, 
      name: 'Myntra',
      prefill: {
        email: 'xyz@example.com',
        contact: '9191919191',
        name: 'Customer',
      },
      theme: { color: '#53a20e' },
    };

    RazorpayCheckout.open(options)
      .then((data: any) => {
        setIsProcessingPayment(false);
        Toast.showWithGravity('Payment Successful', Toast.SHORT, Toast.BOTTOM, {
          backgroundColor: colors.reddish,
        });
        selectedItems.forEach((item: { id: string; }) => {
          handleRemoveFromBag(item, dispatch); 
        });
        saveOrderHistory(data, selectedItems);

        navigation.reset({
          index: 0,  
          routes: [{ name: 'BottomTab', params: { screen: 'Home' } }],
        });
      })
      .catch((error: any) => {
        setIsProcessingPayment(false);
        console.error('Payment Error:', error); 
        Toast.showWithGravity('Payment Failed. Try Again', Toast.LONG, Toast.BOTTOM, { backgroundColor: colors.reddish });
      });
  };

  const saveOrderHistory = (paymentData: any, items: any) => {
    const user = auth().currentUser; 
    if (!user) {
      console.log('No authenticated user found');
      return;
    }

    const orderId = paymentData.razorpay_payment_id;
    const paymentId = paymentData.razorpay_payment_id;
    const orderDate = new Date().toISOString();

    const orderDetails = {
      userId: user.uid, 
      orderId,
      paymentId,
      totalAmount,
      status: 'Success',
      date: orderDate,
      items, 
    };

    firestore()
      .collection('users') 
      .doc(user.uid)  
      .collection('user_orders')  
      .add(orderDetails)
      .then(() => {
        console.log('Order saved to Firestore under user:', user.uid);
      })
      .catch((error) => {
        console.error('Error saving order to Firestore:', error);
      });
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

