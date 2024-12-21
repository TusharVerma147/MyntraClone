import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import AppWrapper from '../../components/appWrapper';
import AppHeader from '../../components/appHeader';
import {colors} from '../../theme';
import {vh, vw} from '../../theme/dimensions';
import styles from './styles';
import {Icons} from '../../assets';
import CustomButton from '../../components/customButton';
import strings from '../../utils/strings';

const LoginSign = () => {
  return (
    <AppWrapper>
      <AppHeader title={strings.profile} backicon={Icons.back} backColor={colors.grey} backHeight={19} backWidth={19} />
      <View>
        <View style={styles.topview}></View>
        <View style={styles.lowerview}>
          <View
            style={styles.profileview}>
            <Image source={Icons.user} style={styles.profile} />
          </View>
          <View style={styles.loginview}>
            <CustomButton
              title={strings.Log}
              backgroundColor={colors.zeptored}
              textColor={colors.white}
              borderRadius={5}
              paddingHorizontal={vh(60)}   
            />
          </View>
        </View>
      </View>
    </AppWrapper>
  );
};

export default LoginSign;
