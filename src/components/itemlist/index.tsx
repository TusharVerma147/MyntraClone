import React from 'react';
import {FlatList,TouchableOpacity,Image,Text, View,ImageSourcePropType,} from 'react-native';
import {Icons} from '../../assets';
import styles from './styles';
import CustomButton from '../customButton';
import {useDispatch} from 'react-redux';
import {removeFromWishlist,} from '../../redux/slice/wishListSlice';
import {addToBag} from '../../redux/slice/bagSlice';
import { colors } from '../../theme';
import {handleAddToWishlist, handleAddToBag} from '../../utils/common';
import { NavigationProp } from '@react-navigation/native';

interface CategoryItem {
  id: string;
  image: any;
  rating: string;
  reviews: string;
  brand: string;
  type: string;
  Price: string;
  DiscountedPrice: string;
  off: string;
  description: string;
}

interface ItemListProps {
  data: CategoryItem[];
  onPress: (item: CategoryItem) => void;
  numColumns?: number;
  showWishlistIcon?: boolean;
  wishlistItems: any[];
  icon?: ImageSourcePropType;
  showcustombutton?: boolean;
  borderWidth?: number;
  showcrossicon?: boolean;
  navigation: NavigationProp<any>;
}

const ItemList: React.FC<ItemListProps> = ({
  data,
  onPress,
  wishlistItems,
  numColumns = 2,
  showWishlistIcon = false,
  showcustombutton = false,
  showcrossicon = false,
  borderWidth,
  navigation,
}) => {
  const dispatch = useDispatch();

  const isInWishlist = (item: CategoryItem) => {
    return wishlistItems.some(
      (wishlistItem: any) => wishlistItem.id === item.id,
    );
  };


  // const handleMoveToBag = (item: CategoryItem) => {
  //   dispatch(removeFromWishlist(item.id));
  //   dispatch(addToBag(item));
   
  // };

  const handleMoveToBag = async (item: CategoryItem) => {
    await handleAddToWishlist(item, wishlistItems, dispatch);
    await handleAddToBag(item, [], dispatch, navigation); // Pass an empty array for bagItems or the actual array if available
  };

  

  const renderItem = ({item}: {item: CategoryItem}) => (
    <View
      style={[
        styles.itemContainer,
        borderWidth !== undefined && {borderWidth},
      ]}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => onPress(item)} style={styles.itemButton}>
        <View>
          <Image
            source={item.image}
            style={styles.image}
            resizeMode="contain"
          />
          {showcrossicon && (
            <TouchableOpacity
              style={styles.crossview}
              onPress={() => handleAddToWishlist(item, wishlistItems, dispatch)}>
              <Image source={Icons.cross} style={styles.cross} />
            </TouchableOpacity>
          )}
          <View style={styles.ratingview}>
            <Text>
              {item.rating} <Image source={Icons.star} style={styles.star} />
            </Text>
            <Text style={styles.reviewtext}>{item.reviews}</Text>
          </View>
        </View>
        <View style={styles.brandview}>
          <Text style={styles.name}>{item.brand}</Text>
          {showWishlistIcon && (
            <TouchableOpacity
              onPress={() =>
                handleAddToWishlist(item, wishlistItems, dispatch)
              }>
              <Image
                source={
                  isInWishlist(item) ? Icons.wishlistselected : Icons.wishlist
                }
                style={styles.wishlist}
              />
            </TouchableOpacity>
          )}
        </View>

        <Text style={styles.type}>{item.type}</Text>
        <View style={styles.priceview}>
          <Text style={styles.price}>{item.Price}</Text>
          <Text style={styles.discount}>{item.DiscountedPrice}</Text>
          <Text style={styles.off}>{item.off}</Text>
        </View>
      </TouchableOpacity>

      {showcustombutton && (
        <CustomButton
          title="Move to Bag"
          onPress={() => handleMoveToBag(item)}
          borderWidth={1}
          borderColor={colors.platinum}
          borderRadius={5}
          style={styles.custombutton}
          textStyle={styles.buttontext}
          textColor={colors.zeptored}
        />
      )}
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={numColumns}
      columnWrapperStyle={styles.row}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ItemList;
