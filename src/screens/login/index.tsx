import {View, Text, TouchableOpacity, Image,Alert, KeyboardAvoidingView, Platform, ScrollView, Modal, TouchableWithoutFeedback} from 'react-native';
import React, {useState,useEffect} from 'react';
import AppWrapper from '../../components/appWrapper';
import { colors } from '../../theme';
import styles from './styles';
import {Icons, Images} from '../../assets';
import CustomButton from '../../components/customButton';
import CustomTextInput from '../../components/customTextInput';
import { CommonActions } from '@react-navigation/native';
import { validateCredentials } from '../../utils/validations';
import { handleGoogleSignIn, signInWithEmailAndPassword, sendPasswordResetEmail, configureGoogleSignIn, onAuthStateChanged } from '../../config/firbaseService';
import ResetPassword from './resetModal';

const Login: React.FC<{ navigation: any }> = ({ navigation }) => {
      
const [email, setEmail] = useState<string>('');
const [password, setPassword] = useState<string>('');
const [emailError, setEmailError] = useState<string | null>(null);
const [passwordError, setPasswordError] = useState<string | null>(null);
const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
const [modalVisible, setModalVisible] = useState<boolean>(false);
const [resetEmail, setResetEmail] = useState<string>('');
const [resetEmailError, setResetEmailError] = useState<string | null>(null);

    useEffect(() => {
      configureGoogleSignIn();
  
      const subscriber = onAuthStateChanged(user => {
        if (user) {
          navigation.replace('BottomTab');
        }
      });
  
      return () => subscriber();
    }, [navigation]);
  
 
      const handleLogin = () => {
        signInWithEmailAndPassword(email, password)
          .then(() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: 'BottomTab' }],
              })
            );
          })
          .catch((error) => {
            Alert.alert('Error', error.message);
          });
      };

      const validateLogin = () => {
        validateCredentials(
          email,
          password,
          setEmailError,
          setPasswordError,
          () => {},
          handleLogin,
          'login'
        );
      };

      const handleForgotPassword = () => {
        if (!resetEmail) {
          setResetEmailError('Please enter your email address');
          return;
        }
        sendPasswordResetEmail(resetEmail)
          .catch((error) => {
            setResetEmailError(error.message);
          });
      };
    

const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const gotoSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <>
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
              <Text style={styles.logintext}>LogIn</Text>
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
                title="Login"
                // style={styles.custombutton}
                textStyle={styles.buttontext}
                borderRadius={50}
                backgroundColor={colors.zeptored}
                textColor={colors.white}
                onPress={validateLogin}
              />
              </View>

              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={styles.forgot} >Forgot Password?</Text>
              </TouchableOpacity>

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
                <Text style={styles.bytext}>Don't have an account?</Text>
                <View>
                  <Text onPress={gotoSignUp} style={styles.termstext}>
                    Sign Up
                  </Text>
                </View>
              </View>
            </View>
      </ScrollView>
    </AppWrapper>
    </KeyboardAvoidingView>
  
        <ResetPassword
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        resetEmail={resetEmail}
        setResetEmail={setResetEmail}
        resetEmailError={resetEmailError}
        setResetEmailError={setResetEmailError}
        onResetPassword={handleForgotPassword}
      />
    </>
  );
};



export default Login