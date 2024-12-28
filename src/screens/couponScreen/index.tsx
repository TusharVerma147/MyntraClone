// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import AppWrapper from '../../components/appWrapper';
// import AppHeader from '../../components/appHeader';
// import { Icons } from '../../assets';
// import { colors } from '../../theme';
// import { vh } from '../../theme/dimensions';
// import CustomButton from '../../components/customButton';




// type NavigationProp = StackNavigationProp<any>;

// const CouponScreen = () => {

//   const navigation = useNavigation<NavigationProp>();
//   const coupons = [
//     { id: '1', code: 'SAVE10', discount: 10, description: 'Get 10% off', minimumPurchase: 500 },
//     { id: '2', code: 'CHRISTMAS25', discount: 25, description: 'Get 25% off', minimumPurchase: 1000 },
//     { id: '3', code: 'NY50', discount: 50, description: 'Get 50% off', minimumPurchase: 1200 },
//     { id: '4', code: 'FLASHSALE30', discount: 30, description: 'Get 30% off', minimumPurchase: 750 },
//     { id: '5', code: 'SUMMER20', discount: 20, description: 'Get 20% off', minimumPurchase: 6000 },
//     { id: '6', code: 'WINTER15', discount: 15, description: 'Get 15% off', minimumPurchase: 4000 },
//     { id: '7', code: 'FREESHIP', discount: 0, description: '(No minimum purchase required)', minimumPurchase: 0 },
//   ];

//   const handleCouponSelect = (coupon:any) => {
//     navigation.navigate('Bag', { selectedCoupon: coupon });
//   };

//   return (
//    <AppWrapper>
//  <AppHeader
//         title='MY COUPON'
//         backicon={Icons.back}
//         backColor={colors.charcol}
//         backHeight={19}
//         backWidth={19}
//         marginLeft={10}
//         titleSize={vh(15)}

//       />
    
//       <FlatList
//         data={coupons}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View
//             style={styles.couponItem}>
//             <View>
//             <Text style={styles.couponCode}>{item.code}</Text>
//             <Text style={styles.couponDescription}>{item.description}</Text>
//             <Text style={styles.couponDescription}>₹{item.minimumPurchase}</Text>
//              </View> 
//              <CustomButton title='APPLY' textColor={colors.zeptored}
//               style={styles.couponbutton} textStyle={styles.viewcoupon}
//               borderColor={colors.zeptored} borderWidth={1} backgroundColor='#feecf1'
//               borderRadius={5}
//               />
         
        
//           </View>
//         )}
//       />
//    </AppWrapper>
//   );
// };

// export default CouponScreen;

// const styles = StyleSheet.create({

//   couponItem: { padding: 15, borderBottomWidth: 1, borderColor: '#ccc', flexDirection:'row', justifyContent:"space-between", alignItems:
//     'center', marginVertical:vh(5),backgroundColor:colors.white
//   },
//   couponCode: { fontSize: vh(18), fontWeight: '600' },
//   couponDescription: { fontSize: 14, color: '#666' },

//   couponbutton: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical:vh(5)
//   },
//   applycoupon: {
//     fontSize: vh(16),
//     fontWeight: '600',
//     color: colors.charcol,

//   },
//   viewcoupon: {
//     fontSize: vh(15),
//     fontWeight: '600',
//     color: colors.zeptored,
//   },
// });
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppWrapper from '../../components/appWrapper';
import AppHeader from '../../components/appHeader';
import { Icons } from '../../assets';
import { colors } from '../../theme';
import { vh } from '../../theme/dimensions';
import CustomButton from '../../components/customButton';

const CouponScreen = () => {
  const navigation = useNavigation();
  const [selectedCoupon, setSelectedCoupon] = useState<string | null>(null);

  const coupons = [
    { id: '1', code: 'SAVE10', discount: 10, description: 'Get 10% off', minimumPurchase: 500 },
    { id: '2', code: 'CHRISTMAS25', discount: 25, description: 'Get 25% off', minimumPurchase: 1000 },
    { id: '3', code: 'NY50', discount: 50, description: 'Get 50% off', minimumPurchase: 1200 },
    { id: '4', code: 'FLASHSALE30', discount: 30, description: 'Get 30% off', minimumPurchase: 750 },
    { id: '5', code: 'SUMMER20', discount: 20, description: 'Get 20% off', minimumPurchase: 6000 },
    { id: '6', code: 'WINTER15', discount: 15, description: 'Get 15% off', minimumPurchase: 4000 },
    { id: '7', code: 'FREESHIP', discount: 0, description: '(No minimum purchase required)', minimumPurchase: 0 },
  ];

  const handleApplyCoupon = (coupon: any) => {
    setSelectedCoupon(coupon.id);
    navigation.navigate('Bag', { selectedCoupon: coupon });
  };

  return (
    <AppWrapper>
      <AppHeader
        title="MY COUPON"
        backicon={Icons.back}
        backColor={colors.charcol}
        backHeight={19}
        backWidth={19}
        marginLeft={10}
        titleSize={vh(15)}
      />
      <FlatList
        data={coupons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.couponItem}>
            <View>
              <Text style={styles.couponCode}>{item.code}</Text>
              <Text style={styles.couponDescription}>{item.description}</Text>
              <Text style={styles.couponDescription}>₹{item.minimumPurchase}</Text>
            </View>
            <CustomButton
              title={selectedCoupon === item.id ? 'APPLIED' : 'APPLY'}
              textColor={colors.zeptored}
              style={styles.couponbutton}
              textStyle={styles.viewcoupon}
              borderColor={colors.zeptored}
              borderWidth={1}
              backgroundColor="#feecf1"
              borderRadius={5}
              onPress={() => handleApplyCoupon(item)}
            />
          </View>
        )}
      />
    </AppWrapper>
  );
};

export default CouponScreen;

const styles = StyleSheet.create({
  couponItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: vh(5),
    backgroundColor: colors.white,
  },
  couponCode: { fontSize: vh(18), fontWeight: '600' },
  couponDescription: { fontSize: 14, color: '#666' },
  couponbutton: { paddingVertical: vh(5) },
  viewcoupon: { fontSize: vh(15), fontWeight: '600', color: colors.zeptored },
});
