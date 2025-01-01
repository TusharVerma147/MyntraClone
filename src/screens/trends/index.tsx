import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import React from 'react';
import AppHeader from '../../components/appHeader';
import AppWrapper from '../../components/appWrapper';
import {Icons,} from '../../assets';
import {vh} from '../../theme/dimensions';
import { colors } from '../../theme';
import TrendProducts from '../../components/trendProducts';
import { PyjamaTrouser } from '../../utils/mockdata';
import { handleWishlistPress,  } from '../../utils/common';
import styles from './styles';

const Trends: React.FC<{ navigation: any }> = ({ navigation }) => {

   const handleSearch =  () => {
      navigation.navigate('Search');  
   
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
        <TrendProducts heading='#Pyjama Joggers' data={PyjamaTrouser} navigation={navigation}/>
        <TrendProducts heading='#Pyjama Joggers' data={PyjamaTrouser} navigation={navigation}/>
      </ScrollView>
    </AppWrapper>
  );
};



export default Trends;
