import React from 'react';
import {View,StatusBar} from 'react-native';
import Reel from '../../components/reel/reel';
import { styles } from './styles';
import { Icons } from '../../assets';
import { colors } from '../../theme';

const Minis = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={colors.black}/>
      <Reel  navigation={navigation}/>
    </View>
    // <AppWrapper >
    //   <AppHeader backgroundColor='black'/>
    //   <Reel/>
    // </AppWrapper>
  );
};

export default Minis;


