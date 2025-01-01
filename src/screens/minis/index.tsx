import React,{useState} from 'react';
import {View,StatusBar} from 'react-native';
import Reel from '../../components/reel/reel';
import { styles } from './styles';
import { useFocusEffect } from '@react-navigation/native';
import { colors } from '../../theme';

const Minis: React.FC<{ navigation: any }> = ({ navigation }) => {

  const [isScreenFocused, setIsScreenFocused] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      setIsScreenFocused(true);
      return () => setIsScreenFocused(false);
    }, [])
  );
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={colors.black}/>
      <Reel navigation={navigation} isScreenFocused={isScreenFocused} />
    </View>
    // <AppWrapper >
    //   <AppHeader backgroundColor='black'/>
    //   <Reel/>
    // </AppWrapper>
  );
};

export default Minis;


