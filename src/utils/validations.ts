
import { Alert } from 'react-native';
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;

export const validateCredentials = (
  email: string,
  password: string,
  setEmailError: (error: string | null) => void,
  setPasswordError: (error: string | null) => void,
  handleSignUp: () => void,
  handleLogin: () => void,
  type: 'signUp' | 'login'
) => {
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
    if (type === 'signUp') {
      handleSignUp();
    } else if (type === 'login') {
      handleLogin();
    }
  }
};

