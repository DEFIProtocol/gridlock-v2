import React from 'react';
import web3 from 'web3';

function checkAllowance({ fromTokenAddress, toTokenAddress, amount }) {
  const Web3 = require('web3');
  const fetch = require('node-fetch');
  const yesno = require('yesno');

  const chainId = 56;
  const web3RpcUrl = 'https://bsc-dataseed.binance.org';
  const walletAddress = '0x...xxx'; // Set your wallet address
  const privateKey = '0x...xxx'; // Set private key of your wallet. Be careful! Don't share this key to anyone!

  const swapParams = {
    fromTokenAddress: fromTokenAddress, // 1INCH
    toTokenAddress: toTokenAddress, // DAI
    amount: amount,
    fromAddress: walletAddress,
    slippage: 1,
    disableEstimate: false,
    allowPartialFill: false,
  };

  const broadcastApiUrl = 'https://tx-gateway.1inch.io/v1.1/' + chainId + '/broadcast';
  const apiBaseUrl = 'https://api.1inch.io/v4.0/' + chainId;
  const web3 = new Web3(web3RpcUrl);

  const apiRequestUrl = (methodName, queryParams) => {
    return apiBaseUrl + methodName + '?' + new URLSearchParams(queryParams).toString();
  };

  const checkAllowance = (tokenAddress, walletAddress) => {
    return fetch(apiRequestUrl('/approve/allowance', { tokenAddress, walletAddress }))
      .then((res) => res.json())
      .then((res) => res.allowance);
  };

  const allowance = async () => await checkAllowance(swapParams.fromTokenAddress, walletAddress);

  console.log('Allowance: ', allowance);

  return { allowance };
}

export default checkAllowance;
