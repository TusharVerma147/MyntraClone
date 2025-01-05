import {View,Text,Image,StatusBar,TouchableOpacity,ScrollView,ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppWrapper from '../../components/appWrapper';
import {colors} from '../../theme';
import {Icons, Images} from '../../assets';
import ImageSlider from '../../components/bannerSlide';
import styles from './styles';
import {fashion,home,beauty,fashionlist,beautylist,homelist,fashionbrand,winterbrand1,winterbrand2,homeessential,shadi,OversizedShirts,bestbeauty,} from '../../utils/mockdata';
import CategoryCard from '../../components/category';
import CategoryList from '../../components/categoryList';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import BrandList from '../../components/brandsList';
import TrendProducts from '../../components/trendProducts';
import AnimatedTextInput from '../../components/animatedTextInput';
import SelectPhotoModal from './cameraModal';
import {handleCameraSelect,handleGallerySelect,} from '../../custom/imagePicker';
import {handleWishlistPress} from '../../utils/common';
import fetchFirestore from '../../custom/useCartandWislist';

type HomeProps = {
  navigation: {
    reset: (options: {index: number; routes: {name: string}[]}) => void;
  };
};
type NavigationProp = StackNavigationProp<any>;

const Home: React.FC<HomeProps> = () => {
  const navigation = useNavigation<NavigationProp>();

  const [selectedCategory, setSelectedCategory] = useState('Fashion');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  fetchFirestore();

  useEffect(()=>{
    setTimeout(() => setIsLoading(false), 2000); 
  },[])

  const WishlistPress = () => {
    handleWishlistPress(navigation);
  };

  const handleProfile = () => {
    navigation.navigate('LoginSign');
  };

  const handleModal = ()=>{
    setIsModalVisible(!isModalVisible)
  }

  const handleMyntra = ()=>{
      navigation.navigate('LandingPage')
  }

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
          bannerImage: null,
        };
    }
  };

  const {categoryList, bannerImage} = renderCategoryContent();

  return (
    <AppWrapper backgroundColor={colors.white}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />()
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.zeptored} />
        </View>
      ) :(
        <View>
      <View style={styles.header}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.myntraview} onPress={handleMyntra}>
            <Text style={styles.myntra}>Myntra</Text>
            <Image source={Icons.bottom} style={styles.bottom} />
          </TouchableOpacity>
          <Image source={Icons.crown} style={styles.crown} />
          <View>
            <Text>BECOME</Text>
            <View style={styles.row}>
              <Text style={styles.inside}>INSIDER</Text>
              <Image source={Icons.forward} style={styles.forward} />
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <Image source={Icons.bell} style={styles.righticon} />
          <TouchableOpacity onPress={WishlistPress}>
            <Image source={Icons.wishlist} style={styles.righticon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleProfile}>
            <Image source={Icons.userpro} style={styles.righticon} />
          </TouchableOpacity>
        </View>
      </View>
      <AnimatedTextInput onCameraPress={handleModal} />

      <SelectPhotoModal
        isVisible={isModalVisible}
        onClose={handleModal}
        onCameraSelect={handleCameraSelect}
        onGallerySelect={handleGallerySelect}
      />
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
      <ScrollView>
        <View style={styles.categorylist}>{categoryList}</View>
        {bannerImage}
        {selectedCategory === 'Fashion' && <ImageSlider images={fashion} />}
        {selectedCategory === 'Beauty' && <ImageSlider images={beauty} />}
        {selectedCategory === 'Home' && <ImageSlider images={home} />}
        <Image source={Images.brandstobrowse} style={styles.banner} />
        <BrandList data={fashionbrand} />
        <Image source={Images.passfwd} style={styles.banner} />
        <TrendProducts
          heading="#OversizedShirts"
          data={OversizedShirts}
          navigation={navigation}
        />
        <Image source={Images.bestbeauty} style={styles.newbanner} />
        <BrandList data={bestbeauty} />
        <Image source={Images.blinkandmiss} style={styles.banner} />
        <BrandList data={fashionbrand} />
        <Image source={Images.winteredit} style={styles.winter} />
        <BrandList data={winterbrand1} />
        <BrandList data={winterbrand2} />
        <Image source={Images.crazyhome} style={styles.banner} />
        <BrandList data={homeessential} />
        <Image source={Images.shadi} style={styles.banner} />
        <BrandList data={shadi} />
      </ScrollView>
      </View>
      )}
    </AppWrapper>
  );
};

export default Home;
