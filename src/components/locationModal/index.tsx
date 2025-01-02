import React from 'react';
import {Modal,View,TouchableWithoutFeedback,FlatList,TouchableOpacity,Text,Image,} from 'react-native';
import { Icons } from '../../assets';
import styles from './styles';

interface LocationModalProps {
  visible: boolean;
  currentLocationAddress: string;
  nearbyPlaces: any[];
  onSelectPlace: (place: string) => void;
  onClose: () => void;
  isBottomSheet?: boolean; 
}

const LocationModal: React.FC<LocationModalProps> = ({
  visible,
  currentLocationAddress,
  nearbyPlaces,
  onSelectPlace,
  onClose,
  isBottomSheet = false, 
}) => {
  return (
    <Modal transparent={true} animationType="fade" visible={visible}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View
          style={
            isBottomSheet ? styles.bottomSheetOverlay : styles.modalOverlay
          }>
          <TouchableWithoutFeedback>
            <View
              style={
                isBottomSheet
                  ? styles.bottomSheetContainer
                  : styles.container
              }>
              <FlatList
                data={nearbyPlaces}
                keyExtractor={(item) => item.place_id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                  <TouchableOpacity
                    style={styles.listheader}
                    onPress={() => {
                      onSelectPlace(currentLocationAddress);
                    }}>
                    <Image source={Icons.coordinate} style={styles.clock} />
                    <Text style={styles.nearbyPlaceText}>
                      Current Location: {currentLocationAddress || 'Fetching...'}
                    </Text>
                  </TouchableOpacity>
                }
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.nearbyPlaceItem}
                    onPress={() => onSelectPlace(item.name)}>
                    <Text style={styles.nearbyPlaceText}>{item.name}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default LocationModal;
