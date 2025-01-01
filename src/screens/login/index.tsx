import {View, Text, TouchableOpacity, Image,Alert, KeyboardAvoidingView, Platform, ScrollView, Modal, TouchableWithoutFeedback} from 'react-native';
import React, {useState,useEffect} from 'react';
import AppWrapper from '../../components/appWrapper';
import AppHeader from '../../components/appHeader';
import {colors} from '../../theme';
import { vh } from '../../theme/dimensions';
import styles from './styles';
import {Icons, Images} from '../../assets';
import CustomButton from '../../components/customButton';
import CustomTextInput from '../../components/customTextInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Toast from 'react-native-simple-toast';
import { CommonActions } from '@react-navigation/native';
import { validateCredentials } from '../../utils/validations';



  

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
      console.log("Login screen loaded");
      GoogleSignin.configure({
        webClientId:
          '697757617336-uimalgjb0ns634f5qmimj4shae19h5rr.apps.googleusercontent.com',
        offlineAccess: true,
      });
  
      const subscriber = auth().onAuthStateChanged(user => {
        if (user) {
          // Toast.show('User is  signed in', Toast.SHORT);
          navigation.replace('BottomTab');
        } else {
          // Toast.show('User is not signed in', Toast.SHORT);
        }
      });
  
      return () => subscriber();
    }, [navigation]);
  
 

    const onGoogleButtonPress = async () => {
      try {
        await GoogleSignin.hasPlayServices();
        const response = await GoogleSignin.signIn();
        const idToken = response?.data?.idToken;
    
        if (!idToken) {
          throw new Error('Google sign-in did not return an ID token.');
        }
    
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        await auth().signInWithCredential(googleCredential);
        await AsyncStorage.setItem('key', 'true');
    
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'BottomTab' }],
          })
        );
      } catch (error: any) {
        Alert.alert('Error signing in: ', error.message);
      }
    };
  
      const handleLogin = async () => {
        try {
          await auth().signInWithEmailAndPassword(email, password);
          await AsyncStorage.setItem('key', 'true');
          Toast.show('User logged in successfully', Toast.SHORT);
      
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'BottomTab' }],
            })
          );
        } catch (error: any) {
          if (error.code === 'auth/user-not-found') {
            setEmailError(
              "Can't find Account. The email that you entered doesn't have an account associated with it."
            );
          } else {
            Alert.alert('Error', error.message);
          }
        }
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


      const handleForgotPassword = async () => {
        if (!resetEmail) {
          setResetEmailError('Please enter your email address');
          return;
        }
    
        try {
          await auth().sendPasswordResetEmail(resetEmail);
          console.log('Password reset email sent!');
          Toast.show('Password reset email sent!', Toast.SHORT);
          setModalVisible(false);
          setResetEmail('');
        } catch (error: any) {
          console.log('Error sending reset email:', error);
          setResetEmailError('Error sending reset password email');
        }
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
                style={styles.custombutton}
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
                onPress={onGoogleButtonPress}
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
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <TouchableWithoutFeedback
          onPress={() => {
            setModalVisible(false);
            setResetEmailError('');
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Reset Your Password</Text>
              <Text style={styles.modalText}>
                Enter your email and you may receive a link to reset your
                password.
              </Text>
              <CustomTextInput
                value={resetEmail}
                onChangeText={text => {
                  setResetEmail(text);
                  setResetEmailError('');
                }}
                placeholder="Enter your email"
                // icon={Icons.mail}
                errorMessage={resetEmailError}
              />
              <View style={styles.modalButtons}>
                <CustomButton
                  title="Reset"
                  style={styles.custombutton}
                  textStyle={{fontWeight: '500'}}
                  borderRadius={5}
                  backgroundColor={colors.reddish}
                  textColor={colors.white}
                  onPress={handleForgotPassword}
                 
                />
                <CustomButton
                  title="Cancel"
                  style={styles.custombutton}
                  textStyle={{fontWeight: '500'}}
                  borderRadius={5}
                  backgroundColor={colors.grey}
                  textColor={colors.white}
                  onPress={() => {
                    setModalVisible(false);
                    setResetEmailError('');
                  }}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};



export default Login