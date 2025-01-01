import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import { Icons } from '../../../assets';
import styles from './styles';

interface NearbyPlacesModalProps {
  visible: boolean;
  onClose: () => void;
  nearbyPlaces: any[];
  currentLocationAddress: string;
  onSelectPlace: (place: string) => void;
}

const NearbyPlacesModal: React.FC<NearbyPlacesModalProps> = ({
  visible,
  onClose,
  nearbyPlaces,
  currentLocationAddress,
  onSelectPlace,
}) => {
  return (
    <Modal transparent={true} animationType="fade" visible={visible}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <View style={styles.nearbyPlacesContainer}>
            <FlatList
              data={nearbyPlaces}
              keyExtractor={(item) => item.place_id}
              ListHeaderComponent={
                <TouchableOpacity
                  style={styles.listheader}
                  onPress={() => {
                    onSelectPlace(currentLocationAddress);
                    onClose();
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
                  onPress={() => {
                    onSelectPlace(item.name);
                    onClose();
                  }}>
                  <Text style={styles.nearbyPlaceText}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default NearbyPlacesModal;
