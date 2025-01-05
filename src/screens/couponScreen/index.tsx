import React from 'react';
import { View, Text, FlatList, Platform } from 'react-native';
import AppWrapper from '../../components/appWrapper';
import AppHeader from '../../components/appHeader';
import { Icons } from '../../assets';
import { colors } from '../../theme';
import { vh } from '../../theme/dimensions';
import CustomButton from '../../components/customButton';
import styles from './styles';

const CouponScreen = () => {

  const coupons = [
    { id: '1', code: 'SAVE10', discount: '10%', description: 'Get 10% off' },
    { id: '2', code: 'CHRISTMAS25', discount: '25%', description: 'Get 25% off' },
    { id: '3', code: 'NY50', discount: '50%', description: 'Get 50% off', minimumPurchase: 1200 },
    { id: '4', code: 'FLASHSALE30', discount: '30%', description: 'Get 30% off' },
    { id: '5', code: 'SUMMER20', discount: '20%', description: 'Get 20% off' },
    { id: '6', code: 'WINTER15', discount: '15%', description: 'Get 15% off' },
    { id: '7', code: 'EOSS', discount: '40', description: 'Get 40% off' },
  ];

  return (
    <AppWrapper>
      <AppHeader
        title="MY COUPONS"
        backicon={Icons.back}
        backColor={colors.charcol}
        backHeight={19}
        backWidth={19}
        marginLeft={vh(10)}
        titleSize={vh(15)}
        backgroundColor={Platform.OS === 'android' ? colors.white : 'none'}
      />
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
              title="VIEW"
              textColor={colors.zeptored}
              style={styles.couponbutton}
              textStyle={styles.viewcoupon}
              borderColor={colors.zeptored}
              borderWidth={1}
              backgroundColor={colors.lightpink}
              borderRadius={5}
              onPress={() => {} }
            />
          </View>
        )}
      />
    </AppWrapper>
  );
};

export default CouponScreen;
