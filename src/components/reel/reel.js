import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import { videoData } from '../../utils/videos';
import SingleReel from '../singleReel/singleReel';

const Reel = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndexValue = ({index}) => {
    setCurrentIndex(index);
  };

  return (
    <SwiperFlatList
    showPagination={false}
    vertical={true}
      onChangeIndex={handleChangeIndexValue}
      data={videoData}
      renderItem={({item, index}) => (
        <SingleReel item={item} index={index} currentIndex={currentIndex}   navigation={navigation} />
      )}
      keyExtractor={(item, index) => index}
    />
  );
};

export default Reel;