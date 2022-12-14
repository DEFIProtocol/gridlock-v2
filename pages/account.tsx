import { Default } from 'components/layouts/Default';
import { Transactions } from 'components/templates/transactions';
import { Transfer } from 'components/elements/TransferAssets';
import React, { useState } from 'react';

const account = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Default pageName="Transactions">
      <h4
        style={{
          color: '#909090',
          borderBottom: '3px solid #909090',
          width: '90%',
        }}
      >
        Transfer Assets
      </h4>
      <button
        style={{
          backgroundColor: 'lime',
          margin: '10px',
          float: 'left',
          borderRadius: '0.5rem',
          border: '3px solid black',
        }}
        onClick={() => setIsOpen(true)}
      >
        Transfer
      </button>
      <Transfer open={isOpen} onClose={() => setIsOpen(false)} />
      <Transactions />
    </Default>
  );
};

export default account;
