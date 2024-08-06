import {Activity} from '../screens/Activity';
import {Image} from 'react-native';
import {PayBills} from '../screens/PayBills';
import React from 'react';
import {SendMoney} from '../screens/SendMoney';
import {colors} from '../theme/appTheme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: 'grey',
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconSource;
          switch (route.name) {
            case 'SendMoneyScreen':
              iconSource = require('../assets/sendMoney.png');
              break;
            case 'PayBillScreen':
              iconSource = require('../assets/payBill.png');
              break;
            case 'ActivityScreen':
              iconSource = require('../assets/activity.png');
              break;
            default:
              iconSource = null; // fallback icon
              break;
          }
          return (
            <Image
              source={iconSource}
              style={{
                width: size,
                height: size,
                tintColor: color,
                resizeMode: 'contain',
              }}
            />
          );
        },
      })}>
      <BottomTab.Screen
        name="SendMoneyScreen"
        options={{title: 'Send Money', headerShown: false}}
        component={SendMoney}
      />
      <BottomTab.Screen
        name="PayBillScreen"
        options={{title: 'Pay Bill', headerShown: false}}
        component={PayBills}
      />
      <BottomTab.Screen
        name="ActivityScreen"
        options={{title: 'Activity', headerShown: false}}
        component={Activity}
      />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
