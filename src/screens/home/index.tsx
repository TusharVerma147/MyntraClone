import {View, Text, Image, StatusBar} from 'react-native';
import React from 'react';
import AppWrapper from '../../components/appWrapper';
import {colors} from '../../theme';
import {Icons} from '../../assets';
import {vh, vw} from '../../theme/dimensions';
import ImageSlider from '../../components/bannerSlide';
import styles from './styles';
import {fashion} from '../../utils/mockdata';

const Home = () => {
  return (
    <AppWrapper backgroundColor={colors.white}>
      <StatusBar backgroundColor={colors.white} />
      <View style={styles.header}>
        <View style={styles.row}>
          <View style={styles.myntraview}>
            <Text style={styles.myntra}>Myntra</Text>
            <Image source={Icons.bottom} style={styles.bottom} />
          </View>
          <Image source={Icons.crown} style={styles.crown} />
          <View style={{}}>
            <Text>BECOME</Text>
            <View style={styles.row}>
              <Text style={styles.inside}>INSIDER</Text>
              <Image source={Icons.forward} style={styles.forward} />
            </View>
          </View>
        </View>
        <View style={styles.rightview}>
          <Image source={Icons.bell} style={styles.righticon} />
          <Image source={Icons.wishlist} style={styles.righticon} />
          <Image source={Icons.userpro} style={styles.righticon} />
        </View>
      </View>
      <ImageSlider images={fashion} />
    </AppWrapper>
  );
};

// const AppHeader = () =>{

// }

export default Home;
