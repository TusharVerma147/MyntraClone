import { View, Text } from 'react-native'
import React from 'react'

const Trends = () => {
  return (
    <View>
      <Text>Trends</Text>
    </View>
  )
}

export default Trends


// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, ActivityIndicator, StyleSheet, RefreshControl } from 'react-native';
// import Video from 'react-native-video';  // Importing the video component

// // Dummy data structure for Reels (replace this with your JSON or API call)
// const initialReelsData = [
//   {
//     id: '1',
//     title: 'Reel 1',
//     description: 'Description for Reel 1',
//     videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',  // Sample video URL
//   },
//   {
//     id: '2',
//     title: 'Reel 2',
//     description: 'Description for Reel 2',
//     videoUrl: 'https://www.w3schools.com/html/movie.mp4', // Sample video URL
//   },
//   {
//     id: '3',
//     title: 'Reel 3',
//     description: 'Description for Reel 3',
//     videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Sample video URL
//   },
//   // Add more mock data for testing
// ];

// const Trends = () => {
//   const [reelsData, setReelsData] = useState(initialReelsData);
//   const [loading, setLoading] = useState(false);
//   const [isRefreshing, setIsRefreshing] = useState(false);

//   // Function to load more reels when scrolling to the top (pulling down)
//   const loadMoreReels = () => {
//     if (loading) return; // Prevent multiple requests at the same time
//     setLoading(true);

//     // Simulate fetching new data (replace this with your API call)
//     setTimeout(() => {
//       const newReels = [
//         { id: (reelsData.length + 1).toString(), title: `Reel ${reelsData.length + 1}`, description: `Description for Reel ${reelsData.length + 1}`, videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
//         { id: (reelsData.length + 2).toString(), title: `Reel ${reelsData.length + 2}`, description: `Description for Reel ${reelsData.length + 2}`, videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
//       ];

//       setReelsData(prevReels => [...newReels, ...prevReels]);
//       setLoading(false);
//     }, 1000); // Simulate network delay
//   };

//   // Function to load previous reels when scrolling to the bottom (infinite scroll)
//   const loadPreviousReels = () => {
//     if (loading) return; // Prevent multiple requests at the same time
//     setLoading(true);

//     // Simulate fetching previous data (replace with actual API call)
//     setTimeout(() => {
//       const moreReels = [
//         { id: (reelsData.length + 1).toString(), title: `Reel ${reelsData.length + 1}`, description: `Description for Reel ${reelsData.length + 1}`, videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
//         { id: (reelsData.length + 2).toString(), title: `Reel ${reelsData.length + 2}`, description: `Description for Reel ${reelsData.length + 2}`, videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
//       ];

//       setReelsData(prevReels => [...prevReels, ...moreReels]);
//       setLoading(false);
//     }, 1000); // Simulate network delay
//   };

//   // Function to handle refresh action (if needed)
//   const handleRefresh = () => {
//     setIsRefreshing(true);
//     setTimeout(() => {
//       setReelsData(initialReelsData); // Reset to initial data
//       setIsRefreshing(false);
//     }, 1000);
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={reelsData}
//         renderItem={({ item }) => (
//           <View style={styles.reelContainer}>
//             <Text style={styles.reelTitle}>{item.title}</Text>
//             <Text style={styles.reelDescription}>{item.description}</Text>

//             {/* Video player for each Reel */}
//             <View style={styles.videoContainer}>
//               <Video
//                 source={{ uri: item.videoUrl }}   // Video URL
//                 style={styles.videoPlayer}
//                 controls={true}                    // Show video controls
//                 resizeMode="contain"               // Maintain aspect ratio
//                 repeat={true}                      // Video will loop
//               />
//             </View>
//           </View>
//         )}
//         keyExtractor={item => item.id}
//         onEndReached={loadPreviousReels} // Load previous reels when scrolling to bottom
//         onEndReachedThreshold={0.1} // Trigger when the user is 10% from the bottom
//         onRefresh={handleRefresh} // Trigger when pulling down
//         refreshing={isRefreshing} // Display loading spinner while refreshing
//         ListFooterComponent={loading ? <ActivityIndicator size="large" color="#000" /> : null} // Footer loading spinner
//         inverted={true} // Reverse the list order, so latest reels appear at the top
//         refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />} // Pull to refresh
//       />
//     </View>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f9f9f9',
//   },
//   reelContainer: {
//     backgroundColor: '#fff',
//     marginBottom: 15,
//     borderRadius: 10,
//     padding: 15,
//     marginHorizontal: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//   },
//   reelTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 5,
//   },
//   reelDescription: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 10,
//   },
//   videoContainer: {
//     width: '100%',
//     height: 200, // Set a fixed height for the video player
//     marginBottom: 10,
//     borderRadius: 10,
//     overflow: 'hidden', // Ensures that the video corners are rounded
//   },
//   videoPlayer: {
//     width: '100%',
//     height: '100%',  // Take up full width and height of the container
//   },
// });

// export default Trends;