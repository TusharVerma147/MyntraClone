import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import colors from '../../theme/colors';
import styles from './styles';
import {vh} from '../../theme/dimensions';

interface AppHeaderProps {
  title?: string;
  backgroundColor?: string;
  marginLeft?: number;
  marginHorizontal?: number;
  titleColor?: string;
  subtitle?: string;
  subtitleColor?: string;
  titleSize?: number;
  backWidth?: number;
  backHeight?: number;
  leftWidth?: number;
  leftHeight?: number;
  backColor?: string;
  backicon?: ImageSourcePropType;
  iconleft?: ImageSourcePropType;
  rightIcon1?: ImageSourcePropType;
  rightIcon2?: ImageSourcePropType;
  rightWidth?: number;
  rightHeight?: number;
  titletop?: number;
  onPressRightIcon1?: () => void;
  onPressRightIcon2?: () => void;
  badgeCount?: number; 
}

const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  titleColor = colors.grey,
  backgroundColor,
  subtitle,
  subtitleColor = colors.textGrey,
  titleSize = vh(19),
  marginLeft = vh(15),
  marginHorizontal = vh(5),
  backWidth,
  backHeight,
  leftWidth,
  leftHeight,
  backColor,
  backicon,
  rightIcon1,
  rightIcon2,
  iconleft,
  titletop,
  rightHeight = vh(25),
  rightWidth = vh(25),
  onPressRightIcon1,
  onPressRightIcon2,
  badgeCount, 
}) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.header, {backgroundColor}]}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backContainer}>
          <Image
            source={backicon}
            style={{
              height: backHeight,
              width: backWidth,
              tintColor: backColor,
              marginLeft: marginLeft,
            }}
          />
        </TouchableOpacity>
        {iconleft && (
          <Image
            source={iconleft}
            style={{
              height: leftHeight,
              width: leftWidth,
              marginHorizontal: marginHorizontal,
            }}
          />
        )}

        <View>
          {title && (
            <Text
              style={[
                styles.categoryText,
                {color: titleColor, fontSize: titleSize, marginTop: titletop},
              ]}>
              {title}
            </Text>
          )}
          {subtitle && (
            <Text style={[styles.subtitleText, {color: subtitleColor}]}>
              {subtitle}
            </Text>
          )}
        </View>
      </View>

      <View style={styles.rightIconsContainer}>
        {rightIcon1 && (
          <TouchableOpacity
            style={[styles.rightIcon]}
            onPress={onPressRightIcon1}>
            <Image
              source={rightIcon1}
              style={[styles.icon, {height: rightHeight, width: rightWidth}]}
            />
          </TouchableOpacity>
        )}
        {rightIcon2 && (
          <>
            <TouchableOpacity
              style={[styles.rightIcon]}
              onPress={onPressRightIcon2}>
              <Image
                source={rightIcon2}
                style={[styles.icon, {height: rightHeight, width: rightWidth}]}
              />
            </TouchableOpacity>
            {badgeCount && (
              <View
                style={styles.count}>
                <Text style={styles.countText}>{badgeCount}</Text>
              </View>
            )}
          </>
        )}
      </View>
    </View>
  );
};

export default AppHeader;
