import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {vh, SCREEN_WIDTH, vw} from '../../theme/dimensions';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type Item = {
  image: any;
  title?: string;
  subtitle?: string;
};

type NavigationProp = StackNavigationProp<any>;
type BrandListProps = {
  data: Item[];
  //   onItemPress?: (item: Item, event: GestureResponderEvent) => void;
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
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
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

const styles = StyleSheet.create({
  container: {
    marginVertical: vh(10),
    // backgroundColor: 'red',

  },

  card: {
    alignItems: 'center',
    marginHorizontal: vh(5),

  },
  image: {
    width: vw(160),
    height: vh(220),
    borderRadius: 5,
    resizeMode: 'stretch',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  subtitle: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
  },
});

export default BrandList;
