import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, StatusBar, Image, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity } from '../../redux/slice/bagSlice';
import { colors } from '../../theme';
import AppWrapper from '../../components/appWrapper';
import AppHeader from '../../components/appHeader';
import { Icons } from '../../assets';
import CustomButton from '../../components/customButton';
import QuantityModal from './quantityModal';
import ProgressIndicator from '../../components/progressIndicator';
import CouponModal from './couponModal';
import Toast from 'react-native-simple-toast';
import { handleWishlistPress, handleDelete, handleRemoveFromBag } from '../../utils/common';
import { vh, vw } from '../../theme/dimensions';
import ItemCard from '../../components/itemCard';
import styles from './styles';

const Bag = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((state: any) => state.bag.items);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedQty, setSelectedQty] = useState<number>(1);
  const [itemIdForModal, setItemIdForModal] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedCoupon, setSelectedCoupon] = useState<any>(null);
  const [couponModalVisible, setCouponModalVisible] = useState(false);

  const handleSelectCoupon = (coupon: any) => {
    if (coupon && coupon.discount) {
      const discountPercentage = parseFloat(coupon.discount.replace('%', '')) / 100;
      setSelectedCoupon({ ...coupon, discountPercentage });
    } else {
      setSelectedCoupon(null);
    }
  };

  const handleCouponModal = () =>{
    setCouponModalVisible(false)
  };

  const handleQtyModal = () =>{
    setModalVisible(false)
  };

  const handleQtyChange = (qty: number) => {
    if (itemIdForModal) {
      dispatch(updateQuantity({ id: itemIdForModal, quantity: qty }));
    }
    setModalVisible(false);
  };

  const handlePlaceOrder = () => {
    if (selectedItems.length > 0) {
      navigation.navigate('Address', { totalAmount, selectedItems });
    } else {
      Toast.show('Please select at least 1 item', Toast.SHORT);
    }
  };

  const selectedBagItems = bagItems.filter((item: { id: string }) =>
    selectedItems.includes(item.id),
  );

  const totalMRP = selectedBagItems.reduce(
    (total: number, item: any) =>
      total + parseFloat(item.product.Price.replace('₹', '')) * item.quantity,
    0,
  );

  const totalDiscount = selectedBagItems.reduce(
    (total: number, item: any) =>
      total +
      (parseFloat(item.product.Price.replace('₹', '')) -
        parseFloat(item.product.DiscountedPrice.replace('₹', ''))) *
        item.quantity,
    0,
  );

  const platformFee = selectedItems.length > 0 ? 20 : 0;
  const shippingFee = 0;
  const couponDiscount = selectedCoupon?.discountPercentage
    ? totalMRP * selectedCoupon.discountPercentage
    : 0;
  const totalAmount =
    totalMRP - totalDiscount - couponDiscount + platformFee + shippingFee;

 

  return (
    <AppWrapper backgroundColor={colors.screengrey}>
      <StatusBar backgroundColor={colors.screengrey} barStyle={'dark-content'} />
      <AppHeader
        backicon={Icons.back}
        backColor={colors.charcol}
        backHeight={vh(18)}
        backWidth={vh(18)}
        marginLeft={10}
        title="SHOPPING BAG"
        titleSize={vh(15)}
        titleColor={colors.charcol}
        rightIcon2={Icons.wishlist}
        rightIcon1={bagItems.length > 0 ? Icons.delete : null}
        backgroundColor={Platform.OS === 'android' ? colors.screengrey : 'none'}
        onPressRightIcon1={() => handleDelete(dispatch)}
        onPressRightIcon2={() => handleWishlistPress(navigation)}
      />
      {bagItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Image source={Icons.emptybag} style={styles.emptybag} />
          <Text style={styles.emptyMessage}>Hey! it feels so light!</Text>
          <Text style={styles.emptysubMessage}>
            There is nothing in your bag, Let's add some items.
          </Text>
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <ProgressIndicator currentStep={1} totalSteps={3} />
          <View style={styles.couponcontainer}>
            <TouchableOpacity
              style={styles.couponbutton}
              onPress={() => setCouponModalVisible(true)}>
              <Text style={styles.applycoupon}>
                {selectedCoupon ? 'Coupon Applied' : 'Apply Coupon'}
              </Text>
              <Text style={styles.viewcoupon}>
                {selectedCoupon ? `${selectedCoupon.code}` : 'View Coupon'}
              </Text>
            </TouchableOpacity>
          </View>
          <CouponModal
            visible={couponModalVisible}
            onClose={() => setCouponModalVisible(false)}
            onSelectCoupon={handleSelectCoupon}
          />
          <FlatList
            data={bagItems}
            renderItem={({ item }) => (
              <ItemCard
                item={item}
                onSelectItem={() => {
                  const isSelected = selectedItems.includes(item.id);
                  if (isSelected) {
                    setSelectedItems(selectedItems.filter(id => id !== item.id));
                  } else {
                    setSelectedItems([...selectedItems, item.id]);
                  }
                }}
                isSelected={selectedItems.includes(item.id)}
                onQtyChange={(id: string, qty: number) => {
                  setItemIdForModal(id);
                  setSelectedQty(qty);
                  setModalVisible(true);
                }}
                onRemoveItem={(id: string) => handleRemoveFromBag(id, dispatch)}
              />
            )}
            keyExtractor={item => item.id}
            ListFooterComponent={
              <View style={styles.footer}>
                <View style={styles.priceDetailsContainer}>
                  <Text style={styles.priceDetailsText}>Total MRP</Text>
                  <Text style={styles.priceDetailsValue}>₹{totalMRP}</Text>
                </View>
                <View style={styles.priceDetailsContainer}>
                  <Text style={styles.priceDetailsText}>Discount on MRP</Text>
                  <Text style={styles.priceDetailsValue}>-₹{totalDiscount}</Text>
                </View>
                <View style={styles.priceDetailsContainer}>
                  <Text style={styles.priceDetailsText}>Platform Fee</Text>
                  <Text style={styles.priceDetailsValue}>₹{platformFee}</Text>
                </View>
                <View style={styles.priceDetailsContainer}>
                  <Text style={styles.priceDetailsText}>Shipping Fee</Text>
                  <Text style={styles.priceDetailsValue}>₹{shippingFee}</Text>
                </View>
                <View style={styles.priceDetailsContainer}>
                  <Text style={styles.priceDetailsText}>Coupon Discount</Text>
                  <Text style={styles.priceDetailsValue}>
                    -₹{couponDiscount.toFixed(2)}
                  </Text>
                </View>
                <View style={styles.totalAmountContainer}>
                  <Text style={styles.totalText}>Total Amount</Text>
                  <Text style={styles.totalValue}>₹{totalAmount}</Text>
                </View>
              </View>
            }
          />
           <View style={styles.infoview}>
            <View style={styles.iconview}>
              <Image source={Icons.original} style={styles.icon} />
              <Text style={styles.infotext}>Genuine Products</Text>
            </View>
            <View style={styles.iconview}>
              <Image source={Icons.contsactless} style={styles.icon} />
              <Text style={styles.infotext}>Contactless Delivery</Text>
            </View>
            <View style={styles.iconview}>
              <Image source={Icons.secure} style={styles.icon} />
              <Text style={styles.infotext}>Secure Payments</Text>
            </View>
          </View>
          <View style={styles.taglinecont}>
            <Text style={styles.taglinetext}>
              By placing the order, you agree to Myntra's{' '}
              <Text style={styles.termsText}>Terms of Use </Text>
              <Text style={styles.andText}>& </Text>
              <Text style={styles.termsText}>Privacy Policy</Text>
            </Text>
          </View>
      
        </ScrollView>
      )}
    {bagItems.length > 0 && (
        <CustomButton
          title="Place Order"
          onPress={handlePlaceOrder}
          backgroundColor={colors.zeptored}
          textColor={colors.white}
          textStyle={styles.buttontext}
          borderRadius={5}
          style={styles.button}
        />
      )}
      <QuantityModal
        visible={modalVisible}
        selectedQty={selectedQty}
        onClose={handleQtyModal}
        onQtyChange={qty => handleQtyChange(qty)}
      />

    </AppWrapper>
  );
};

export default Bag;

