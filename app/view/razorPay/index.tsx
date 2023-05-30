import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import RazorpayCheckout from 'react-native-razorpay';

const PaymentGatewayScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_2UY9vyzY0PmQFa', // Your api key
            amount: 500,
            name: 'Saurabh Vishwkarma',
            prefill: {
              email: 'void@razorpay.com',
              contact: '6386732681',
              name: 'Razorpay Software',
            },
            theme: {color: '#F37254'},
            order_id: '',
          };
          RazorpayCheckout.open(options)
            .then((data: {razorpay_payment_id: any}) => {
              console.warn(`Success: ${data.razorpay_payment_id}`);
            })
            .catch((error: {code: any; description: any}) => {
              console.warn(`Error: ${error.code} | ${error.description}`);
            });
        }}
        style={styles.paymentBtn}>
        <Text style={styles.btnName}>Payment by RazorPay</Text>
      </TouchableOpacity>
      <View />
    </View>
  );
};
export default PaymentGatewayScreen;
