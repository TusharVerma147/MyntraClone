import React from 'react';
import {TouchableOpacity, Text, Image,ImageSourcePropType, ViewStyle, TextStyle, StyleProp } from 'react-native';
import { vh } from '../../theme/dimensions';
import styles from './styles';

interface CustomButtonProps {
  onPress: () => void; 
  title: string;
  icon?: ImageSourcePropType; 
  style?: StyleProp<ViewStyle | TextStyle>;
  textStyle?: TextStyle; 
  borderRadius?: number; 
  textColor?: string; 
  backgroundColor?: string; 
  paddingHorizontal?: number; 
  borderColor?:string;
  borderWidth?:number;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  icon,
  style,
  textStyle,
  borderRadius,
  textColor,
  backgroundColor,
  paddingHorizontal=vh(15),
  borderColor,
  borderWidth
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
        borderRadius !== undefined && { borderRadius },
        borderColor !== undefined && { borderColor },
        borderWidth !== undefined && { borderWidth },
        backgroundColor !== undefined && { backgroundColor },
        paddingHorizontal !== undefined && { paddingHorizontal }
      ]}
      activeOpacity={0.8}
      onPress={onPress}>
      {icon && <Image source={icon} style={styles.icon} />}
      <Text
        style={[styles.buttonText, textStyle, textColor && {color: textColor}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};



export default CustomButton;