import { Default } from 'components/layouts/Default';
import { useRouter } from 'next/router';
import React from 'react';
import { Order } from '../src/components/elements/PlaceOrders';

export default function name() {
  const router = useRouter();
  const { name } = router.query;
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
