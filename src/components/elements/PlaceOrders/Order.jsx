import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import LimitOrder from './LimitOrder';
import MarketOrder from './MarketOrder';
import allowance from './components/allowance';

const style = {
  card: {
    backgroundColor: '#505050',
    width: '35%',
    float: 'right',
    color: 'lime',
    border: '1px solid #202020',
    margin: '5px auto',
  },
  orderChoice: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
  },
  selected: {
    color: 'lime',
    borderBottom: '3px solid lime',
  },
  unselected: {
    color: 'white',
  },
};

function Order() {
  const [orderType, setOrderType] = useState('limit');
  const [userAddress, setUserAddress] = useState();

  return (
    <>
      <Card style={style.card}>
        <div style={style.orderChoice}>
          <span onClick={() => setOrderType('limit')} style={orderType == 'limit' ? style.selected : style.unselected}>
            Limit Order
          </span>
          <span style={orderType == 'limit' ? style.unselected : style.selected} onClick={() => setOrderType('market')}>
            Market Order
          </span>
        </div>
        {orderType == 'limit' ? (
          <LimitOrder walletAddress={userAddress} />
        ) : (
          <MarketOrder walletAddress={userAddress} />
        )}
      </Card>
    </>
  );
}

export default Order;
