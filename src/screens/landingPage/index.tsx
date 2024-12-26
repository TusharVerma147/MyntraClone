import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import AppWrapper from '../../components/appWrapper';
import {Images, Icons} from '../../assets';
import styles from './styles';
import strings from '../../utils/strings';
import BannerCard from '../../components/banner';
import { useNavigation } from '@react-navigation/native';

const LandingPage = () => {
  const navigation = useNavigation()

  const handlepress = () =>{
    navigation.navigate('BottomTab')
  }
  return (
    <AppWrapper>
      <Image source={Icons.splash_img} style={styles.splashicon} />
      <Text style={styles.select}>
        {strings.select} {strings.your} {strings.store}
      </Text>
     <BannerCard onPress={handlepress} imageSource={Images.banner3} />
     <BannerCard onPress={handlepress}  imageSource={Images.banner1} />
     <BannerCard onPress={handlepress} imageSource={Images.banner2} />
    </AppWrapper>
  );
};

export default LandingPage;
