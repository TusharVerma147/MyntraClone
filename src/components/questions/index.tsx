import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Icons } from '../../assets';
import styles from './styles';

interface ProductQuestionsProps {
  isOpened: boolean;
  onToggle: () => void;
}

const ProductQuestions: React.FC<ProductQuestionsProps> = ({ isOpened, onToggle }) => {
  return (
    <View>
      <TouchableOpacity onPress={onToggle} style={styles.productview} activeOpacity={0.8}>
        <Text style={styles.producttext}>Customer Questions</Text>
        <Image source={isOpened ? Icons.up : Icons.bottom} style={styles.clock} />
      </TouchableOpacity>

      {isOpened && (
        <View style={styles.desview}>
          <Text style={styles.questionDescription}>Q1: What is the return policy for this product?</Text>
          <Text style={styles.answerDescription}>A1: You can return the product within 14 days of delivery.</Text>

          <Text style={styles.questionDescription}>Q2: Does this product come with a warranty?</Text>
          <Text style={styles.answerDescription}>A2: Yes, it comes with a one-year warranty.</Text>

          <Text style={styles.questionDescription}>Q3: Can I use this product on sensitive skin?</Text>
          <Text style={styles.answerDescription}>A3: Yes, it's suitable for sensitive skin.</Text>
        </View>
      )}
    </View>
  );
};

export default ProductQuestions;
