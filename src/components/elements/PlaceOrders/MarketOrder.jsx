import React, { useState } from 'react';
import { checkAllowance } from '../../pages/api/oneInch/orders';

function MarketOrder({ fromAddress, toAddress }) {
  const [allowanceIsOpen, setAllowanceIsOpen] = useState();

  const allowance = checkAllowance(fromAddress, toAddress, amount);

  return (
    <>
      <div>Market Order</div>
      <input type="text" />
    </>
  );
}

export default MarketOrder;
