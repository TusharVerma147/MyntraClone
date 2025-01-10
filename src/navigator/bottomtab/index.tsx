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
import {vh} from '../../theme/dimensions';
import {useSelector} from 'react-redux';
import styles from './styles';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const bagItems = useSelector((state: any) => state.bag.items);
  const totalQuantity = bagItems.reduce(
    (total: number, item: any) => total + item.quantity,
    0,
  );

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
              style={[
                styles.firsticon,
                {borderTopWidth: focused ? 2 : 0},
                {
                  borderColor:
                    iconName == Icons.splash_img
                      ? colors.zeptored
                      : focused
                      ? colors.green
                      : colors.charcol,
                },
              ]}>
              <Image
                source={iconName}
                style={[
                  styles.iconImg,
                  {
                    tintColor:
                      iconName == Icons.splash_img
                        ? 'none'
                        : focused
                        ? colors.green
                        : colors.charcol,
                  },
                ]}
              />

              {route.name === ScreenNames.Bag && totalQuantity > 0 && (
                <View style={styles.countview}>
                  <Text style={styles.countText}>
                    {totalQuantity > 0 ? totalQuantity : undefined}
                  </Text>
                </View>
              )}
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
              style={[
                styles.iconText,

                {
                  color: focused
                    ? labelText === 'Home'
                      ? colors.zeptored
                      : colors.green
                    : colors.charcol,
                },
              ]}>
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
        options={{
          headerShown: false,
          tabBarStyle: {display: 'none'},
        }}
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
