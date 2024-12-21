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
  
  interface SignUpProps {
    navigation: NavigationProps;
  }

  const SignUp: React.FC<SignUpProps> = ({navigation}) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const [nameError, setNameError] = useState<string | null>(null);

    const validateSignUp = () => {
      let flag = true;
  
      if (!name || !email || !password) {
        Alert.alert('Please fill all the fields');
        return;
      }
  
      if (name.length < 2) {
        setNameError('Name must be at least 2 characters long');
        flag = false;
      } else {
        setNameError(null);
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

const handleSignUp=() =>{

}

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
      <AppHeader rightIcon1={Icons.cross} rightHeight={20} rightWidth={20} backicon={Icons.splash_img} backWidth={42} backHeight={40}/>
      <View style={styles.header}>
              <Image style={styles.banner} source={Images.banner5} />
            </View>
            <View style={styles.bottom}>
              <Text style={styles.logintext}>Sign Up</Text>
              <CustomTextInput
                value={name}
                onChangeText={text => {
                  setName(text);
                  setNameError('');
                }}
                placeholder="Name"
                icon={Icons.user}
                errorMessage={nameError}
              />
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
                title="Sign Up"
                style={styles.custombutton}
                textStyle={{fontWeight: '700', fontSize:20}}
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
                // onPress={onGoogleButtonPress}
                textStyle={{fontWeight: '700', fontSize:20}}
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