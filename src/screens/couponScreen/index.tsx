import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const CouponScreen = ({ navigation }) => {
  const coupons = [
    { id: '1', code: 'SAVE10', discount: 10, description: 'Get ₹10 off' },
    { id: '2', code: 'SAVE20', discount: 20, description: 'Get ₹20 off' },
  ];

  const handleCouponSelect = (coupon) => {
    navigation.navigate('Bag', { selectedCoupon: coupon });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={coupons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.couponItem}
            onPress={() => handleCouponSelect(item)}>
            <Text style={styles.couponCode}>{item.code}</Text>
            <Text style={styles.couponDescription}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CouponScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 20 },
  couponItem: { padding: 15, borderBottomWidth: 1, borderColor: '#ccc' },
  couponCode: { fontSize: 18, fontWeight: '600' },
  couponDescription: { fontSize: 14, color: '#666' },
});
