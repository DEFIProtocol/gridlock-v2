import { Default } from 'components/layouts/Default';
import { Transactions } from 'components/templates/transactions';
import { Transfer } from 'components/elements/TransferAssets';
import React, { useState } from 'react';

const styles = {
  sectionTitle: {
    color: '#909090',
    borderBottom: '3px solid #909090',
    width: '90%',
  },
  button: {
    backgroundColor: 'lime',
    margin: '10px',
    float: 'left',
    borderRadius: '0.5rem',
    border: '3px solid black',
  },
};

const account = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Default pageName="Account">
      <h4 style={styles.sectionTitle}>Transfer Assets</h4>
      <button style={styles.button} onClick={() => setIsOpen(true)}>
        Transfer
      </button>
      <Transfer open={isOpen} onClose={() => setIsOpen(false)} />
      <Transactions />
    </Default>
  );
};

export default account;
