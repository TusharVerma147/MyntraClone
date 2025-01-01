import React, {useState} from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import { videoData } from '../../utils/videos';
import SingleReel from '../singleReel/singleReel';


interface ReelProps {
  navigation: any; 
  isScreenFocused: boolean;
}
const Reel: React.FC<ReelProps> = ({ navigation, isScreenFocused }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndexValue = ({ index }: { index: number }) => {
    setCurrentIndex(index);
  };

  return (
    <SwiperFlatList
    showPagination={false}
    vertical={true}
      onChangeIndex={handleChangeIndexValue}
      data={videoData}
      renderItem={({item, index}) => (
        <SingleReel item={item} index={index} currentIndex={currentIndex}   navigation={navigation}
        isScreenFocused={isScreenFocused} />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default Reel;