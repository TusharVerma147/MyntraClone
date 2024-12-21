import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import AppWrapper from '../../components/appWrapper';
import {Images, Icons} from '../../assets';
import styles from './styles';
import strings from '../../utils/strings';
import BannerCard from '../../components/banner';

const LandingPage = () => {
  return (
    <AppWrapper>
      <Image source={Icons.splash_img} style={styles.splashicon} />
      <Text style={styles.select}>
        {strings.select} {strings.your} {strings.store}
      </Text>
     <BannerCard imageSource={Images.banner3} />
     <BannerCard imageSource={Images.banner1} />
     <BannerCard imageSource={Images.banner2} />
    </AppWrapper>
  );
};

export default LandingPage;
