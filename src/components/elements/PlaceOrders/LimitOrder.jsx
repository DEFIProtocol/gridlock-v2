import React, { useState } from 'react';

const style = {
  checkbox: {},
  input: {},
  button: {
    backgroundColor: 'green',
    margin: '10px',
    height: '40px',
    width: '80px',
    borderRadius: '0.5rem',
  },
  container: {},
};

function LimitOrder() {
  const [checked, setChecked] = useState({
    ethEx: false,
    usdEx: true,
  });

  const handleCheck = (e) => {
    if (e == 'ethEx') {
      setChecked({
        ethEx: true,
        usdEx: false,
      });
    } else {
      setChecked({
        ethEx: false,
        usdEx: true,
      });
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        name="Priced in USD"
        value="usdEx"
        checked={checked.usdEx}
        onChange={(e) => handleCheck(e.target.value)}
      />
      <label htmlFor="usdEx" style={{ color: 'DarkGray' }}>
        {' '}
        Order Priced in USD
      </label>
      <input
        type="checkbox"
        name="Priced in Eth"
        value="ethEx"
        checked={checked.ethEx}
        onChange={(e) => handleCheck(e.target.value)}
      />
      <label htmlFor="ethEx" style={{ color: 'DarkGray' }}>
        {' '}
        Order Priced in ETH
      </label>
      <input type="number" placeholder="Price" />
      <input type="number" placeholder="Amount" />
      <button style={style.button} type="button" placeholder="Buy" />
      <button style={style.button} type="button" placeholder="Sell" />
    </div>
  );
}

export default LimitOrder;
