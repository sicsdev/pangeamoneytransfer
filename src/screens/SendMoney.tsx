import CountryPicker, {
  Country,
  CountryCode,
} from 'react-native-country-picker-modal';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {colors} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const SendMoney = () => {
  const {top} = useSafeAreaInsets();
  const [amount, setAmount] = useState<string | undefined>('100.00');
  const [countryCode, setCountryCode] = useState<CountryCode>('FR');
  const [country, setCountry] = useState<Country | null>(null);
  const [isCountryPickerVisible, setCountryPickerVisible] = useState(false);

  useEffect(() => {
    // console.log('Tab1Screen.tsx effect');
  }, []);

  const usdAmount = parseFloat(amount ?? '100.00');
  const mxnAmount = (usdAmount * 19.9).toFixed(2);

  const counterModelOpen = () => {
    setCountryPickerVisible(true);
  };

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCountry(country);
    setCountryPickerVisible(false); // Hide the modal after selection
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.offerContainer}>
        <Image
          source={require('../assets/gift.png')}
          style={styles.offerImage}
          resizeMode="contain"
        />
        <Text style={styles.offerText}>NEW CUSTOMER OFFER!*</Text>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.rateContainer}>
          <Text style={styles.rateText}>
            1 USD = 19.90 MXN{' '}
            <Text style={styles.strikethroughText}>19.90 MXN</Text>
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={counterModelOpen}>
            <Image
              source={require('../assets/india.png')}
              style={styles.countryImage}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/dropdown.png')}
              style={styles.rateImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        {isCountryPickerVisible && (
          <View style={styles.countryPickerContainer}>
            <CountryPicker
              countryCode={countryCode}
              withFilter={false}
              withCloseButton={false}
              withFlag
              withCountryNameButton
              withCallingCode
              withEmoji
              onSelect={onSelect}
              visible={isCountryPickerVisible}
              onClose={() => setCountryPickerVisible(false)}
            />
          </View>
        )}

        <View style={styles.exchangeContainer}>
          <View style={styles.exchangeDetail}>
            <View style={styles.exchangeRow}>
              <Text style={styles.exchangeLabel}>You Send</Text>
              <Text style={styles.exchangeLabel}>USD</Text>
            </View>
            <View style={styles.amountInputContainer}>
              <TextInput
                style={styles.amountInput}
                keyboardType="numeric"
                placeholder="Enter amount"
                value={amount}
                onChangeText={text => setAmount(text)}
              />
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.exchangeDetails}>
            <View style={styles.exchangeRow}>
              <Text style={styles.exchangeLabel}>They Get</Text>
              <Text style={styles.exchangeLabel}>MXN</Text>
            </View>
            <View style={styles.amountDetailsContainer}>
              <View style={styles.amountContainer}>
                <TextInput
                  style={styles.amountInput}
                  keyboardType="numeric"
                  placeholder="Amount"
                  editable={false}
                  value={mxnAmount}
                />
                <Text style={styles.paymentMethodLabel}>
                  Pay with Debit/Credit
                </Text>
              </View>
              <View style={styles.amountContainer}>
                <TextInput
                  style={styles.amountInput}
                  keyboardType="numeric"
                  placeholder="Amount"
                  editable={false}
                  value={mxnAmount}
                />
                <Text style={styles.paymentMethodLabel}>
                  Pay with Bank Account
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.feeContainer}>
          <Text style={styles.rateTextFee}>
            $1.95
            <Text style={styles.rateTextFeeLight}> Fee: Bank Deposit</Text>
          </Text>
          <Text style={styles.rateTextFee}>
            $3.95
            <Text style={styles.rateTextFeeLight}> Fee: Cash Pickup</Text>
          </Text>
          <Text style={styles.rateTextNo}>
            NO TRANSFER FEE{' '}
            <Text style={styles.rateTextFeeLight}>on First Transfer*</Text>
          </Text>
        </View>
        <TouchableOpacity style={styles.getStartedButton}>
          <Text style={styles.getStartedButtonText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>
          * Offer for new and qualified existing customers only. Promotional
          rate applies to the first $500 USD only; remaining transfer amount
          will be converted at standard rate. Rates subject to change.{' '}
          <Text style={styles.seeTerms}> See terms for details</Text>
        </Text>
        <Text style={styles.termsText}>
          + Transfer Fee listed does not include credit card transaction fees,
          transfers scheduled in advance, or exchange rate gains.
        </Text>
      </View>
      <View style={styles.bannerView}>
        <Image
          source={require('../assets/banner.png')}
          style={styles.banner}></Image>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  offerContainer: {
    height: 50,
    width: '90%',
    backgroundColor: colors.green,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  offerImage: {
    height: 25,
    width: 25,
    tintColor: colors.white,
  },
  offerText: {
    marginLeft: 10,
    fontSize: 12,
    color: colors.white,
  },
  detailsContainer: {
    width: '90%',
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 10,
  },
  rateContainer: {
    width: '90%',
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  rateText: {
    fontSize: 14,
    color: colors.green,
  },
  rateTextNo: {
    fontSize: 12,
    color: colors.green,
    fontWeight: 'bold',
  },
  rateTextFee: {
    fontSize: 12,
    color: colors.black,
    fontWeight: 'bold',
  },
  rateTextFeeLight: {
    fontSize: 12,
    color: colors.gray,
  },
  strikethroughText: {
    textDecorationLine: 'line-through',
    color: colors.gray,
  },
  seeTerms: {
    fontSize: 10,
    color: colors.primary,
    textDecorationLine: 'underline',
  },
  rateImage: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
  countryImage: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    marginRight: 5,
  },
  exchangeContainer: {
    width: '90%',
    flexDirection: 'row',
    height: 140,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  exchangeDetail: {
    width: '45%',
    flexDirection: 'column',
    height: '90%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  exchangeDetails: {
    width: '45%',
    flexDirection: 'column',
    height: '90%',
  },
  exchangeRow: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '20%',
  },
  separator: {
    height: '90%',
    width: 1,
    backgroundColor: 'black',
  },
  amountInput: {
    height: 40,
    width: '80%',
  },
  amountInputContainer: {
    height: '80%',
    justifyContent: 'center',
    width: '100%',
  },
  amountContainer: {
    width: '100%',
  },
  amountDetailsContainer: {
    height: '80%',
    justifyContent: 'center',
  },
  exchangeLabel: {
    fontSize: 10,
    color: colors.gray,
  },
  paymentMethodLabel: {
    fontSize: 10,
    color: colors.gray,
  },
  feeContainer: {
    width: '90%',
    marginTop: 10,
    marginBottom: 10,
  },
  getStartedButton: {
    height: 40,
    width: '90%',
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  getStartedButtonText: {
    color: 'white',
  },
  termsContainer: {
    width: '90%',
    marginTop: 10,
    marginBottom: 10,
  },
  termsText: {
    marginTop: 10,
    color: colors.gray,
    fontSize: 10,
  },
  bannerView: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    height: '100%',
    width: '95%',
    resizeMode: 'stretch',
  },
  countryPickerContainer: {
    position: 'absolute',
    bottom: 0,
    height: '70%',
    width: '100%',
    backgroundColor: 'white',
  },
});
