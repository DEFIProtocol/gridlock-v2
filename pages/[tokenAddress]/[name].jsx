import { Default } from 'components/layouts/Default';
import { useRouter } from 'next/router';
import React from 'react';
import { Order } from '../../src/components/elements/PlaceOrders';
import { useAccount } from 'wagmi';
import { marketOrder } from '../api/oneInch';

export default function name() {
  const router = useRouter();
  const { tokenAddress, name } = router.query;
  const { address, isConnected } = useAccount();
  var walletAddress = address;
  var amount = '100';
  const { /*marketOrd,*/ quote } = marketOrder({ tokenAddress, walletAddress, amount });
  console.log(tokenAddress);

  return (
    <>
      <Default pageName={`${name}`}>
        <p>
          {name} <br />
        </p>
        <Order marketOrd={quote} quote={quote} />
      </Default>
    </>
  );
}
