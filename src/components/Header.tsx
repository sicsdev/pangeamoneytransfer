import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';
import {colors} from '../theme/appTheme';

type HeaderProps = {
  title: string;
  navigation: any;
  onLoginPress: () => void;
};

const Header: React.FC<HeaderProps> = ({title, navigation, onLoginPress}) => {
  const handleMenuPress = () => {
    navigation.toggleDrawer();
  };

  return (
    <SafeAreaView style={{backgroundColor: colors.white}}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={handleMenuPress}
          style={styles.menuIconContainer}>
          <Image
            source={require('../assets/settings.png')}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <Image source={require('../assets/appName.png')} style={styles.logo} />
        <TouchableOpacity
          onPress={onLoginPress}
          style={styles.loginButtonContainer}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingHorizontal: 10,
    height: 60,
  },
  menuIconContainer: {
    padding: 10,
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
    tintColor: colors.primary,
  },
  loginButtonContainer: {
    padding: 10,
  },
  loginButtonText: {
    fontSize: 16,
    color: colors.primary,
  },
});

export default Header;
