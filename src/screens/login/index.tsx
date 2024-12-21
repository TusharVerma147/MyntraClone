import {View, Text, TouchableOpacity, Image,Alert, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import React, {useState,useEffect} from 'react';
import AppWrapper from '../../components/appWrapper';
import AppHeader from '../../components/appHeader';
import {colors} from '../../theme';
import {vh, vw} from '../../theme/dimensions';
import styles from './styles';
import {Icons, Images} from '../../assets';
import CustomButton from '../../components/customButton';
import strings from '../../utils/strings';
import {emailRegex,specialCharacterRegex} from '../../utils/regex';
import CustomTextInput from '../../components/customTextInput';

type NavigationProps = {
    navigate: (screen: string) => void;
    replace: (screen: string) => void;
  };
  
  interface LoginProps {
    navigation: NavigationProps;
  }

  const Login: React.FC<LoginProps> = ({navigation}) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [resetEmail, setResetEmail] = useState<string>('');
    const [resetEmailError, setResetEmailError] = useState<string | null>(null);

    const validateLogin = () => {
        let flag = true;
        if (!email || !password) {
          Alert.alert('Please fill the user credentials');
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
          handleLogin();
        }
      };

const handleLogin =() =>{

}

const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const gotoSignUp = () => {
    navigation.navigate('SignUp');
  };


  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.keyboard}>
    <AppWrapper backgroundColor={colors.offwhite}>
        <ScrollView  contentContainerStyle={styles.scroll}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
      <AppHeader rightIcon1={Icons.cross} rightHeight={20} rightWidth={20} backicon={Icons.splash_img} backWidth={42} backHeight={40}/>
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
             <View style={{marginTop:10}}>
              <CustomButton
                title="Login"
                style={styles.custombutton}
                textStyle={{fontWeight: '700', fontSize:20}}
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
                // onPress={onGoogleButtonPress}
                textStyle={{fontWeight: '700', fontSize:20}}
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
  );
};



export default Login