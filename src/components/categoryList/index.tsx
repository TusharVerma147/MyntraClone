import React from 'react';
import {
  FlatList,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native'; 
import { StackNavigationProp } from '@react-navigation/stack';

type CategoryItem = {
  id: string;
  title: string;
  image: ImageSourcePropType;
};
type NavigationProp = StackNavigationProp<any>;

type CategoryListProps = {
  data: CategoryItem[];
};

const CategoryList: React.FC<CategoryListProps> = ({data}) => {


  const navigation = useNavigation<NavigationProp>();

  const gotoItem = (item: CategoryItem) => {
    navigation.navigate('Items', {categoryTitle: item.title});
  };
  const renderCategoryItem = ({item}: {item: CategoryItem}) => (
    <TouchableOpacity style={styles.itemContainer} activeOpacity={0.8}  onPress={() => gotoItem(item)} >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );


  

  return (
    <FlatList
      data={data}
      renderItem={renderCategoryItem}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
    />
  );
};



export default CategoryList;
