import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, Platform } from 'react-native';
import AppWrapper from '../../components/appWrapper';
import AppHeader from '../../components/appHeader';
import { colors } from '../../theme';
import styles from './styles';
import { Icons, Images } from '../../assets';
import { vh } from '../../theme/dimensions';
import CustomButton from '../../components/customButton';
import strings from '../../utils/strings';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { logout } from '../../config/firbaseService';
import Toast from 'react-native-simple-toast';
import MenuItem from '../../components/menuButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { checkLoginStatus } from '../../utils/common';

type NavigationProp = StackNavigationProp<any>;

const LoginSign: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const [userName, setUserName] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userInitial, setUserInitial] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

 


  useEffect(() => {
    const checkLogin = async () => {
      const isUserLoggedIn = await checkLoginStatus();
      setIsLoggedIn(isUserLoggedIn);

      if (isUserLoggedIn) {
        const user = auth().currentUser;
        if (user) {
          const displayName = user.displayName || user.email?.split('@')[0];
          setUserName(displayName);
          setUserEmail(user.email);
          setUserInitial(displayName ? displayName[0] : user.email?.[0]);
        }
      }
    };
    checkLogin();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppWrapper>
      <AppHeader
        title={strings.profile}
        backicon={Icons.back}
        backColor={colors.grey}
        backHeight={19}
        backWidth={19}
        marginLeft={10}
        backgroundColor={Platform.OS === 'android' ? colors.white : 'none'}
      />
 

{isLoggedIn ? (
        <View>
          <ImageBackground
            source={Images.insiderbg}
            style={styles.userInfo}
            resizeMode="stretch"
          >
            <View style={styles.splashview}>
              <Image source={Icons.splash_img} style={styles.splash} />
              <Image source={Icons.insider} style={styles.insider} />
            </View>
            <Text style={styles.userName}>{userName}!</Text>
            <View style={styles.eliteview}>
              <Image source={Icons.crown} style={styles.crown} />
              <Text style={styles.elite}>Elite Member</Text>
            </View>
          </ImageBackground>

          <View style={styles.shoppingSection}>
            <Text style={styles.sectionTitle}>Shopping for {userName}</Text>
            <View style={styles.userIcon}>
              <View style={styles.user}>
                <Text style={styles.userInitial}>{userInitial}</Text>
              </View>
              <View style={styles.admin}>
                <Text style={styles.userRole}>Admin</Text>
              </View>
            </View>
            <Text style={styles.adminUser}>{userName}</Text>
          </View>

          <Image source={Images.bargains} style={styles.adBanner} />

          <View style={styles.menu}>
            <MenuItem icon={Icons.orders} label="Orders" />
            <MenuItem icon={Icons.crown} label="Insider" />
            <MenuItem icon={Icons.help} label="Help Center" />
            <MenuItem icon={Icons.coupon} label="Coupons" />
          </View>

          <CustomButton
            onPress={handleLogout}
            title="LOG OUT"
            textColor={colors.zeptored}
            borderColor={colors.zeptored}
            style={styles.button}
            borderWidth={1}
            backgroundColor={colors.screengrey}
          />
        </View>
      ) : (
        <>
          <View style={styles.topview}></View>
          <View style={styles.lowerview}>
            <View style={styles.profileview}>
              <Image source={Icons.user} style={styles.profile} />
            </View>
            <View style={styles.loginview}>
              <CustomButton
                title={strings.Log}
                backgroundColor={colors.zeptored}
                textColor={colors.white}
                borderRadius={5}
                paddingHorizontal={vh(60)}
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          </View>
        </>
      )}
    </AppWrapper>
  );
};

export default LoginSign;

