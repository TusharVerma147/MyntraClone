import {View, Text, Image, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import AppWrapper from '../../components/appWrapper';
import {colors} from '../../theme';
import {Icons, Images} from '../../assets';
import ImageSlider from '../../components/bannerSlide';
import styles from './styles';
import {
  fashion,
  home,
  beauty,
  fashionlist,
  beautylist,
  homelist,
  fashionbrand
} from '../../utils/mockdata';
import CategoryCard from '../../components/category';
import CategoryList from '../../components/categoryList';
import { useNavigation } from '@react-navigation/native'; 
import { StackNavigationProp } from '@react-navigation/stack';
import BrandList from '../../components/brandsList';

type HomeProps = {
  navigation: {
    reset: (options: {index: number; routes: {name: string}[]}) => void;
  };
};
type NavigationProp = StackNavigationProp<any>;

type DataItem = {
  image: string;
  title: string;
  subtitle: string;
};


const Home: React.FC<HomeProps> = () => {

  const navigation = useNavigation<NavigationProp>();

  const [selectedCategory, setSelectedCategory] = useState('Fashion');

  const renderCategoryContent = () => {
    switch (selectedCategory) {
      case 'Fashion':
        return {
          categoryList: <CategoryList data={fashionlist} />,
          bannerImage: <Image source={Images.bargains} style={styles.banner} />,
        };
      case 'Beauty':
        return {
          categoryList: <CategoryList data={beautylist} />,
          bannerImage: <Image source={Images.grooming} style={styles.banner} />,
        };
      case 'Home':
        return {
          categoryList: <CategoryList data={homelist} />,
          bannerImage: (
            <Image source={Images.stealdeal} style={styles.banner} />
          ),
        };
      default:
        return {
          categoryList: null,
          bannerImage: null
        };
    }
  };

  

  const {categoryList, bannerImage} = renderCategoryContent();
  return (
    <AppWrapper backgroundColor={colors.white}>
      <StatusBar backgroundColor={colors.white} />
      <View style={styles.header}>
        <View style={styles.row}>
          <View style={styles.myntraview}>
            <Text style={styles.myntra}>Myntra</Text>
            <Image source={Icons.bottom} style={styles.bottom} />
          </View>
          <Image source={Icons.crown} style={styles.crown} />
          <View style={{}}>
            <Text>BECOME</Text>
            <View style={styles.row}>
              <Text style={styles.inside}>INSIDER</Text>
              <Image source={Icons.forward} style={styles.forward} />
            </View>
          </View>
        </View>
        <View style={styles.rightview}>
          <Image source={Icons.bell} style={styles.righticon} />
          <Image source={Icons.wishlist} style={styles.righticon} />
          <TouchableOpacity onPress={()=>navigation.navigate('LoginSign')} >
            <Image source={Icons.userpro} style={styles.righticon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.category}>
        <CategoryCard
          text="Fashion"
          image={Icons.fashion}
          isSelected={selectedCategory === 'Fashion'}
          onSelect={() => setSelectedCategory('Fashion')}
        />
        <CategoryCard
          text="Beauty"
          image={Icons.beauty}
          isSelected={selectedCategory === 'Beauty'}
          onSelect={() => setSelectedCategory('Beauty')}
        />
        <CategoryCard
          text="Home"
          image={Icons.home}
          isSelected={selectedCategory === 'Home'}
          onSelect={() => setSelectedCategory('Home')}
        />
      </View>
      < ScrollView>
      <View style={styles.categorylist}>
        {categoryList}
      </View>
      {bannerImage}
      {selectedCategory === 'Fashion' && <ImageSlider images={fashion} />}
      {selectedCategory === 'Beauty' && <ImageSlider images={beauty} />}
      {selectedCategory === 'Home' && <ImageSlider images={home} />}
<Image source={Images.brandstobrowse} style={styles.banner}/>
    <BrandList data={fashionbrand} />
    <Image source={Images.blinkandmiss} style={styles.banner}/>
    <BrandList data={fashionbrand} />
    </ScrollView>
    </AppWrapper>
  );
};

export default Home;
