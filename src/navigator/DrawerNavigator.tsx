import Header from '../components/Header'; // Import your custom header
import React from 'react';
import {SettingsScreen} from '../screens/SettingsScreen';
import TabsNavigator from './TabsNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const {width, height} = useWindowDimensions();

  const handleLoginPress = () => {
    // Handle login press
  };

  return (
    <Drawer.Navigator
      screenOptions={({route, navigation}) => ({
        drawerType: width >= height ? 'permanent' : 'front',
        drawerPosition: 'left',
        header: () => (
          <Header
            title={route.name}
            navigation={navigation}
            onLoginPress={handleLoginPress}
          />
        ),
      })}>
      <Drawer.Screen
        name="Home"
        options={{title: 'Home'}}
        component={TabsNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
