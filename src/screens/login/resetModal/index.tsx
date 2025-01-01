import React from 'react';
import { Modal, TouchableWithoutFeedback, View, Text } from 'react-native';
import CustomButton from '../../../components/customButton';
import CustomTextInput from '../../../components/customTextInput';
import { colors } from '../../../theme';
import styles from './styles';

type ResetPasswordProps = {
  visible: boolean;
  onClose: () => void;
  resetEmail: string;
  setResetEmail: React.Dispatch<React.SetStateAction<string>>;
  resetEmailError: string | null;
  setResetEmailError: React.Dispatch<React.SetStateAction<string | null>>;
  onResetPassword: () => void;
};

const ResetPassword: React.FC<ResetPasswordProps> = ({
  visible,
  onClose,
  resetEmail,
  setResetEmail,
  resetEmailError,
  setResetEmailError,
  onResetPassword,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Reset Your Password</Text>
            <Text style={styles.modalText}>
              Enter your email and you may receive a link to reset your password.
            </Text>
            <CustomTextInput
              value={resetEmail}
              onChangeText={text => {
                setResetEmail(text);
                setResetEmailError('');
              }}
              placeholder="Enter your email"
              errorMessage={resetEmailError}
            />
            <View style={styles.modalButtons}>
              <CustomButton
                title="Reset"
                style={styles.custombutton}
                textStyle={styles.modalButtonText}
                borderRadius={5}
                backgroundColor={colors.reddish}
                textColor={colors.white}
                onPress={onResetPassword}
              />
              <CustomButton
                title="Cancel"
                style={styles.custombutton}
                textStyle={styles.modalButtonText}
                borderRadius={5}
                backgroundColor={colors.grey}
                textColor={colors.white}
                onPress={onClose}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ResetPassword;
