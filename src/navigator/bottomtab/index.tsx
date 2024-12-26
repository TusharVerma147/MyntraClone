// import React from 'react';
// import {Image, Text, View} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {Icons} from '../../assets';
// import colors from '../../theme/colors';
// import {ScreenNames} from '../screenNames';
// import Home from '../../screens/home';
// import Bag from '../../screens/bag';
// import Minis from '../../screens/minis';
// import Trends from '../../screens/trends';
// import styles from './styles';
// import {vh} from '../../theme/dimensions';

// const Tab = createBottomTabNavigator();

// const BottomTab = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         tabBarIcon: ({focused}) => {
//           let iconName;

//           switch (route.name) {
//             case ScreenNames.Home:
//               iconName = Icons.splash_img;
//               break;
//             case ScreenNames.Minis:
//               iconName = Icons.play;
//               break;
//             case ScreenNames.Trends:
//               iconName = Icons.hash;
//               break;
//             case ScreenNames.Bag:
//               iconName = Icons.bag;
//               break;
//             default:
//               iconName = Icons.splash_img;
//               break;
//           }
//           return (
//             <View
//               style={{
//                 borderTopWidth: focused ? 2 : 0,
//                 width: 120,
//                 alignItems: 'center',
//                 paddingBottom: vh(5),
//                 borderColor:
//                   iconName == Icons.splash_img
//                     ? colors.zeptored
//                     : focused
//                     ? colors.green
//                     : colors.charcol,
                    
//               }}>
            
//                 {/* <View style={
//                     {height: focused? 2: 0, backgroundColor:'red', width: 120, elevation: 50,
//                         shadowColor: '#52006A',

//                 }}></View> */}
//               <Image
//                 source={iconName}
//                 style={{
//                   width: 30,
//                   height: 30,
//                   resizeMode: 'contain',
//                   paddingTop: vh(5),
//                   tintColor:
//                     iconName == Icons.splash_img
//                       ? 'none'
//                       : focused
//                       ? colors.green
//                       : colors.charcol,
//                 }}
//               />
//          </View>
 
//           );
//         },

//         tabBarLabel: ({focused}) => {
//           let labelText: string;
//           switch (route.name) {
//             case ScreenNames.Home:
//               labelText = 'Home';
//               break;
//             case ScreenNames.Minis:
//               labelText = 'Minis';
//               break;
//             case ScreenNames.Trends:
//               labelText = 'Trends';
//               break;
//             case ScreenNames.Bag:
//               labelText = 'Bag';
//               break;
//             default:
//               labelText = 'Tab';
//               break;
//           }

//           return (
//             <Text
//               style={{
//                 fontSize: 12,
//                 color: focused
//                   ? labelText === 'Home'
//                     ? colors.zeptored
//                     : colors.green
//                   : colors.charcol,
//                 fontWeight: 'bold' as 'bold',
//               }}>
//               {labelText}
//             </Text>
//           );
//         },
//         tabBarStyle: {
//           height: 80,
//         },
//       })}>
//       <Tab.Screen
//         component={Home}
//         name={ScreenNames.Home}
//         options={{headerShown: false}}
//       />
//       <Tab.Screen
//         component={Minis}
//         name={ScreenNames.Minis}
//         options={{headerShown: false}}
//       />
//       <Tab.Screen
//         component={Trends}
//         name={ScreenNames.Trends}
//         options={{headerShown: false}}
//       />
//       <Tab.Screen
//         component={Bag}
//         name={ScreenNames.Bag}
//         options={{
//           headerShown: false,
//           tabBarStyle: {display: 'none'},
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default BottomTab;


import React from 'react';
import {Image, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icons} from '../../assets';
import colors from '../../theme/colors';
import {ScreenNames} from '../screenNames';
import Home from '../../screens/home';
import Bag from '../../screens/bag';
import Minis from '../../screens/minis';
import Trends from '../../screens/trends';
import styles from './styles';
import {vh} from '../../theme/dimensions';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;

          switch (route.name) {
            case ScreenNames.Home:
              iconName = Icons.splash_img;
              break;
            case ScreenNames.Minis:
              iconName = Icons.play;
              break;
            case ScreenNames.Trends:
              iconName = Icons.hash;
              break;
            case ScreenNames.Bag:
              iconName = Icons.bag;
              break;
            default:
              iconName = Icons.splash_img;
              break;
          }
          return (
            <View
              style={{
                borderTopWidth: focused ? 2 : 0,
                width: 120,
                alignItems: 'center',
                paddingBottom: vh(5),
                borderColor:
                  iconName == Icons.splash_img
                    ? colors.zeptored
                    : focused
                    ? colors.green
                    : colors.charcol,
                    // elevation: focused ? 10 : 0,
                    // shadowColor: focused ? colors.zeptored : 'transparent',
                    // shadowOffset: {width: 0, height: 10}, 
                    // shadowOpacity: focused ? 1 : 0, 
                    // shadowRadius: 5,
              }}>
              <Image
                source={iconName}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'contain',
                  paddingTop: vh(5),
                  tintColor:
                    iconName == Icons.splash_img
                      ? 'none'
                      : focused
                      ? colors.green
                      : colors.charcol,
                }}
              />
            </View>
          );
        },

        tabBarLabel: ({focused}) => {
          let labelText: string;
          switch (route.name) {
            case ScreenNames.Home:
              labelText = 'Home';
              break;
            case ScreenNames.Minis:
              labelText = 'Minis';
              break;
            case ScreenNames.Trends:
              labelText = 'Trends';
              break;
            case ScreenNames.Bag:
              labelText = 'Bag';
              break;
            default:
              labelText = 'Tab';
              break;
          }

          return (
            <Text
              style={{
                fontSize: 12,
                color: focused
                  ? labelText === 'Home'
                    ? colors.zeptored
                    : colors.green
                  : colors.charcol,
                fontWeight: 'bold' as 'bold',
              }}>
              {labelText}
            </Text>
          );
        },
        tabBarStyle: {
          height: 65,
        },
      })}>
      <Tab.Screen
        component={Home}
        name={ScreenNames.Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        component={Minis}
        name={ScreenNames.Minis}
        options={{headerShown: false}}
      />
      <Tab.Screen
        component={Trends}
        name={ScreenNames.Trends}
        options={{headerShown: false}}
      />
      <Tab.Screen
        component={Bag}
        name={ScreenNames.Bag}
        options={{
          headerShown: false,
          tabBarStyle: {display: 'none'},
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;