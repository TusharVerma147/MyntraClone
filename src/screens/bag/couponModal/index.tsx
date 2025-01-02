import React, { useState } from 'react';
import {View,Text,FlatList,Modal,TouchableWithoutFeedback, } from 'react-native';
import { colors } from '../../../theme';
import CustomButton from '../../../components/customButton';
import styles from './styles';

const CouponModal = ({ visible, onClose, onSelectCoupon }: any) => {
  const coupons = [
    { id: '1', code: 'SAVE10', discount: '10%', description: 'Get 10% off' },
    { id: '2', code: 'CHRISTMAS25', discount: '25%', description: 'Get 25% off' },
    { id: '3', code: 'NY50', discount: '50%', description: 'Get 50% off', minimumPurchase: 1200 },
    { id: '4', code: 'FLASHSALE30', discount: '30%', description: 'Get 30% off' },
    { id: '5', code: 'SUMMER20', discount: '20%', description: 'Get 20% off' },
    { id: '6', code: 'WINTER15', discount: '15%', description: 'Get 15% off' },
    { id: '7', code: 'EOSS', discount: '40%', description: 'Get 40% off' },
  ];

  const [selectedCoupon, setSelectedCoupon] = useState<string | null>(null);

  const handleToggleCoupon = (coupon: any) => {
    if (selectedCoupon === coupon.id) {
      setSelectedCoupon(null); 
      onSelectCoupon(null); 
      onClose();
    } else {
      setSelectedCoupon(coupon.id); 
      onSelectCoupon(coupon); 
      onClose();
    }
  };

  return (
    <Modal visible={visible} transparent animationType="none">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>Available Coupons</Text>
        <FlatList
          data={coupons}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.couponItem}>
              <View>
                <Text style={styles.couponCode}>{item.code}</Text>
                <Text style={styles.couponDescription}>{item.description}</Text>
              </View>
              <CustomButton
                title={selectedCoupon === item.id ? 'REMOVE' : 'APPLY'}
                 textColor={ colors.zeptored}
                style={[
                  styles.couponButton,
                ]}
                textStyle={styles.couponButtonText}
                borderColor={colors.zeptored}
                borderWidth={1}
                borderRadius={5}
                onPress={() => handleToggleCoupon(item)}
              />
            </View>
          )}
        />
      </View>
    </Modal>
  );
};


export default CouponModal;

