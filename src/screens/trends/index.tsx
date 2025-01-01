import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import AppHeader from '../../components/appHeader';
import AppWrapper from '../../components/appWrapper';
import {Icons, Images} from '../../assets';
import {SCREEN_WIDTH, vh} from '../../theme/dimensions';
import {colors} from '../../theme';
import TrendProducts from '../../components/trendProducts';
import { PyjamaTrouser } from '../../utils/mockdata';
import CategoryCard from '../../components/category';

const Trends: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <AppWrapper>
      <AppHeader
        rightIcon1={Icons.search}
        rightIcon2={Icons.wishlist}
        backgroundColor={Platform.OS === 'android' ? colors.white : 'none'}
      />
<View style={{justifyContent:'center',alignItems:'center',marginVertical:vh(10) }}>
  <Text style={{backgroundColor:colors.charcol,paddingVertical:vh(10), paddingHorizontal:vh(40), color:colors.white, fontSize:vh(15), fontWeight:'600',borderRadius:30 }}>Trends</Text>
  </View>
      <ScrollView>
        <TrendProducts heading='#Pyjama Joggers' data={PyjamaTrouser} navigation={navigation}/>
        <TrendProducts heading='#Pyjama Joggers' data={PyjamaTrouser} navigation={navigation}/>
      </ScrollView>
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  
});

export default Trends;
