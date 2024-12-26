import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../../components/customButton';
import {vh} from '../../theme/dimensions';
import styles from './styles';
import {Icons} from '../../assets';
import { colors } from '../../theme';

type QuantityModalProps = {
  visible: boolean;
  selectedQty: number;
  onClose: () => void;
  onQtyChange: (qty: number) => void;
};

const QuantityModal: React.FC<QuantityModalProps> = ({
  visible,
  selectedQty,
  onClose,
  onQtyChange,
}) => {
  const [localQty, setLocalQty] = React.useState(selectedQty);

  React.useEffect(() => {
    setLocalQty(selectedQty);
  }, [selectedQty]);

  const handleDonePress = () => {
    onQtyChange(localQty);
    onClose();
  };

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <TouchableWithoutFeedback>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <View
                style={styles.qtyview}>
                <Text style={styles.modalTitle}>Select Quantity</Text>
                <TouchableOpacity onPress={onClose}>
                  <Image style={styles.cross} source={Icons.cross} />
                </TouchableOpacity>
              </View>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{marginBottom: vh(20)}}>
                {[...Array(10)].map((_, index) => {
                  const qty = index + 1;
                  return (
                    <TouchableOpacity
                      key={qty}
                      onPress={() => setLocalQty(qty)}
                      style={[
                        styles.qtyCircle,
                        localQty === qty && styles.selectedQty,
                      ]}>
                      <Text
                        style={[
                          styles.qtyText,
                          localQty === qty && styles.selectedqtyText,
                        ]}>
                        {qty}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>

              <CustomButton
                title="DONE"
                backgroundColor={colors.zeptored}
                textColor={colors.white}
                textStyle={styles.buttontext}
                onPress={handleDonePress}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default QuantityModal;
