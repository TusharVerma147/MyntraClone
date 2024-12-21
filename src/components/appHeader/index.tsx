import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  ImageSourcePropType,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../theme/colors';
import styles from './styles';
import { Icons } from '../../assets';
import { vh, vw, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../theme/dimensions';

interface AppHeaderProps {
  title?: string;
  backgroundColor?: string;
  marginLeft?:number,
  titleColor?: string;
  subtitle?: string;
  subtitleColor?: string;
  titleSize?: number;
  backWidth?: number;
  backHeight?: number;
  backColor?: string;
  backicon?:ImageSourcePropType;
  rightIcon1?: ImageSourcePropType;
  rightIcon2?: ImageSourcePropType;
  rightWidth?: number;
  rightHeight?: number;
}

const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  titleColor = colors.grey,
  subtitle,
  subtitleColor = colors.textGrey,
  titleSize = vh(19),
  marginLeft=vh(15),
  backWidth,
  backHeight ,
  backColor,
  backicon,
  rightIcon1,
  rightIcon2,
  rightHeight=vh(25),
  rightWidth=vh(25)
}) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.header]}>
      <View style={styles.titleContainer}>
 
          <TouchableOpacity onPress={handleGoBack} style={styles.backContainer}>
            <Image
              source={backicon}
              style={{
                height: backHeight,
                width: backWidth,
                tintColor: backColor,
                marginLeft:marginLeft
              }}
            />
          </TouchableOpacity>
        
        <View>
          {title && (
            <Text
              style={[
                styles.categoryText,
                { color: titleColor, fontSize: titleSize },
              ]}>
              {title}
            </Text>
          )}
          {subtitle && (
            <Text style={[styles.subtitleText, { color: subtitleColor }]}>
              {subtitle}
            </Text>
          )}
        </View>
      </View>

      <View style={styles.rightIconsContainer}>
        {rightIcon1 && (
          <TouchableOpacity style={[styles.rightIcon]}>
            <Image source={rightIcon1} style={[styles.icon,{height:rightHeight,width:rightWidth}]} />
          </TouchableOpacity>
        )}
        {rightIcon2 && (
          <TouchableOpacity style={[styles.rightIcon]}>
            <Image source={rightIcon2} style={[styles.icon,{height:rightHeight,width:rightWidth}]} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AppHeader;
