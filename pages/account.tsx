import { Default } from 'components/layouts/Default';
import { Transactions } from 'components/templates/transactions';
import { Transfer } from '../src/components/elements/TransferAssets/Transfer';
const account = () => {
  return (
    <Default pageName="Transactions">
      <Transfer />
      <Transactions />
    </Default>
  );
};

export default account;
