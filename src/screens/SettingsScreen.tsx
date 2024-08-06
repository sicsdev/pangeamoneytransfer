import React, {useContext} from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text, View} from 'react-native';

import {AuthContext} from '../context/AuthContext';
import {styles} from '../theme/appTheme';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  //Para tener la información del context
  const {authState} = useContext(AuthContext);

  return (
    <View
      style={{
        ...styles.globalMargin,
        marginTop: insets.top,
      }}>
      <Text style={styles.title}>Settings Screen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>

      {authState.favoriteIcon && <View style={{backgroundColor: 'red'}}></View>}
    </View>
  );
};
