import React from 'react';
import { TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import styles from './styles';


interface BannerCardProps {
  imageSource: ImageSourcePropType;
  onPress: () => void;
}

const BannerCard: React.FC<BannerCardProps> = ({ imageSource, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Image
        source={imageSource}
        style={styles.banner}
      />
    </TouchableOpacity>
  );
};

export default BannerCard;
