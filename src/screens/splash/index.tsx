import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { Icons } from '../../assets';
import AppWrapper from '../../components/appWrapper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated, { Easing, withTiming, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import { CommonActions } from '@react-navigation/native';
import { checkLoginStatus, navigateIfLoggedIn } from '../../utils/common';


interface SplashProps {
  navigation: {
    dispatch: any;
  };
}

const Splash: React.FC<SplashProps> = ({ navigation }) => {
  const opacity = useSharedValue(1); 
  const scale = useSharedValue(1);   

  
  // useEffect(() => {
  //   console.log("Splash screen loaded");
   
  //   const handleNavigation = async () => {
  //     const isLoggedIn = await checkLoginStatus();
  //     if (isLoggedIn) {
  //       console.log("Navigating to BottomTab...");
  //       navigation.dispatch(
  //         CommonActions.reset({
  //           index: 0,
  //           routes: [{ name: 'BottomTab' }],
  //         })
  //       );
  //     } else {
  //       console.log("Navigating to Login...");
  //       navigation.dispatch(
  //         CommonActions.reset({
  //           index: 0,
  //           routes: [{ name: 'BottomTab' }],
  //         })
  //       );
  //     }
  //   };


  //   opacity.value = withTiming(0, { duration: 500, easing: Easing.ease }); 
  //   scale.value = withTiming(2, { duration: 800, easing: Easing.ease }); 

  //   const timer = setTimeout(handleNavigation, 800);
   

  //   return () => clearTimeout(timer); 
  // }, [navigation, opacity, scale]);


  useEffect(() => {
    const checkFirstLaunch = async () => {
      const isFirstLaunch = await AsyncStorage.getItem('isFirstLaunch');
      if (isFirstLaunch === null) {
        // First time launch
        await AsyncStorage.setItem('isFirstLaunch', 'false');
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'LandingPage' }],
          })
        );
      } else {
        // Not the first time, go to BottomTab
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'BottomTab' }],
          })
        );
      }
    };

    opacity.value = withTiming(0, { duration: 500, easing: Easing.ease }); 
    scale.value = withTiming(2, { duration: 800, easing: Easing.ease }); 

    const timer = setTimeout(checkFirstLaunch, 800);

    return () => clearTimeout(timer); 
  }, [navigation, opacity, scale]);

 
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value, 
      transform: [{ scale: scale.value }], 
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
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
