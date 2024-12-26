// import React, { useState, useRef, useEffect } from 'react';
// import { View, Text, StyleSheet, Dimensions, FlatList, AppState } from 'react-native';
// import Video from 'react-native-video';
// import { useFocusEffect } from '@react-navigation/native';

// const { height, width } = Dimensions.get('window');

// const reelsData = [
//   {
//     id: '1',
//     title: 'Reel 1',
//     description: 'Description for Reel 1',
//     videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
//   },
//   {
//     id: '2',
//     title: 'Reel 2',
//     description: 'Description for Reel 2',
//     videoUrl: 'https://www.w3schools.com/html/movie.mp4',
//   },
//   {
//     id: '3',
//     title: 'Reel 3',
//     description: 'Description for Reel 3',
//     videoUrl: 'https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4',
//   },
// ];

// const Minis = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [appState, setAppState] = useState(AppState.currentState);
//   const flatListRef = useRef();

//   // Handle app state change to pause/restart videos
//   useEffect(() => {
//     const subscription = AppState.addEventListener('change', handleAppStateChange);
//     return () => subscription.remove();
//   }, []);

//   const handleAppStateChange = (nextAppState) => {
//     if (appState.match(/inactive|background/) && nextAppState === 'active') {
//       setCurrentIndex(currentIndex); // Restart current video
//     } else {
//       setCurrentIndex(-1); // Pause all videos when app goes to background
//     }
//     setAppState(nextAppState);
//   };

//   const handleScroll = (index) => {
//     if (index >= reelsData.length) {
//       setCurrentIndex(0);
//       flatListRef.current.scrollToIndex({ index: 0 });
//     } else if (index < 0) {
//       setCurrentIndex(reelsData.length - 1);
//       flatListRef.current.scrollToIndex({ index: reelsData.length - 1 });
//     } else {
//       setCurrentIndex(index);
//     }
//   };

//   useFocusEffect(
//     React.useCallback(() => {
//       setCurrentIndex(currentIndex); // Play video on focus
//       return () => {
//         setCurrentIndex(-1); // Pause video on blur
//       };
//     }, [currentIndex])
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={reelsData}
//         renderItem={({ item, index }) => (
//           <View style={styles.videoContainer}>
//             <Video
//               source={{ uri: item.videoUrl }}
//               style={styles.videoPlayer}
//               resizeMode="cover"
//               repeat
//               paused={currentIndex !== index} // Only play current video
//             />
//             <View style={styles.overlayContent}>
//               <Text style={styles.reelTitle}>{item.title}</Text>
//               <Text style={styles.reelDescription}>{item.description}</Text>
//             </View>
//           </View>
//         )}
//         keyExtractor={(item) => item.id}
//         ref={flatListRef}
//         pagingEnabled
//         showsVerticalScrollIndicator={false}
//         onScrollEndDrag={(e) => {
//           const offsetY = e.nativeEvent.contentOffset.y;
//           const newIndex = Math.round(offsetY / height);
//           handleScroll(newIndex);
//         }}
//         getItemLayout={(_, index) => ({
//           length: height,
//           offset: height * index,
//           index,
//         })}
//         windowSize={5} // Number of items to render at once
//         initialNumToRender={1} // Render only the first video initially
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//   },
//   videoContainer: {
//     height,
//     width,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   videoPlayer: {
//     height: '100%',
//     width: '100%',
//   },
//   overlayContent: {
//     position: 'absolute',
//     bottom: 80,
//     left: 20,
//     padding: 10,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
//     borderRadius: 8,
//   },
//   reelTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 5,
//   },
//   reelDescription: {
//     fontSize: 16,
//     color: '#fff',
//   },
// });

// export default Minis;




import { View, Text } from 'react-native'
import React from 'react'

const Minis = () => {
  return (
    <View>
      <Text>Mini</Text>
    </View>
  )
}

export default Minis;