import { useMoralis, useNativeBalance } from 'react-moralis';

function NativeBalance(props) {
  const { data: balance } = useNativeBalance(props);
  const { account, isAuthenticated } = useMoralis();

  if (!account || !isAuthenticated) return null;

  return (
    <div
      style={{
        textAlign: 'center',
        whiteSpace: 'nowrap',
        color: 'white',
        marginRight: '10px',
      }}
    >
      {balance.formatted}
    </div>
  );
}

export default NativeBalance;
