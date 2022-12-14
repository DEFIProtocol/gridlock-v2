import TransferAssets from './components/TransferAssets';
import NativeBalance from './components/NativeBalance';
import Address from './components/Address';
import Blockie from './components/Blockie';
import { Card } from 'antd';

const styles = {
  title: {
    fontSize: '30px',
    fontWeight: '600',
    backgroundColor: 'white',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',
    backgroundColor: 'white',
  },
  card: {
    boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 20%)',
    border: '1px solid #e7eaf3',
    borderRadius: '1rem',
    width: '450px',
    fontSize: '16px',
    fontWeight: '500',
    backgroundColor: 'white',
  },
};

function Transfer({ open, onClose }) {
  if (!open) {
    return null;
  }
  return (
    <div style={{ margin: '5px auto' }}>
      <Card
        style={styles.card}
        title={
          <div style={styles.header}>
            <Blockie scale={5} avatar currentWallet style />
            <Address size="6" copyable />
            <NativeBalance />
          </div>
        }
      >
        <TransferAssets />
      </Card>
      <span style={{ color: '#909090', margin: '0px auto' }} onClick={onClose}>
        Close
      </span>
    </div>
  );
}

export default Transfer;
