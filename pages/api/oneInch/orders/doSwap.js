import Web3 from 'web3';
import fetch from 'node-fetch';

function doSwap({ fromTokenAddress, toTokenAddress, amount }) {
  const chainId = 61;
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

  const checkAllowance = () => {
    const apiRequestUrl = (methodName, queryParams) => {
      return apiBaseUrl + methodName + '?' + new URLSearchParams(queryParams).toString();
    };

    const allowance = (tokenAddress, walletAddress) => {
      return fetch(apiRequestUrl('/approve/allowance', { tokenAddress, walletAddress }))
        .then((res) => res.json())
        .then((res) => res.allowance);
    };

    const allowanceApproval = async () => await allowance(swapParams.fromTokenAddress, walletAddress);
    return allowanceApproval;
  };

  return { checkAllowance };
}

export default doSwap;
