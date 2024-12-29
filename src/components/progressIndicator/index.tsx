import React from 'react';
import { View, Text,} from 'react-native';
import styles from './styles';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentStep, totalSteps }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: totalSteps }).map((_, index) => {
        const isActive = index < currentStep;
        return (
          <View
            key={index}
            style={[
              styles.step,
              isActive && styles.activeStep,
            ]}
          />
          
        );
      })}
      <Text style={styles.stepText}>
        Step {currentStep} of {totalSteps}
      </Text>
    </View>
  );
};



export default ProgressIndicator;
