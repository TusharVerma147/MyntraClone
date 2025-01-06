import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Platform } from 'react-native';
import AppWrapper from '../../components/appWrapper';
import { vh } from '../../theme/dimensions';
import { colors } from '../../theme';
import { Icons } from '../../assets';
import AppHeader from '../../components/appHeader';
import styles from './styles';
import { sections } from '../../utils/mockdata';

const Privacy = () => {
  const [activeSection, setActiveSection] = useState(null);



  const toggleSection = (index:any) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <AppWrapper>
     <AppHeader
        backicon={Icons.back}
        backColor={colors.charcol}
        backHeight={vh(18)}
        backWidth={vh(18)}
        marginLeft={vh(10)}
        title="Privacy Policy"
        titleSize={vh(15)}
        titleColor={colors.charcol}
        backgroundColor={Platform.OS === 'android' ? colors.screengrey : 'none'}
      />
      <ScrollView style={styles.subcont}>
      <Text style={styles.terms}>Privacy Policy</Text>
      {sections.map((section, index) => (
        <View key={index}>
          <TouchableOpacity
            style={styles.sectionHeader}
            onPress={() => toggleSection(index)}
          >
            <Text style={styles.sectionTitle}>{section.title}</Text>
          </TouchableOpacity>
          {activeSection === index && (
            <Text style={styles.termsText}>{section.description}</Text>
          )}
        </View>
      ))}
      </ScrollView>
    </AppWrapper>
  );
};

 

export default Privacy;
