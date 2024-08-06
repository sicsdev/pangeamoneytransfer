import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

export const Activity = () => {
  useEffect(() => {
    //console.log('Activity.tsx effect');
  }, []);

  return (
    <View>
      <Text>Activity</Text>
    </View>
  );
};
