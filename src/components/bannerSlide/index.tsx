import React, { useRef, useState, useEffect } from 'react';
import { View, Image, FlatList, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import {SCREEN_WIDTH } from '../../theme/dimensions';
import styles from './styles';




interface ImageSliderProps {
  images: { id: string; source: any }[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(1); 

  const infiniteImages = [
    images[images.length - 1], 
    ...images,
    images[0], 
  ];

  const onScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / SCREEN_WIDTH);
    if (slideIndex === 0) {
      flatListRef.current?.scrollToIndex({ index: images.length, animated: false });
      setCurrentIndex(images.length);
    } else if (slideIndex === infiniteImages.length - 1) {
      flatListRef.current?.scrollToIndex({ index: 1, animated: false });
      setCurrentIndex(1);
    } else {
      setCurrentIndex(slideIndex);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = currentIndex + 1;

      if (nextIndex >= infiniteImages.length) {
        nextIndex = 1;
        flatListRef.current?.scrollToIndex({ index: 1, animated: false });
      } else {
        flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      }

      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, infiniteImages.length]);

  const renderSliderItem = ({ item }: { item: { id: string; source: any } }) => (
    <Image source={item.source} style={styles.sliderImage} />
  );

  const getItemLayout = (_: any, index: number) => ({
    length: SCREEN_WIDTH,
    offset: SCREEN_WIDTH* index,
    index,
  });

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={infiniteImages}
        renderItem={renderSliderItem}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onScrollEnd}
        scrollEventThrottle={16}
        getItemLayout={getItemLayout}
        initialScrollIndex={1} 
      />

      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index + 1 ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageSlider;


