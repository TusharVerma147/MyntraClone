import {View, Text,Image,Alert, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import React, {useState,useEffect} from 'react';
import AppWrapper from '../../components/appWrapper';
import { colors } from '../../theme';
import styles from './styles';
import {Icons, Images} from '../../assets';
import CustomButton from '../../components/customButton';
import CustomTextInput from '../../components/customTextInput';
import { CommonActions } from '@react-navigation/native';
import { validateCredentials } from '../../utils/validations';
import { handleGoogleSignIn, signUpWithEmailAndPassword, configureGoogleSignIn, onAuthStateChanged } from '../../config/firbaseService';



    const SignUp: React.FC<{ navigation: any }> = ({ navigation }) => {
      
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  
    useEffect(() => {
      configureGoogleSignIn();
  
      const subscriber = onAuthStateChanged(user => {
        if (user) {
          navigation.replace('BottomTab');
        }
      });
  
      return () => subscriber();
    }, [navigation]);



    const handleSignUp = () => {
      signUpWithEmailAndPassword(email, password)
        .then(() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            })
          );
        })
        .catch((error) => {
          Alert.alert('Error', error.message);
        });
    };
    

    const validateSignUp = () => {
      validateCredentials(
        email,
        password,
        setEmailError,
        setPasswordError,
        handleSignUp,
        () => {},
        'signUp'
      );
    };
    
    
  

const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const gotoLogin = () => {
    navigation.navigate('Login');
  };


  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.keyboard}>
    <AppWrapper backgroundColor={colors.offwhite}>
        <ScrollView  contentContainerStyle={styles.scroll}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
      
      <Image source={Icons.splash_img} style={styles.splashimg}/>
      <View style={styles.header}>
              <Image style={styles.banner} source={Images.banner5} />
            </View>
            <View style={styles.bottom}>
              <Text style={styles.logintext}>Sign Up</Text>
              <CustomTextInput
                value={email}
                onChangeText={text => {
                  setEmail(text);
                  setEmailError('');
                }}
                placeholder="Email"
                icon={Icons.mail}
                errorMessage={emailError}
              />

              <CustomTextInput
                value={password}
                onChangeText={text => {
                  setPassword(text);
                  setPasswordError('');
                }}
                placeholder="Password"
                icon={Icons.pass}
                secureTextEntry={!passwordVisible}
                onIconPress={togglePasswordVisibility}
                errorMessage={passwordError}
              />
             <View style={styles.custombuttonview}>
              <CustomButton
                title="Sign Up"
                textStyle={styles.buttontext}
                borderRadius={50}
                backgroundColor={colors.zeptored}
                textColor={colors.white}
                onPress={validateSignUp}
              />
              </View>
              <View style={styles.divideview}>
                <View style={styles.orview}></View>
                <Text style={styles.ortext}>or</Text>
                <View style={styles.orview}></View>
              </View>

              <CustomButton
                icon={Icons.google}
                title="Sign in with Google"
                onPress={() => handleGoogleSignIn(navigation)}
                textStyle={styles.buttontext}
                borderRadius={50}
                backgroundColor={colors.white}
                textColor={colors.black}
                borderWidth={1}
                borderColor={colors.platinum}
              />

              <View style={styles.footer}>
                <Text style={styles.bytext}>Already have an account?</Text>
                <View>
                  <Text onPress={gotoLogin} style={styles.termstext}>
                    Login
                  </Text>
                </View>
              </View>
            </View>
      </ScrollView>
    </AppWrapper>
    </KeyboardAvoidingView>
  );
};



export default SignUp