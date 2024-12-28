import React, {useEffect, useState} from 'react';
import {View,TextInput, Animated,StyleSheet,Easing,TouchableOpacity, Image,TextInputProps} from 'react-native';
import {Icons} from '../../assets';
import {colors} from '../../theme';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

interface AnimatedTextInputProps extends TextInputProps {
  onCameraPress?: () => void;
  onMicPress?: () => void;
}

const AnimatedTextInput: React.FC<AnimatedTextInputProps> = ({
  onCameraPress,
  onMicPress,
  ...textInputProps
}) => {
  const placeholders = [
    'Search for Casual Coords Women',
    'Explore Trending Styles',
    'Find Your Perfect Outfit',
    'Shop Exclusive Deals',
  ];

  const [currentPlaceholder, setCurrentPlaceholder] = useState<string>(
    placeholders[0],
  );
  const [index, setIndex] = useState<number>(0);
  const fadeAnim = new Animated.Value(1);
  const navigation = useNavigation<StackNavigationProp<any>>();

  const changePlaceholder = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      setIndex(prevIndex => (prevIndex + 1) % placeholders.length);
      setCurrentPlaceholder(placeholders[(index + 1) % placeholders.length]);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    });
  };

  useEffect(() => {
    const interval = setInterval(changePlaceholder, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const gotoSearchPage = () => {
    navigation.navigate('Search');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={gotoSearchPage}>
        <Image source={Icons.search} style={styles.rightIcon} />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder={currentPlaceholder}
        placeholderTextColor={colors.textinput}
        {...textInputProps}
        onFocus={gotoSearchPage}
      />
      <TouchableOpacity onPress={onCameraPress}>
        <Image source={Icons.camera} style={styles.rightIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onMicPress}>
        <Image source={Icons.mic} style={styles.rightIcon} />
      </TouchableOpacity>
    </View>
  );
};



export default AnimatedTextInput;
