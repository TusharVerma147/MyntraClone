import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import AppWrapper from '../../components/appWrapper';
import {Icons} from '../../assets';
import {vh} from '../../theme/dimensions';
import {colors} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import styles from './styles';

const Search = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <AppWrapper>

        <View style={styles.container}>
          <TouchableOpacity>
            <Image style={styles.backicon} source={Icons.back} />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Search in Myntra Store"
            placeholderTextColor={colors.textinput}
          />
          <TouchableOpacity>
            <Image style={styles.backicon} source={Icons.mic} />
          </TouchableOpacity>
        </View>

        <Text style={styles.photoText}>PHOTO SEARCH</Text>
        <View style={styles.photoSearchContainer}>
          <TouchableOpacity activeOpacity={0.8}
            style={[styles.photoButton, styles.photoButtonLeft]}>
            <Image style={styles.backicon} source={Icons.camera} />
            <Text style={styles.buttonText}>Click a photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.photoButton} activeOpacity={0.8}>
            <Image style={styles.backicon} source={Icons.gallery} />
            <Text style={styles.buttonText}>Select a photo</Text>
          </TouchableOpacity>
        </View>
       <View style={styles.container}>
       <Text style={styles.recentText}>RECENT SEARCHES</Text>
       <Text style={styles.editText}>EDIT</Text>
        </View> 

    </AppWrapper>
  );
};

export default Search;



// import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import AppWrapper from '../../components/appWrapper';
// import { Icons } from '../../assets';
// import { vh } from '../../theme/dimensions';
// import { colors } from '../../theme';
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { shirts, jeans, shoes, watches, products } from '../../utils/mockdata';
// import styles from './styles';

// const Search = () => {
//   const navigation = useNavigation<StackNavigationProp<any>>();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState<any[]>([]);

//   // Function to handle search
//   const handleSearch = (term: string) => {
//     setSearchTerm(term);

//     if (term) {
//       // Filter search by brand or type across all categories
//       const allItems = [...shirts, ...jeans, ...shoes, ...watches, ...products];
//       const filteredItems = allItems.filter((item) =>
//         item.brand.toLowerCase().includes(term.toLowerCase()) ||
//         item.type.toLowerCase().includes(term.toLowerCase())
//       );
//       setSearchResults(filteredItems); // Set filtered results
//     } else {
//       setSearchResults([]); // Clear results when search term is empty
//     }
//   };

//   // Navigate to Item Screen with categoryTitle based on search result
//   const navigateToItemScreen = (title: string) => {
//     navigation.navigate('Items', { categoryTitle: title, searchTerm });
//   };

//   return (
//     <AppWrapper>
//       <View style={styles.container}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Image style={styles.backicon} source={Icons.back} />
//         </TouchableOpacity>
//         <TextInput
//           style={styles.input}
//           placeholder="Search in Myntra Store"
//           placeholderTextColor={colors.textinput}
//           value={searchTerm}
//           onChangeText={handleSearch}
//         />
//         <TouchableOpacity>
//           <Image style={styles.backicon} source={Icons.mic} />
//         </TouchableOpacity>
//       </View>

//       {/* Conditional rendering based on search term */}
//       {searchTerm ? (
//         searchResults.length > 0 ? (
//           <View style={styles.searchResultsContainer}>
//             <FlatList
//               data={searchResults}
//               renderItem={({ item }) => (
//                 <TouchableOpacity
//                   style={styles.itemResult}
//                   onPress={() => navigateToItemScreen(item.type)} // Navigate to Item screen with category
//                 >
//                   <Image style={styles.itemImage} source={item.image} />
//                   <Text style={styles.itemText}>{item.brand} - {item.type}</Text>
//                 </TouchableOpacity>
//               )}
//               keyExtractor={(item) => item.id}
//             />
//           </View>
//         ) : (
//           <View style={styles.noItemsFoundContainer}>
//             <Text style={styles.noItemsFoundText}>No items found</Text>
//           </View>
//         )
//       ) : (
//         <>
//           <Text style={styles.photoText}>PHOTO SEARCH</Text>
//           <View style={styles.photoSearchContainer}>
//             <TouchableOpacity activeOpacity={0.8} style={[styles.photoButton, styles.photoButtonLeft]}>
//               <Image style={styles.backicon} source={Icons.camera} />
//               <Text style={styles.buttonText}>Click a photo</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.photoButton} activeOpacity={0.8}>
//               <Image style={styles.backicon} source={Icons.gallery} />
//               <Text style={styles.buttonText}>Select a photo</Text>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.container}>
//             <Text style={styles.recentText}>RECENT SEARCHES</Text>
//             <Text style={styles.editText}>EDIT</Text>
//           </View>
//         </>
//       )}
//     </AppWrapper>
//   );
// };

// export default Search;

