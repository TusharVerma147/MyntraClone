import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer,  useNavigationContainerRef, } from '@react-navigation/native';
import Splash from '../screens/splash';
import LandingPage from '../screens/landingPage';
import LoginSign from '../screens/loginSignup';
import Login from '../screens/login';
import SignUp from '../screens/signup';
import { ScreenNames } from './screenNames';
import BottomTab from './bottomtab';




const Stack =createNativeStackNavigator();

const RootNavigator = () => {

  const navigationRef= useNavigationContainerRef();
  return (
    <NavigationContainer   ref={navigationRef}>
    <Stack.Navigator 
    screenOptions={{headerShown:false,  animation: 'fade',}}
    initialRouteName={ScreenNames.BottomTab}>
        <Stack.Screen name={ScreenNames.Splash}  component={Splash}/>
        <Stack.Screen name={ScreenNames.LandingPage}  component={LandingPage}/>
        <Stack.Screen name={ScreenNames.LoginSign}  component={LoginSign}/>
        <Stack.Screen name={ScreenNames.Login}  component={Login}/>
        <Stack.Screen name={ScreenNames.SignUp}  component={SignUp}/>

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