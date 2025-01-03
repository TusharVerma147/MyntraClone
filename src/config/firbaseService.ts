import React,{useEffect} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
import Toast from 'react-native-simple-toast';


export const configureGoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId:
      '697757617336-uimalgjb0ns634f5qmimj4shae19h5rr.apps.googleusercontent.com',
    offlineAccess: true,
  });
};

export const signInWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
    await AsyncStorage.setItem('key', 'true');
    Toast.show('User logged in successfully', Toast.SHORT);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const signUpWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
    await auth().signOut();
    Toast.show('User signed up successfully', Toast.SHORT);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const handleGoogleSignIn = async (navigation: any) => {
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
        routes: [{name: 'BottomTab'}],
      }),
    );
  } catch (error: any) {
    throw new Error('Error signing in with Google: ' + error.message);
  }
};

export const sendPasswordResetEmail = async (email: string) => {
  try {
    await auth().sendPasswordResetEmail(email);
    Toast.show('Password reset email sent!', Toast.SHORT);
  } catch (error: any) {
    throw new Error('Error sending reset password email');
  }
};

export const onAuthStateChanged = (
  setUser: React.Dispatch<React.SetStateAction<FirebaseAuthTypes.User | null>>,
) => {
  return auth().onAuthStateChanged((user: FirebaseAuthTypes.User | null) => {
    setUser(user);
  });
};

export const logout = async () => {
  try {
    await auth().signOut();
    await AsyncStorage.removeItem('key');
    Toast.show('Logged out successfully', Toast.SHORT);
  } catch (error: any) {
    Toast.show('Error logging out', Toast.SHORT);
  }
};





