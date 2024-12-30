import {View, Text, TouchableOpacity, Image,Alert, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import React, {useState,useEffect} from 'react';
import AppWrapper from '../../components/appWrapper';
import {colors} from '../../theme';
import styles from './styles';
import {Icons, Images} from '../../assets';
import CustomButton from '../../components/customButton';
import {emailRegex,specialCharacterRegex} from '../../utils/regex';
import CustomTextInput from '../../components/customTextInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Toast from 'react-native-simple-toast';



type NavigationProps = {
    navigate: (screen: string) => void;
    replace: (screen: string) => void;
  };
  
  interface SignUpProps {
    navigation: NavigationProps;
  }

  const SignUp: React.FC<SignUpProps> = ({navigation}) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);


    useEffect(() => {
      GoogleSignin.configure({
        webClientId:
          '697757617336-uimalgjb0ns634f5qmimj4shae19h5rr.apps.googleusercontent.com',
        offlineAccess: true,
      });
  
      const subscriber = auth().onAuthStateChanged(user => {
        if (user) {
          // // Toast.show('User is  signed in', Toast.SHORT);
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
        console.log('id token', response);
  
        const idToken = response?.data?.idToken;
        if (!idToken) {
          throw new Error('Google sign-in did not return an ID token.');
        }
  
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        await auth().signInWithCredential(googleCredential);
        await AsyncStorage.setItem('key', 'true');
        Toast.show('User logged in successfully!', Toast.SHORT);
        navigation.replace('BottomTab');
      } catch (error: any) {
        Alert.alert('Error signing in: ', error.message);
      }
    };

   


    const validateSignUp = () => {
      let flag = true;
  
      if (!email || !password) {
        Alert.alert('Please fill all the fields');
        return;
      }
  
      if (!specialCharacterRegex.test(password)) {
        setPasswordError('Password must contain at least one special symbol');
        flag = false;
      } else {
        setPasswordError(null);
      }
  
      if (!emailRegex.test(email)) {
        setEmailError('Invalid email address');
        flag = false;
      } else {
        setEmailError(null);
      }
  
      if (flag) {
        handleSignUp();
      }
    };

    const handleSignUp = async () => {
      try {
        const userCredential = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );
        Toast.show('User Registered successfully!', Toast.SHORT);
        navigation.navigate('Login');
      } catch (error: any) {
        Alert.alert('Error', error.message);
      }
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
                onPress={onGoogleButtonPress}
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