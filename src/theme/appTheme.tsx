import {StyleSheet} from 'react-native';
import {green} from 'react-native-reanimated/lib/typescript/Colors';

export const colors = {
  primary: '#15ACC7',
  green: '#76BD5F',
  white: '#ffffff',
  black: '#000000',
  gray: '#808080',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 10,
  },
  title: {
    fontSize: 30,
    marginVertical: 5,
  },
  buttonNavigator: {
    width: 100,
    height: 100,
    borderRadius: 20,
    //backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  menuContainer: {
    flex: 1,
    //backgroundColor: 'blue',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  menuItem: {
    marginLeft: 2,
    fontSize: 18,
  },
  menuButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    //backgroundColor: 'red',
    marginVertical: 10,
  },
});
