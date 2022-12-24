import { Default } from 'components/layouts/Default';
import { TokenList } from 'components/elements/DEX';

function dex() {
  return (
    <Default pageName="DEX">
      <div>DEX</div>
      <TokenList />
    </Default>
  );
}

export default dex;
