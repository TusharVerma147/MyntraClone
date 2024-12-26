import React,{useState} from 'react';
import { useRoute } from '@react-navigation/native';
import AppWrapper from '../../components/appWrapper';
import AppHeader from '../../components/appHeader';
import { Icons } from '../../assets';
import { colors } from '../../theme';
import { shirts, jeans } from '../../utils/mockdata';
import { SCREEN_WIDTH, vh } from '../../theme/dimensions';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector, } from 'react-redux';
import ItemList from '../../components/itemlist';
import { StyleSheet, TouchableOpacity, Image, View, Text } from 'react-native';

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

const Items = () => {
  const route = useRoute();
  const { categoryTitle }: any = route.params;
  const navigation = useNavigation<NavigationProp>();
 

  const wishlistItems = useSelector((state: any) => state.wishlist.items);
  console.log('--wishlist',wishlistItems )



  const newCategoryTitle = categoryTitle.toLowerCase();

  let categoryData: any = [];
  if (newCategoryTitle === 'jeans') {
    categoryData = jeans;
  } else  {
    categoryData = shirts;
  }

  const gotoDetail = (item: CategoryItem) => {
    console.log('item--->', item);
    navigation.navigate('Details', { item });
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
        title={categoryTitle}
        titleColor={colors.charcol}
        rightIcon1={Icons.wishlist}
        rightIcon2={Icons.bag}
        titleSize={vh(15)}
        subtitle={`${categoryData.length} items`}
        onPressRightIcon1={() => navigation.navigate('Wishlist')}
        onPressRightIcon2={() => navigation.navigate('Bag')}
      />

      <ItemList
        data={categoryData}
        onPress={gotoDetail}
        showWishlistIcon={true}
    wishlistItems={wishlistItems}  
      />
      
    </AppWrapper>
  );
};

export default Items;

