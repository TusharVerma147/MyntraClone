import React, { ReactNode } from 'react';
import { SafeAreaView, } from 'react-native';
import styles from './styles';


interface AppWrapperProps {
  children: ReactNode; 
  backgroundColor?: string; 
  paddingHorizontal?: number; 
  marginHorizontal?: number 
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children, backgroundColor, paddingHorizontal, marginHorizontal}) => {
  return (
    <SafeAreaView 
      style={[
        styles.container, 
        { 
          backgroundColor: backgroundColor , 
          paddingHorizontal: paddingHorizontal || 0 ,
          marginHorizontal:marginHorizontal || 0,
        }]
      }
    >
     
      {children}
    </SafeAreaView>
  );
};

export default AppWrapper;
