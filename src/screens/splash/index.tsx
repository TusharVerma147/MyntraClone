import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { Icons } from '../../assets';
import AppWrapper from '../../components/appWrapper';
import Animated, { Easing, withTiming, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import styles from './styles';


interface SplashProps {
  navigation: {
    replace: (screen: string) => void;
  };
}

const Splash: React.FC<SplashProps> = ({ navigation }) => {
  const opacity = useSharedValue(1); 
  const scale = useSharedValue(1);   

  useEffect(() => {
    opacity.value = withTiming(0, { duration: 500, easing: Easing.ease }); 
    scale.value = withTiming(2, { duration: 800, easing: Easing.ease }); 

    const timer = setTimeout(() => {
      navigation.replace('LandingPage')
    }, 800);

    return () => clearTimeout(timer); 
  }, [navigation, opacity, scale]);


  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value, 
      transform: [{ scale: scale.value }], 
      alignItems:'center',
      flex:1,
      justifyContent:'center'
    };
  });

  return (
    <AppWrapper>
      <Animated.View style={animatedStyle}>
        <Image style={styles.splashicon} source={Icons.splash_img} />
      </Animated.View>
    </AppWrapper>
  );
};

export default Splash;
