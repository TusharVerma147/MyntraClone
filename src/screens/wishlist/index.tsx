import React from 'react';
import { View, Text } from 'react-native';
import AppWrapper from '../../components/appWrapper';
import AppHeader from '../../components/appHeader';
import { Icons } from '../../assets';
import { vh } from '../../theme/dimensions';
import { colors } from '../../theme';
import { useSelector } from 'react-redux';
import ItemList from '../../components/itemlist';  
import { useNavigation, CommonActions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';
import CustomButton from '../../components/customButton';

type NavigationProp = StackNavigationProp<any>;



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
  

const Wishlist = () => {

  const navigation = useNavigation<NavigationProp>();

  const wishlistItems = useSelector((state: any) => state.wishlist.items);

  const bagItems = useSelector((state: any) => state.bag.items);

  const totalQuantity = bagItems.reduce((total: number, item: any) => total + item.quantity, 0);


  const gotoDetail = (item: CategoryItem) => {
    navigation.navigate('Details', { item });
  };

  const handleShopNow = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'BottomTab', params: { screen: 'Home' } }],
      })
    );
  };

  const handleBag = () =>{
    navigation.navigate('Bag')
  }

  const wishlistCount = wishlistItems.length;

  return (
    <AppWrapper backgroundColor={colors.white}>
      <AppHeader
        backicon={Icons.back}
        backColor={colors.charcol}
        backHeight={vh(19)}
        backWidth={vh(19)}
        marginLeft={10}
        title="Wishlist"
        titleColor={colors.charcol}
        rightIcon2={wishlistItems.length === 0 ? null : Icons.bag}
        titleSize={vh(15)}
        subtitle={`${wishlistCount} ${wishlistCount === 1 ? 'item' : 'items'}`}
        onPressRightIcon2={handleBag}
        badgeCount={totalQuantity > 0 ? totalQuantity : undefined} 
      />

      
      {wishlistItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyMessage}>Your wishlist is empty</Text>
          <Text style={styles.emptysubMessage}>
          Save items that you like in your wishlist. Review them anytime and easily move them to the bag.
          </Text>
          <CustomButton title='SHOP NOW' borderWidth={1} borderRadius={5} borderColor={colors.zeptored} textColor={colors.zeptored} onPress={handleShopNow} />
        </View>
      ) : (
        <ItemList
          data={wishlistItems}  
          onPress={gotoDetail} 
          wishlistItems={wishlistItems}  
          showWishlistIcon={false}  
          showcustombutton={true}
           showcrossicon={true}
           navigation={navigation}
        />
      )}
    </AppWrapper>
  );
};

export default Wishlist;
