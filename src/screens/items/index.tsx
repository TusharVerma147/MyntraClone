import React from 'react';
import { useRoute } from '@react-navigation/native';
import AppWrapper from '../../components/appWrapper';
import AppHeader from '../../components/appHeader';
import { Icons } from '../../assets';
import { colors } from '../../theme';
import { shirts, jeans, shoes, watches, products, OversizedHoodies, RelaxedFitJeans, SloganTees, PyjamaTrouser, OversizedShirts, kurtas, tops, sarees, makeup, skincare, fragrances, grooming,appliances, decor, bedlinen, cookware, dinnerware, storage } from '../../utils/mockdata';
import { vh } from '../../theme/dimensions';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import ItemList from '../../components/itemlist';
import { handleWishlistPress } from '../../utils/common';
import getAllItems from '../../utils/getAllItems';

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
  const bagItems = useSelector((state: any) => state.bag.items);
  const totalQuantity = bagItems.reduce((total: number, item: any) => total + item.quantity, 0);


  const categoryDataMap: Record<string, any[]> = {
    jeans,
    shoes,
    shirts,
    watches,
    products,
    kurtas,
    tops,
    sarees,
    makeup,
    skincare,
    fragrances,
    grooming,
    OversizedShirts,
    OversizedHoodies,
    RelaxedFitJeans,
    SloganTees,
    PyjamaTrouser,
    appliances,
    decor,
    bedlinen,
    cookware,
    dinnerware,
    storage,
  };


  
  let categoryData: any[] = [];

  if (categoryTitle.toLowerCase() === 'products') {
    categoryData = products;
  } else if (categoryDataMap[categoryTitle.toLowerCase()]) {
    categoryData = categoryDataMap[categoryTitle.toLowerCase()];
  } else if (categoryTitle && categoryTitle.trim().length > 0) {
    // const allCategories = [
    //   ...shirts, ...jeans, ...shoes, ...watches, ...products,
    //   ...OversizedShirts, ...OversizedHoodies, ...RelaxedFitJeans, ...SloganTees, ...PyjamaTrouser, ...kurtas, ...makeup, ...skincare, ...fragrances, ...grooming,...appliances,...decor,...bedlinen,...cookware,...dinnerware,...storage,...sarees,...tops
    // ];
    const allCategories = getAllItems();
    categoryData = allCategories.filter(item =>
      item.brand.toLowerCase().includes(categoryTitle.toLowerCase()) ||
      item.type.toLowerCase().includes(categoryTitle.toLowerCase())
    );
  }

  const goToWishlisht = () => {
    handleWishlistPress(navigation);
  }

  const gotoDetail = (item: CategoryItem) => {
    navigation.navigate('Details', { item });
  };

  const gotoBag = () => {
    navigation.navigate('Bag');
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
        title={categoryTitle || 'All Items'}
        titleColor={colors.charcol}
        rightIcon1={Icons.wishlist}
        rightIcon2={Icons.bag}
        titleSize={vh(15)}
        subtitle={`${categoryData.length} items`}
        onPressRightIcon1={goToWishlisht}
        onPressRightIcon2={gotoBag}
        badgeCount={totalQuantity > 0 ? totalQuantity : undefined} 
      />

      <ItemList
        data={categoryData}
        onPress={gotoDetail}
        showWishlistIcon={true}
        wishlistItems={wishlistItems}
        navigation={navigation}
      />
    </AppWrapper>
  );
};

export default Items;
