import { View,Text,Image,ScrollView,Platform,TouchableOpacity,} from 'react-native';
import React, { useState, useEffect } from 'react';
import AppWrapper from '../../components/appWrapper';
import AppHeader from '../../components/appHeader';
import { Icons, Images } from '../../assets';
import { vh } from '../../theme/dimensions';
import { colors } from '../../theme';
import { useRoute } from '@react-navigation/native';
import CustomButton from '../../components/customButton';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import { handleWishlistPress, handleAddToWishlist,  handleAddToBag } from '../../utils/common';
import LocationModal from '../../components/locationModal';
import { useLocation } from '../../custom/location';


const Details = ({ navigation }: any) => {
  const [isOpened, setIsOpened] = useState(false); 
  const [isQuestionsOpened, setIsQuestionsOpened] = useState(false);
  const [address, setAddress] = useState('Appinventiv'); 
  const {
    setShowNearbyPlaces,
    fetchNearbyPlaces,
    currentLocationAddress,
    nearbyPlaces,
    showNearbyPlaces,
  } = useLocation();

  const handlePlaceSelect = (place: string) => {
    setAddress(place);
    setShowNearbyPlaces(false);
  };

  const handleDescription = () => {
    setIsOpened(!isOpened);
  };

  const handleQuestions = () => {
    setIsQuestionsOpened(!isQuestionsOpened);
  };

  const route = useRoute();
  const { item } = route.params;

  const dispatch = useDispatch();

  const bagItems = useSelector((state: any) => state.bag.items);
  const wishlistItems = useSelector((state: any) => state.wishlist.items);

  const isInBag = bagItems.some((bagItem: any) => bagItem.id === item.id);
  const isInWishlist = wishlistItems.some(
    (wishlistItem: any) => wishlistItem.id === item.id
  );

  const totalQuantity = bagItems.reduce((total: number, item: any) => total + item.quantity, 0);

 
  useEffect(() => {
    if (!address || address === '') {
      setAddress('Appinventiv');
    }
  }, [address]);

  return (
    <AppWrapper backgroundColor={colors.white}>
      <AppHeader
        backicon={Icons.back}
        backColor={colors.charcol}
        backHeight={vh(19)}
        backWidth={vh(19)}
        marginLeft={10}
        leftHeight={vh(40)}
        leftWidth={vh(40)}
        marginHorizontal={5}
        iconleft={Icons.splash_img}
        title={item.brand}
        titleColor={colors.charcol}
        rightIcon1={Icons.wishlist}
        rightIcon2={Icons.bag}
        titleSize={vh(15)}
        backgroundColor={Platform.OS === 'android' ? colors.white : 'none'}
        onPressRightIcon1={() => handleWishlistPress(navigation)}
        onPressRightIcon2={() => navigation.navigate('Bag')}
        badgeCount={totalQuantity > 0 ? totalQuantity : undefined}
      />

      <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false} bounces={false}>
        <View>
          <Image source={item.image} style={styles.image} />
          <View style={styles.ratingview}>
            <Text>
              {item.rating} <Image source={Icons.star} style={styles.star} />
            </Text>
            <Text style={styles.reviewtext}>{item.reviews}</Text>
          </View>
        </View>

        <View style={styles.detailview}>
          <View style={styles.brandview}>
            <Text style={styles.name}>{item.brand}</Text>
            <Text style={styles.type}>{item.type}</Text>
          </View>
          <View style={styles.priceview}>
            <Text style={styles.price}>{item.Price}</Text>
            <Text style={styles.discount}>{item.DiscountedPrice}</Text>
            <Text style={styles.off}>({item.off})</Text>
          </View>
        </View>

        <View style={styles.infoview}>
          <View style={styles.deliveryview}>
            <Image style={styles.location} source={Icons.location} />
            <Text style={styles.productDescription}>Deliver to {address.split(' ').slice(0, 2).join(' ')}</Text>
          </View>
          <TouchableOpacity onPress={fetchNearbyPlaces}>
            <Text style={styles.changeText}>Change</Text>
          </TouchableOpacity>
        </View>

        <LocationModal
          visible={showNearbyPlaces}
          currentLocationAddress={currentLocationAddress}
          isBottomSheet={true}
          nearbyPlaces={nearbyPlaces}
          onSelectPlace={handlePlaceSelect}
          onClose={() => setShowNearbyPlaces(false)}
        />

        <View style={styles.daysview}>
          <Image style={styles.clock} source={Icons.parcel} />
          <Text style={styles.daysText}>Delivery between 7-10 Working days</Text>
        </View>

        <View style={styles.infoview}>
          <View style={styles.iconview}>
            <Image source={Icons.exchange} style={styles.icon} />
            <Text style={styles.infotext}>14 Day Return & Exchange</Text>
          </View>
          <View style={styles.iconview}>
            <Image source={Icons.pay} style={styles.icon} />
            <Text style={styles.infotext}>Contactless Delivery</Text>
          </View>
          <View style={styles.iconview}>
            <Image source={Icons.original} style={styles.icon} />
            <Text style={styles.infotext}>Secure Payments</Text>
          </View>
          <View style={styles.iconview}>
            <Image source={Icons.quality} style={styles.icon} />
            <Text style={styles.infotext}>Secure Payments</Text>
          </View>
        </View>
        <TouchableOpacity onPress={handleDescription} style={styles.productview} activeOpacity={0.8}>
          <Text style={styles.producttext}>Product Description</Text>
          <Image
            source={isOpened ? Icons.up : Icons.bottom}
            style={styles.clock}
          />
        </TouchableOpacity>

        {isOpened && (
          <View style={styles.desview}>
            <Text style={styles.productDescription}>{item.description}</Text>
          </View>
        )}

        <TouchableOpacity onPress={handleQuestions} style={styles.productview} activeOpacity={0.8}>
          <Text style={styles.producttext}>Customer Questions</Text>
          <Image
            source={isQuestionsOpened ? Icons.up : Icons.bottom}
            style={styles.clock}
          />
        </TouchableOpacity>

        {isQuestionsOpened && (
          <View style={styles.desview}>
            <Text style={styles.questionDescription}>Q1: What is the return policy for this product?</Text>
            <Text style={styles.answerDescription}>A1: You can return the product within 14 days of delivery.</Text>
            
            <Text style={styles.questionDescription}>Q2: Does this product come with a warranty?</Text>
            <Text style={styles.answerDescription}>A2: Yes, it comes with a one-year warranty.</Text>
            
            <Text style={styles.questionDescription}>Q3: Can I use this product on sensitive skin?</Text>
            <Text style={styles.answerDescription}>A3: Yes, it's suitable for sensitive skin.</Text>
          </View>
        )}

        <Image source={Images.fwdpass} style={styles.fwd} />
      </ScrollView>

      <View style={styles.footer}>
        <CustomButton
          title={isInWishlist ? 'Wishlisted' : 'Wishlist'}
          icon={isInWishlist ? Icons.wishlistselected : Icons.wishlist}
          tintColor={colors.zeptored}
          borderColor={colors.zeptored}
          textColor={colors.zeptored}
          borderWidth={1}
          borderRadius={10}
          style={styles.custombutton}
          textStyle={styles.buttontitle}
          paddingHorizontal={vh(40)}
          onPress={() => handleAddToWishlist(item, wishlistItems, dispatch)}
        />

        <CustomButton
          backgroundColor={colors.zeptored}
          tintColor={colors.white}
          title={isInBag ? 'Go to Bag' : 'Add to Bag'}
          icon={Icons.bag}
          borderColor={colors.zeptored}
          textColor={colors.white}
          borderWidth={1}
          borderRadius={10}
          style={styles.custombutton}
          textStyle={styles.buttontitle}
          paddingHorizontal={vh(40)}
          onPress={() => handleAddToBag(item, bagItems, dispatch, navigation)}
        />
      </View>
    </AppWrapper>
  );
};

export default Details;
