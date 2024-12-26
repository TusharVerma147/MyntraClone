import {
  View,
  Text,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React,{useState} from 'react';
import AppWrapper from '../../components/appWrapper';
import AppHeader from '../../components/appHeader';
import {Icons} from '../../assets';
import {vh} from '../../theme/dimensions';
import {colors} from '../../theme';
import {useRoute} from '@react-navigation/native';
import CustomButton from '../../components/customButton';
import {useDispatch, useSelector} from 'react-redux';
import {addToBag,} from '../../redux/slice/bagSlice';
import {
  addToWishlist,
  removeFromWishlist,
} from '../../redux/slice/wishListSlice';
import styles from './styles';

const Details = ({navigation}: any) => {

  const [isOpened, setIsOpened] = useState(false);


  const handleDescription = () => {
    setIsOpened(!isOpened);
  };
  const route = useRoute();
  const {item} = route.params;
  console.log('new item---->', item);

  const dispatch = useDispatch();

  const bagItems = useSelector((state: any) => state.bag.items);
  const wishlistItems = useSelector((state: any) => state.wishlist.items);

  const isInBag = bagItems.some((bagItem: any) => bagItem.id === item.id);
  const isInWishlist = wishlistItems.some(
    (wishlistItem: any) => wishlistItem.id === item.id,
  );

  const handleAddToBag = () => {
    if (isInBag) {
      //   dispatch(removeFromBag(item.id));
      navigation.navigate('Bag');
    } else {
      dispatch(addToBag(item));
    }
  };



  const handleAddToWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(item.id));
    } else {
      dispatch(addToWishlist(item));
    }
  };

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
        onPressRightIcon1={() => navigation.navigate('Wishlist')}
        onPressRightIcon2={() => navigation.navigate('Bag')}
      />

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
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
     
      </ScrollView>


      <View style={styles.footer}>
        <TouchableOpacity onPress={handleAddToWishlist}>
          <Image
            source={isInWishlist ? Icons.wishlistselected : Icons.wishlist}
            style={styles.wishlist}
          />
        </TouchableOpacity>
        <CustomButton
          title="Buy Now"
          icon={Icons.buynow}
          tintColor={colors.zeptored}
          borderColor={colors.zeptored}
          textColor={colors.zeptored}
          borderWidth={1}
          borderRadius={10}
          style={styles.custombutton}
          textStyle={styles.buttontitle}
          paddingHorizontal={vh(30)}
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
          paddingHorizontal={vh(30)}
          onPress={handleAddToBag}
        />
      </View>

    </AppWrapper>
  );
};

export default Details;
