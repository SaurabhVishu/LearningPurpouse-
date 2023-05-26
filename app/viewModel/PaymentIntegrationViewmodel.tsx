import React from 'react';
import PaymentGatewayScreen from '../view/razorPay';

interface PaymentGatwayData {
  navigation: any;
}

const PaymentGatwayViewModel = (props: PaymentGatwayData) => {
  const {navigation} = props;
  return (
    <PaymentGatewayScreen
      {...{
        navigation,
      }}
    />
  );
};

export default PaymentGatwayViewModel;
