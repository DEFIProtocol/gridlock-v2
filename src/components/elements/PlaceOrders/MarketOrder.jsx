import React, { useState } from 'react';
//import { doSwap } from '../../../../pages/api/oneInch/orders';

function MarketOrder({ fromAddress, toAddress }) {
  //const { checkAllowance } = doSwap();
  const [allowanceIsOpen, setAllowanceIsOpen] = useState();

  return (
    <>
      <div>Market Order</div>
      <input type="text" />
    </>
  );
}

export default MarketOrder;
