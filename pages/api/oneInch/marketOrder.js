import fetch from 'node-fetch';
//https://api.1inch.io/v5.0/1/swap?fromTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&toTokenAddress=0x111111111117dc0aa78b770fa6a738034120c302&amount=10000000000000000&fromAddress=0x911158658d4530710F6d6D59156db174BEfD4Dac&slippage=1&destReceiver=0x911158658d4530710F6d6D59156db174BEfD4Dac&referrerAddress=0x911158658d4530710F6d6D59156db174BEfD4Dac&fee=1&allowPartialFill=true

function marketOrder({ walletAddress, tokenAddress, amount }) {
  const ethAddress = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';

  const quote = () => {
    fetch(
      `https://api.1inch.io/v5.0/1/quote?fromTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&toTokenAddress=${tokenAddress}&amount=${amount}&fee=1.25`,
    ).then((res) => res.json());
  };

  //const marketOrd = async () => {
  //    fetch(
  //      `https://api.1inch.io/v5.0/1/swap?fromTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&toTokenAddress=${tokenAddress}&amount=${amount}&fromAddress=${walletAddress}&slippage=1&destReceiver=${walletAddress}&referrerAddress=0x911158658d4530710F6d6D59156db174BEfD4Dac&fee=1`
  //    )
  //}

  return { quote /*, marketOrd*/ };
}

export default marketOrder;
