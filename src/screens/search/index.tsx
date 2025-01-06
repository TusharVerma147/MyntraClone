import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import { useNavigation, CommonActions, useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import AppWrapper from '../../components/appWrapper';
import { Icons } from '../../assets';
import { colors } from '../../theme';
import { handleCameraSelect, handleGallerySelect } from '../../custom/imagePicker';
import { saveSearchToFirestore, fetchRecentSearches, deleteRecentSearch } from '../../custom/searchFirestore';
import getAllItems from '../../utils/getAllItems';
import styles from './styles';
import PhotoSearch from '../../components/photoSearch';

const Search = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [recentSearches, setRecentSearches] = useState<any[]>([]);
  const [isEditing, setIsEditing] = useState<Boolean>(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleBack = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'BottomTab', params: { screen: 'Home' } }],
      }),
    );
  };

  const searchInputRef = useRef<TextInput | null>(null);
  const focusSearchInput = useCallback(() => {
    const timeoutId = setTimeout(() => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      focusSearchInput();
    }, [focusSearchInput]),
  );

  const handleSearch = async (term: string) => {
    setSearchTerm(term);
    if (term) {
      const allItems = getAllItems();
      const filteredItems = allItems.filter(
        item =>
          item.brand.toLowerCase().includes(term.toLowerCase()) ||
          item.type.toLowerCase().includes(term.toLowerCase()),
      );

      setSearchResults(filteredItems);
    } else {
      setSearchResults([]);
    }
  };

  const handleRecentSearchPress = async (itemId: string) => {
    const allItems = getAllItems();

    const item = allItems.find(i => i.id === itemId);
    if (item) {
      navigation.navigate('Items', { categoryTitle: item.type, searchTerm: item.brand });
    }
  };

  const handleDeleteRecentSearch = async (id: string) => {
    await deleteRecentSearch(id);
    setRecentSearches(recentSearches.filter(search => search.id !== id));
  };

  const fetchRecentSearchesData = async () => {
    const searches = await fetchRecentSearches();
    setRecentSearches(searches);
  };

  useEffect(() => {
    fetchRecentSearchesData();
  }, []);

  const shortenText = (text: string, wordLimit: number) => {
    const words = text.split(' ');
    return words.length > wordLimit
      ? `${words.slice(0, wordLimit).join(' ')}...`
      : text;
  };

  const navigateToItemScreen = (title: string) => {
    navigation.navigate('Items', { categoryTitle: title, searchTerm });
  };
  const renderSearchItem=({ item }:any) => {
    return (
      <TouchableOpacity
        style={styles.itemResult}
        onPress={async () => {
          await saveSearchToFirestore(item.id);
          navigateToItemScreen(item.type);
        }}
      >
        <Image style={styles.itemImage} source={item.image} />
        <Text style={styles.itemText}>
          {shortenText(`${item.brand} - ${item.type}`, 5)}
        </Text>
      </TouchableOpacity>
    );
  }

  const renderRecentItem=({ item }:any) => {
    const allItems = getAllItems();
    const recentItem = allItems.find(i => i.id === item.itemId);

    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => handleRecentSearchPress(item.itemId)}
          style={styles.recentItem}
        >
          {recentItem && recentItem.image && (
            <Image style={styles.recentItemImage} source={recentItem.image} />
          )}
          <Text style={styles.recentItemText} numberOfLines={2}>
            {recentItem ? recentItem.type : 'Item not found'}
          </Text>
        </TouchableOpacity>
        {isEditing && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handleDeleteRecentSearch(item.id)}
            style={styles.crossIconContainer}
          >
            <Image style={styles.crossIcon} source={Icons.cross} />
          </TouchableOpacity>
        )}
      </View>
    );
  }

  return (
    <AppWrapper>
      <StatusBar backgroundColor={colors.screengrey} barStyle={'dark-content'} />
      <View style={styles.container}>
        <TouchableOpacity onPress={handleBack}>
          <Image style={styles.backicon} source={Icons.back} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Search in Myntra Store"
          placeholderTextColor={colors.textinput}
          value={searchTerm}
          onChangeText={handleSearch}
          ref={searchInputRef}
        />
        <TouchableOpacity>
          <Image style={styles.backicon} source={Icons.mic} />
        </TouchableOpacity>
      </View>

      {searchTerm ? (
        searchResults.length > 0 ? (
          <View style={styles.searchResultsContainer}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={searchResults}
              renderItem={renderSearchItem}
              keyExtractor={item => item.id}
            />
          </View>
        ) : (
          <View style={styles.noItemsFoundContainer}>
            <Text style={styles.noItemsFoundText}>No items found</Text>
          </View>
        )
      ) : (
        <>
          <Text style={styles.photoText}>PHOTO SEARCH</Text>
          <View style={styles.photoSearchContainer}>
            <PhotoSearch onPress={handleCameraSelect} style={styles.photoButtonLeft} icon={Icons.camera} text="Click a photo" />
            <PhotoSearch onPress={handleGallerySelect} icon={Icons.gallery} text="Select a photo" />
          </View>
          <View>
            <View style={styles.container}>
              <Text style={styles.recentText}>RECENT SEARCHES</Text>
              <TouchableOpacity onPress={toggleEdit} activeOpacity={0.8}>
                <Text style={styles.editText}>
                  {isEditing ? 'DONE' : 'EDIT'}
                </Text>
              </TouchableOpacity>
            </View>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={recentSearches}
              renderItem={renderRecentItem}
              keyExtractor={item => item.id}
            />
          </View>
        </>
      )}
    </AppWrapper>
  );
};

export default Search;

