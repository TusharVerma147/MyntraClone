import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  removeFromBag,
  updateQuantity,
  clearCart,
} from '../../redux/slice/bagSlice';
import {vh} from '../../theme/dimensions';
import {colors} from '../../theme';
import AppWrapper from '../../components/appWrapper';
import AppHeader from '../../components/appHeader';
import {Icons} from '../../assets';
import CustomButton from '../../components/customButton';
import QuantityModal from '../../components/quantityModal';
import styles from './styles';

const Bag = ({navigation}: any) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((state: any) => state.bag.items);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedQty, setSelectedQty] = useState<number>(1);
  const [itemIdForModal, setItemIdForModal] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedCoupon, setSelectedCoupon] = useState(null);

  const renderItem = ({item}: any) => {
    const isSelected = selectedItems.includes(item.id);

    return (
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image source={item.product.image} style={styles.itemImage} />
          <TouchableOpacity
            style={[
              styles.selectButton,
              isSelected && {backgroundColor: colors.zeptored},
            ]}
            onPress={() => {
              if (isSelected) {
                setSelectedItems(selectedItems.filter(id => id !== item.id));
              } else {
                setSelectedItems([...selectedItems, item.id]);
              }
            }}>
            {isSelected && <Text style={styles.checkmarkText}>✓</Text>}
          </TouchableOpacity>
        </View>
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{item.product.brand}</Text>
          <Text style={styles.itemType}>{item.product.type}</Text>
          <View style={styles.priceview}>
            <Text style={styles.itemdiscountPrice}>
              {item.product.DiscountedPrice}
            </Text>
            <Text style={styles.itemPrice}>{item.product.Price}</Text>
            <Text style={styles.off}>{item.product.off}</Text>
          </View>
          <TouchableOpacity
            style={styles.qtyview}
            onPress={() => {
              setItemIdForModal(item.id);
              setSelectedQty(item.quantity);
              setModalVisible(true);
            }}>
            <Text style={styles.quantityButton}>Qty:{item.quantity}</Text>
            <Image source={Icons.bottomsecond} style={styles.bottom} />
          </TouchableOpacity>
          <View style={styles.return}>
            <Image source={Icons.return} style={styles.cross} />
            <Text style={styles.days}>
              14 days <Text style={styles.itemType}>return available</Text>
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => dispatch(removeFromBag(item.id))}>
          <Image source={Icons.cross} style={styles.cross} />
        </TouchableOpacity>
      </View>
    );
  };

  const handleQtyChange = (qty: number) => {
    if (itemIdForModal) {
      dispatch(updateQuantity({id: itemIdForModal, quantity: qty}));
    }
    setModalVisible(false);
  };

  const selectedBagItems = bagItems.filter(item =>
    selectedItems.includes(item.id),
  );

  const totalMRP = selectedBagItems.reduce(
    (total: number, item: any) =>
      total + parseFloat(item.product.Price.replace('₹', '')) * item.quantity,
    0,
  );

  console.log('Total MRP', totalMRP);

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

  console.log('Total Discount', totalDiscount);

  const totalAmount = totalMRP - totalDiscount + platformFee + shippingFee;

  return (
    <AppWrapper backgroundColor={colors.screengrey}>
      <AppHeader
        backicon={Icons.back}
        backColor={colors.charcol}
        backHeight={vh(19)}
        backWidth={vh(19)}
        marginLeft={10}
        title="SHOPPING BAG"
        titleColor={colors.charcol}
        rightIcon2={Icons.wishlist}
        rightIcon1={Icons.delete}
        titleSize={vh(15)}
        backgroundColor={Platform.OS === 'android' ? colors.white : 'none'}
        onPressRightIcon2={() => navigation.navigate('Wishlist')}
        onPressRightIcon1={() => {
          dispatch(clearCart());
        }}
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
        <ScrollView>
          <View style={styles.couponcontainer}>
            <TouchableOpacity
              style={styles.couponbutton}
              onPress={() => navigation.navigate('CouponScreen')}>
              <Text style={styles.applycoupon}>Apply Coupon</Text>
              <Text style={styles.viewcoupon}>View Coupons</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={bagItems}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListFooterComponent={
              <View style={styles.footer}>
                <View style={styles.priceDetailsContainer}>
                  <Text style={styles.priceDetailsText}>Total MRP</Text>
                  <Text style={styles.priceDetailsValue}>₹{totalMRP}</Text>
                </View>
                <View style={styles.priceDetailsContainer}>
                  <Text style={styles.priceDetailsText}>Discount on MRP</Text>
                  <Text style={styles.discountValue}>-₹{totalDiscount}</Text>
                </View>
                <View style={styles.priceDetailsContainer}>
                  <Text style={styles.priceDetailsText}>Platform Fee</Text>
                  <Text style={styles.priceDetailsValue}>₹{platformFee}</Text>
                </View>
                <View style={styles.priceDetailsContainer}>
                  <Text style={styles.priceDetailsText}>Shipping Fee</Text>
                  <Text style={styles.freeShipping}>FREE</Text>
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
              <Text style={{color: colors.zeptored}}>Terms of Use </Text>
              <Text style={{color: colors.charcol}}>& </Text>
              <Text style={{color: colors.zeptored}}>Privacy Policy</Text>
            </Text>
          </View>
        </ScrollView>
      )}

      {bagItems.length > 0 && (
        <CustomButton
          title="Place Order"
          onPress={() => navigation.navigate('Checkout')}
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
        onClose={() => setModalVisible(false)}
        onQtyChange={qty => handleQtyChange(qty)}
      />
    </AppWrapper>
  );
};

export default Bag;
