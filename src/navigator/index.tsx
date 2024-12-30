import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer,  useNavigationContainerRef, } from '@react-navigation/native';
import Splash from '../screens/splash';
import LandingPage from '../screens/landingPage';
import LoginSign from '../screens/loginSignup';
import Login from '../screens/login';
import SignUp from '../screens/signup';
import Items from '../screens/items';
import Details from '../screens/details';
import Bag from '../screens/bag';
import Wishlist from '../screens/wishlist';
import CouponScreen from '../screens/couponScreen';
import Search from '../screens/search';
import { ScreenNames } from './screenNames';

import BottomTab from './bottomtab';
import Address from '../screens/address';





const Stack =createNativeStackNavigator();

const RootNavigator = () => {

  const navigationRef= useNavigationContainerRef();
  return (
    <NavigationContainer   ref={navigationRef}>
    <Stack.Navigator 
    screenOptions={{headerShown:false,  animation: 'fade',}}
    initialRouteName={ScreenNames.Splash}>
        <Stack.Screen name={ScreenNames.Splash}  component={Splash}/>
        <Stack.Screen name={ScreenNames.LandingPage}  component={LandingPage}/>
        <Stack.Screen name={ScreenNames.LoginSign}  component={LoginSign}/>
        <Stack.Screen name={ScreenNames.Login}  component={Login}/>
        <Stack.Screen name={ScreenNames.SignUp}  component={SignUp}/>
        <Stack.Screen name={ScreenNames.Items}  component={Items}/>
        <Stack.Screen name={ScreenNames.Details}  component={Details}/>
        <Stack.Screen name={ScreenNames.Bag}  component={Bag}/>
        <Stack.Screen name={ScreenNames.Wishlist}  component={Wishlist}/>
        <Stack.Screen name={ScreenNames.CouponScreen }  component={CouponScreen}/>
        <Stack.Screen name={ScreenNames.Address }  component={Address}/>
        <Stack.Screen name={ScreenNames.Search }  component={Search}/>

        <Stack.Screen
            component={BottomTab}
            name={ScreenNames.BottomTab}
            options={{headerShown: false}}
          />

    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator;