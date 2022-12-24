import { useState, useEffect } from 'react';

function getTokenList() {
  const [tokenList, setTokenList] = useState();

  useEffect(() => {
    fetch('https://api.1inch.io/v5.0/1/tokens')
      .then((response) => response.json())
      .then((response) => setTokenList(response));
  }, []);

  return { tokenList };
}

export default getTokenList;
