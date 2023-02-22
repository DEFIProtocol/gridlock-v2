import { Default } from 'components/layouts/Default';
import { useRouter } from 'next/router';
import React from 'react';
import { Order } from '../../src/components/elements/PlaceOrders';
import { useAccount } from 'wagmi';

export default function name() {
  const router = useRouter();
  const { tokenAddress, name } = router.query;
  const { address, isConnected } = useAccount();
  console.log(tokenAddress);
  console.log(address);
  console.log(isConnected);

  return (
    <>
      <Default pageName={`${name}`}>
        <p>
          {name} <br />
        </p>
        <Order />
      </Default>
    </>
  );
}
