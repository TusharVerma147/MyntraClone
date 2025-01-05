import React, {useState} from 'react';
import {View, Text} from 'react-native';
import AppWrapper from '../../components/appWrapper';
import AppHeader from '../../components/appHeader';
import {Icons} from '../../assets';
import {colors} from '../../theme';
import {vh} from '../../theme/dimensions';
import CustomButton from '../../components/customButton';
import ProgressIndicator from '../../components/progressIndicator';
import LocationModal from '../../components/locationModal';
import {useLocation} from '../../custom/location';
import styles from './styles';
import RazorpayCheckout from 'react-native-razorpay';
import {useDispatch} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import Toast from 'react-native-simple-toast';
import {handleRemoveFromBag} from '../../utils/common';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const Address = ({navigation, route}: any) => {
  const {
    address,
    setAddress,
    currentLocationAddress,
    nearbyPlaces,
    showNearbyPlaces,
    setShowNearbyPlaces,
    fetchNearbyPlaces,
  } = useLocation();

  const {totalAmount, selectedBagItems} = route.params;
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const dispatch = useDispatch();

  const handlePlaceSelect = (place: string) => {
    setAddress(place);
    setShowNearbyPlaces(false);
  };

  const handlePlaceOrder = () => {
    if (!address) {
      Geolocation.requestAuthorization();
      Toast.showWithGravity(
        'Please select a delivery address!',
        Toast.LONG,
        Toast.BOTTOM,
      );
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
      theme: {color: '#53a20e'},
    };

    RazorpayCheckout.open(options)
      .then((data: any) => {
        setIsProcessingPayment(false);
        Toast.show('Payment Successful', Toast.SHORT,);


        const userId = auth().currentUser?.uid;
        if (userId) {
          const orderId = firestore().collection('users').doc(userId).collection('orders').doc().id;
          firestore()
            .collection('users')
            .doc(userId)
            .collection('orders')
            .add({
              orderId,
              paymentId: data.razorpay_payment_id,
              
              items: selectedBagItems, 
            
              totalAmount,
              orderDate: firestore.FieldValue.serverTimestamp(),
              status: 'Paid',
            })
            .then(() => {
              selectedBagItems.forEach((item: {id: any}) => {
                handleRemoveFromBag(item.id, dispatch);
              });

      
              navigation.reset({
                index: 0,
                routes: [{name: 'BottomTab', params: {screen: 'Home'}}],
              });
            })
            .catch(error => {
               Toast.show(
                'Order cannot saved. Try Again',
                Toast.SHORT, error
              );
            });
        }
      })
      .catch((error: any) => {
        setIsProcessingPayment(false);
        Toast.show(
          'Payment Failed. Try Again',
          Toast.SHORT, error
        );
      });
  };

  

  
  return (
    <AppWrapper>
      <AppHeader
        title="SELECT ADDRESS"
        backicon={Icons.back}
        backColor={colors.charcol}
        backHeight={vh(20)}
        backWidth={vh(20)}
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
