import React from 'react';
import {View, FlatList, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import styles from './styles';

type Item = {
  image: any;
  title?: string;
  subtitle?: string;
};

type NavigationProp = StackNavigationProp<any>;
type BrandListProps = {
  data: Item[];
};

const BrandList: React.FC<BrandListProps> = ({data}) => {
  const navigation = useNavigation<NavigationProp>();

  const gotoItem = (item: Item) => {
    navigation.navigate('Items', {categoryTitle: 'Products'});
  };

  const renderItem = ({item}: {item: Item}) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => gotoItem(item)}>
      <Image source={item.image} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default BrandList;
