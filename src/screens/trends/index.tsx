import {
  View,
  Text,
  ScrollView,
  Platform,
} from 'react-native';
import React from 'react';
import AppHeader from '../../components/appHeader';
import AppWrapper from '../../components/appWrapper';
import {Icons,} from '../../assets';
import {vh} from '../../theme/dimensions';
import { colors } from '../../theme';
import TrendProducts from '../../components/trendProducts';
import { PyjamaTrouser, SloganTees, RelaxedFitJeans, OversizedHoodies, OversizedShirts } from '../../utils/mockdata';
import { handleWishlistPress,  } from '../../utils/common';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';


type NavigationProp = StackNavigationProp<any>;
const Trends = () => {

  const navigation = useNavigation<NavigationProp>();


  const handleSearch = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Search' }],
      })
    );
  };



  return (
    <AppWrapper>
      <AppHeader
        rightIcon1={Icons.search}
        rightIcon2={Icons.wishlist}
        backicon={Icons.back}
        backHeight={vh(20)}
        backWidth={vh(20)}
        backgroundColor={Platform.OS === 'android' ? colors.white : 'none'}
        onPressRightIcon2={()=>handleWishlistPress}
        onPressRightIcon1={handleSearch}
      />
      <ScrollView>
      <View style={styles.trendsView}>
  <Text style={styles.trendsText}>Trends</Text>
  </View>
       <TrendProducts heading='#OversizedHoodies ' data={OversizedHoodies } navigation={navigation}/>
        <TrendProducts heading='#PyjamaJoggers' data={PyjamaTrouser} navigation={navigation}/>
        <TrendProducts heading='#SloganTees' data={SloganTees} navigation={navigation}/>
        <TrendProducts heading='#RelaxedFitJeans' data={RelaxedFitJeans} navigation={navigation}/>
        <TrendProducts heading='#OversizedShirts' data={OversizedShirts} navigation={navigation}/>
      </ScrollView>
    </AppWrapper>
  );
};



export default Trends;
