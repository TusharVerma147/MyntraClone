import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import { colors } from '../../theme';
import styles from './styles';

type CategoryCardProps = {
  text: string;
  image: any; 
  onPress?: () => void;
  isSelected: boolean;
  onSelect: () => void;
};

const CategoryCard: React.FC<CategoryCardProps> = ({text, image, isSelected, onSelect}) => {

  return (
    <TouchableOpacity
    style={[
      styles.cardContainer,
      {backgroundColor: isSelected ? colors.charcol : colors.white}, 
    ]}
    activeOpacity={0.8}
    onPress={onSelect}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
      <Text style={[styles.text, {color: isSelected ? colors.white : colors.charcol}]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};



export default CategoryCard;
